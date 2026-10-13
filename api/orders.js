const { neon } = require('@neondatabase/serverless');

let isTableInitialized = false;

async function getSql() {
  const dbUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!dbUrl) return null;
  const sql = neon(dbUrl);
  if (!isTableInitialized) {
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS orders (
          id VARCHAR(64) PRIMARY KEY,
          client_name VARCHAR(255),
          client_phone VARCHAR(64),
          neighborhood VARCHAR(255),
          client_address TEXT,
          reference TEXT,
          delivery_type VARCHAR(32),
          distance_km NUMERIC,
          delivery_fee NUMERIC,
          subtotal NUMERIC,
          total NUMERIC,
          payment_method_type VARCHAR(64),
          delivery_payment_subtype VARCHAR(64),
          change_amount VARCHAR(64),
          payment_text VARCHAR(255),
          order_notes TEXT,
          items_json JSONB,
          items_description TEXT,
          items_count INT,
          status VARCHAR(32) DEFAULT 'preparo',
          cancel_reason TEXT,
          created_at BIGINT
        );
      `;
      isTableInitialized = true;
    } catch (e) {
      console.warn('Init table warning:', e.message);
    }
  }
  return sql;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const sql = await getSql();
  if (!sql) {
    return res.status(200).json({
      db_connected: false,
      message: 'Vercel Postgres (Neon) ainda não configurado. Adicione a variável DATABASE_URL ou crie a Store no painel Vercel.',
      orders: []
    });
  }

  try {
    // Auto-limpeza preventiva (Rolling Window de 60 dias) para manter o banco eternamente leve
    const sixtyDaysAgo = Date.now() - (60 * 24 * 60 * 60 * 1000);
    await sql`DELETE FROM orders WHERE created_at < ${sixtyDaysAgo}`;

    if (req.method === 'GET') {
      const rows = await sql`SELECT * FROM orders ORDER BY created_at DESC LIMIT 100`;
      const orders = rows.map(r => ({
        id: r.id,
        clientName: r.client_name,
        clientPhone: r.client_phone,
        neighborhood: r.neighborhood,
        clientAddress: r.client_address,
        reference: r.reference,
        deliveryType: r.delivery_type,
        distanceKm: parseFloat(r.distance_km) || 0,
        deliveryFee: parseFloat(r.delivery_fee) || 0,
        subtotal: parseFloat(r.subtotal) || 0,
        total: parseFloat(r.total) || 0,
        paymentMethodType: r.payment_method_type,
        deliveryPaymentSubtype: r.delivery_payment_subtype,
        changeAmount: r.change_amount,
        paymentText: r.payment_text,
        orderNotes: r.order_notes,
        items: r.items_json || [],
        itemsDescription: r.items_description,
        itemsCount: r.items_count,
        status: r.status,
        cancelReason: r.cancel_reason,
        createdAt: Number(r.created_at)
      }));
      return res.status(200).json({ db_connected: true, orders });
    }

    if (req.method === 'POST') {
      const order = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (!order || !order.id) {
        return res.status(400).json({ error: 'Pedido inválido (id obrigatório)' });
      }

      const id = String(order.id);
      const clientName = order.clientName || 'Cliente';
      const clientPhone = order.clientPhone || '';
      const neighborhood = order.neighborhood || '';
      const clientAddress = order.clientAddress || '';
      const reference = order.reference || '';
      const deliveryType = order.deliveryType || 'delivery';
      const distanceKm = Number(order.distanceKm) || 0;
      const deliveryFee = Number(order.deliveryFee) || 0;
      const subtotal = Number(order.subtotal) || 0;
      const total = Number(order.total) || 0;
      const paymentMethodType = order.paymentMethodType || 'PIX';
      const deliveryPaymentSubtype = order.deliveryPaymentSubtype || '';
      const changeAmount = order.changeAmount || '';
      const paymentText = order.paymentText || 'PIX';
      const orderNotes = order.orderNotes || '';
      const itemsJson = JSON.stringify(order.items || []);
      const itemsDescription = order.itemsDescription || '';
      const itemsCount = Number(order.itemsCount) || 1;
      const status = order.status || (order.paymentMethodType === 'PIX' ? 'pix' : 'preparo');
      const createdAt = Number(order.createdAt || Date.now());

      await sql`
        INSERT INTO orders (
          id, client_name, client_phone, neighborhood, client_address, reference,
          delivery_type, distance_km, delivery_fee, subtotal, total,
          payment_method_type, delivery_payment_subtype, change_amount, payment_text,
          order_notes, items_json, items_description, items_count, status, created_at
        ) VALUES (
          ${id}, ${clientName}, ${clientPhone}, ${neighborhood}, ${clientAddress}, ${reference},
          ${deliveryType}, ${distanceKm}, ${deliveryFee}, ${subtotal}, ${total},
          ${paymentMethodType}, ${deliveryPaymentSubtype}, ${changeAmount}, ${paymentText},
          ${orderNotes}, ${itemsJson}, ${itemsDescription}, ${itemsCount}, ${status}, ${createdAt}
        )
        ON CONFLICT (id) DO UPDATE SET
          status = EXCLUDED.status,
          total = EXCLUDED.total;
      `;

      return res.status(200).json({ success: true, id, db_connected: true });
    }

    if (req.method === 'PATCH' || req.method === 'PUT') {
      const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (!data || !data.id) {
        return res.status(400).json({ error: 'id obrigatório' });
      }
      const id = String(data.id);
      const status = data.status;
      const cancelReason = data.cancelReason || null;

      if (cancelReason) {
        await sql`UPDATE orders SET status = ${status}, cancel_reason = ${cancelReason} WHERE id = ${id}`;
      } else {
        await sql`UPDATE orders SET status = ${status} WHERE id = ${id}`;
      }

      return res.status(200).json({ success: true, db_connected: true });
    }

    if (req.method === 'DELETE') {
      const { id } = req.query || {};
      if (id) {
        await sql`DELETE FROM orders WHERE id = ${String(id)}`;
      } else {
        await sql`DELETE FROM orders`;
      }
      return res.status(200).json({ success: true, db_connected: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Database error in /api/orders:', error);
    return res.status(500).json({ error: error.message });
  }
};
