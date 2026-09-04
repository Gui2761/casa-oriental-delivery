// ==================== CATÁLOGO OFICIAL — CASA ORIENTAL DELIVERY ====================
// Aracaju / SE — WhatsApp: (79) 98172-8613

const PRODUCTS = [
  // 1. COMBOS
  { id: 10, cat: 'combos', name: 'Combo 10 Peças', desc: '10 peças variadas de sushis e hots selecionados pelo chef', price: 23.00, img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=300&q=80' },
  { id: 11, cat: 'combos', name: 'Combo 15 Peças', desc: '15 peças sortidas (sushis, uramakis e hots crocantes)', price: 28.00, img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80' },
  { id: 12, cat: 'combos', name: 'Combo 20 Peças', desc: '20 peças perfeitas para compartilhar com qualidade e frescor', price: 33.00, img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80' },
  { id: 14, cat: 'combos', name: 'Combo 25 Peças (Destaque)', desc: '25 peças especiais com os favoritos da casa e acabamento impecável', price: 40.00, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80', badge: 'MAIS PEDIDO' },
  { id: 15, cat: 'combos', name: 'Combo 35 Peças', desc: '35 peças generosas com sushis simples, especiais e hots', price: 52.00, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=300&q=80' },
  { id: 16, cat: 'combos', name: 'Combo 45 Peças (Família)', desc: 'Banquete com 45 peças variadas para a família toda', price: 65.00, img: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=300&q=80' },

  // 2. SUSHIS SIMPLES / URAMAKIS
  { id: 20, cat: 'sushis_simples', name: 'Uramaki Kani', desc: 'Arroz temperado por fora com gergelim e recheio de kani', price: 3.00, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80' },
  { id: 21, cat: 'sushis_simples', name: 'Uramaki Atum', desc: 'Arroz por fora, gergelim e recheio cremoso de atum', price: 3.50, img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=300&q=80' },
  { id: 22, cat: 'sushis_simples', name: 'Uramaki Camarão', desc: 'Arroz por fora, gergelim e camarão selecionado', price: 5.00, img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80' },
  { id: 23, cat: 'sushis_simples', name: 'Uramaki Manga', desc: 'Refrescante uramaki com lâmina de manga fresca', price: 3.00, img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80' },
  { id: 24, cat: 'sushis_simples', name: 'Uramaki Morango', desc: 'Toque doce e especial de morango com arroz e gergelim', price: 4.00, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=300&q=80' },
  { id: 25, cat: 'sushis_simples', name: 'Uramaki Kiwi', desc: 'Uramaki agridoce contemporâneo com kiwi fresco', price: 4.00, img: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=300&q=80' },
  { id: 26, cat: 'sushis_simples', name: 'Uramaki Abacate', desc: 'Sabor clássico e textura aveludada do abacate', price: 3.00, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80' },
  { id: 27, cat: 'sushis_simples', name: 'Uramaki Califórnia', desc: 'Kani, pepino crocante e abacate envolto em gergelim', price: 4.00, img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=300&q=80' },
  { id: 28, cat: 'sushis_simples', name: 'Uramaki Kani c/ Goiabada', desc: 'Deliciosa e surpreendente combinação agridoce', price: 5.00, img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80' },

  // 3. HOTS & ESPECIAIS
  { id: 30, cat: 'hots_especiais', name: 'Uramaki Roll Ebi (Camarão)', desc: 'Massa primavera frita, arroz, cream cheese e camarão frito empanado no panko', price: 6.00, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80', badge: 'ESPECIAL' },
  { id: 31, cat: 'hots_especiais', name: 'Uramaki Roll Patê de Atum', desc: 'Massa primavera frita, cream cheese e atum com casquinha panko', price: 5.00, img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80' },
  { id: 32, cat: 'hots_especiais', name: 'Uramaki Roll Filadélfia', desc: 'Massa primavera crocante, salmão fresco e cream cheese no panko', price: 7.00, img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80', badge: 'TOP' },
  { id: 33, cat: 'hots_especiais', name: 'Uramaki Roll Kani', desc: 'Massa primavera crocante, kani e cream cheese com panko', price: 5.00, img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=300&q=80' },
  { id: 34, cat: 'hots_especiais', name: 'Hot Roll Tradicional', desc: 'Hot roll clássico envolto com alga nori bem crocante', price: 4.00, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=300&q=80' },
  { id: 35, cat: 'hots_especiais', name: 'Hot Salmão', desc: 'Recheado de salmão envolto em alga nori, frito na hora', price: 6.00, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=300&q=80' },
  { id: 36, cat: 'hots_especiais', name: 'Hot Camarão', desc: 'Recheio de camarão envolto em nori e farinha panko', price: 5.00, img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80' },
  { id: 37, cat: 'hots_especiais', name: 'Hot Atum', desc: 'Recheio de atum com casquinha crocante envolto em nori', price: 3.00, img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=300&q=80' },
  { id: 38, cat: 'hots_especiais', name: 'Hot Kani', desc: 'Kani empanado e frito envolto em nori', price: 3.00, img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80' },
  { id: 39, cat: 'hots_especiais', name: 'Hot Especial com Camarão', desc: 'Sushi hot em massa de rolinho finalizado com camarão por cima', price: 7.00, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80', badge: 'CHEF' },
  { id: 40, cat: 'hots_especiais', name: 'Hot Especial com Salmão', desc: 'Sushi hot em massa de rolinho finalizado com salmão fresco por cima', price: 7.00, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=300&q=80', badge: 'CHEF' },

  // 4. NIGUIRIS, JOYS E SASHIMIS
  { id: 41, cat: 'niguiris_joys', name: 'Niguiri de Salmão', desc: 'Fatia generosa de salmão cru sobre arroz prensado', price: 7.00, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=300&q=80' },
  { id: 42, cat: 'niguiris_joys', name: 'Niguiri de Camarão', desc: 'Camarão cozido ao ponto sobre bolinho de arroz', price: 6.00, img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80' },
  { id: 43, cat: 'niguiris_joys', name: 'Niguiri Skin', desc: 'Pele de salmão grelhada bem crocante com molho especial', price: 6.00, img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=300&q=80' },
  { id: 44, cat: 'niguiris_joys', name: 'Niguiri Texano Salmão Skin', desc: 'Salmão skin com toque texano picante e marcante', price: 6.00, img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80' },
  { id: 45, cat: 'niguiris_joys', name: 'Joy Tradicional', desc: 'Lâmina nobre de salmão envolvendo arroz com cream cheese', price: 7.00, img: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=300&q=80' },
  { id: 46, cat: 'niguiris_joys', name: 'Joy Maçaricado', desc: 'Salmão levemente maçaricado no fogo com gotas de tarê', price: 7.00, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80', badge: 'PREMIUM' },
  { id: 47, cat: 'niguiris_joys', name: 'Joy com Camarão Frito', desc: 'Joy de salmão coroado com camarão empanado crocante', price: 7.00, img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80', badge: 'TOP' },
  { id: 48, cat: 'niguiris_joys', name: 'Empanado de Camarão', desc: 'Camarão selecionado empanado e frito no panko', price: 7.00, img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80' },
  { id: 49, cat: 'niguiris_joys', name: 'Sashimi de Salmão', desc: 'Fatias nobres de salmão cru fresco selecionado', price: 7.00, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=300&q=80' },

  // 5. LINHA DE TEMAKIS (GRANDES, MÉDIOS E MINIS)
  { id: 50, cat: 'temakis', name: 'Temaki Salmão Cru (Grande)', desc: 'Cone de alga nori crocante com salmão e cream cheese', price: 34.00, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80', badge: 'CLÁSSICO' },
  { id: 51, cat: 'temakis', name: 'Temaki Salmão Hot (Grande Frito)', desc: 'Cone de temaki inteiramente empanado e frito, super recheado', price: 38.00, img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80', badge: 'CAMPEÃO' },
  { id: 52, cat: 'temakis', name: 'Temaki Camarão Cru (Grande)', desc: 'Camarões selecionados com cream cheese e cebolinha', price: 29.00, img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80' },
  { id: 53, cat: 'temakis', name: 'Temaki Camarão Hot (Grande Frito)', desc: 'Temaki de camarão empanado crocante por fora', price: 35.00, img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=300&q=80' },
  { id: 54, cat: 'temakis', name: 'Temaki Kani Cru (Grande)', desc: 'Cone clássico recheado com kani desfiado e arroz', price: 25.00, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=300&q=80' },
  { id: 55, cat: 'temakis', name: 'Temaki Kani Hot (Grande Frito)', desc: 'Temaki de kani frito e crocante', price: 28.00, img: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=300&q=80' },
  { id: 56, cat: 'temakis', name: 'Temaki Atum Cru (Grande)', desc: 'Cone com atum fresco picado e tempero especial', price: 27.00, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80' },
  { id: 57, cat: 'temakis', name: 'Temaki Atum Hot (Grande Frito)', desc: 'Cone com atum empanado e frito na hora', price: 30.00, img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80' },
  { id: 58, cat: 'temakis', name: 'Temaki Especial Cru (Grande)', desc: 'Mix nobre com salmão, camarão e kani com cream cheese', price: 37.00, img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80', badge: 'ESPECIAL' },
  { id: 59, cat: 'temakis', name: 'Temaki Especial Hot (Grande Frito)', desc: 'Cone especial gigante empanado e frito', price: 40.00, img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=300&q=80', badge: 'TOP' },
  // Temakinhos Médios
  { id: 60, cat: 'temakis', name: 'Temakinho Salmão Cru (Médio)', desc: 'Tamanho médio ideal para matar a vontade', price: 15.00, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80' },
  { id: 61, cat: 'temakis', name: 'Temakinho Salmão Hot (Médio)', desc: 'Tamanho médio empanado e crocante', price: 17.00, img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80' },
  { id: 62, cat: 'temakis', name: 'Temakinho Camarão Cru (Médio)', desc: 'Tamanho médio recheado com camarão fresco', price: 13.00, img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80' },
  { id: 63, cat: 'temakis', name: 'Temakinho Camarão Hot (Médio)', desc: 'Tamanho médio com camarão empanado frito', price: 15.00, img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=300&q=80' },
  { id: 64, cat: 'temakis', name: 'Temakinho Kani Cru (Médio)', desc: 'Tamanho médio com kani cremoso', price: 10.00, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=300&q=80' },
  { id: 65, cat: 'temakis', name: 'Temakinho Kani Hot (Médio)', desc: 'Tamanho médio com kani frito e panko', price: 12.00, img: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=300&q=80' },
  // Minis Temakis
  { id: 66, cat: 'temakis', name: 'Mini Temakinho Kani Cru', desc: 'Mini porção petisco para experimentar', price: 3.50, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80' },
  { id: 67, cat: 'temakis', name: 'Mini Temakinho Camarão Cru', desc: 'Mini cone com camarão fresco', price: 4.50, img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80' },
  { id: 68, cat: 'temakis', name: 'Mini Temakinho Salmão Cru', desc: 'Mini cone recheado com salmão', price: 5.50, img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80' },
  { id: 69, cat: 'temakis', name: 'Mini Temakinho Especial Cru', desc: 'Mini cone com mix de salmão e camarão', price: 6.50, img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=300&q=80' },
  { id: 70, cat: 'temakis', name: 'Mini Temakinho Kani Hot', desc: 'Mini cone de kani empanado frito', price: 4.50, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=300&q=80' },
  { id: 71, cat: 'temakis', name: 'Mini Temakinho Camarão Hot', desc: 'Mini cone de camarão empanado frito', price: 5.50, img: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=300&q=80' },

  // 6. YAKISSOBA ARTESANAL (500G E 1KG)
  { id: 72, cat: 'yakissoba', name: 'Yakissoba de Frango (500g)', desc: 'Massa tradicional, pedaços de frango dourado e legumes ao molho especial', price: 25.99, img: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80' },
  { id: 73, cat: 'yakissoba', name: 'Yakissoba de Frango (1 kg)', desc: 'Porção família com 1 kg de yakissoba de frango suculento', price: 37.99, img: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80', badge: 'FAMÍLIA' },
  { id: 74, cat: 'yakissoba', name: 'Yakissoba de Legumes (500g)', desc: 'Opção vegetariana rica em brócolis, couve-flor, cenoura e acelga fresca', price: 27.00, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80' },
  { id: 75, cat: 'yakissoba', name: 'Yakissoba de Legumes (1 kg)', desc: '1 kg de yakissoba artesanal repleto de legumes frescos', price: 30.00, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80' },
  { id: 76, cat: 'yakissoba', name: 'Yakissoba de Carne (500g)', desc: 'Tiras macias de carne bovina, legumes e molho shoyu encorpado', price: 29.99, img: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80' },
  { id: 77, cat: 'yakissoba', name: 'Yakissoba de Carne (1 kg)', desc: '1 kg de yakissoba de carne suculenta com legumes', price: 40.00, img: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80', badge: 'FAMÍLIA' },
  { id: 78, cat: 'yakissoba', name: 'Yakissoba Carne c/ Frango (500g)', desc: 'Combinação clássica de carne bovina e frango com legumes', price: 32.99, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80' },
  { id: 79, cat: 'yakissoba', name: 'Yakissoba Carne c/ Frango (1 kg)', desc: '1 kg de yakissoba misto de carne e frango com legumes', price: 36.99, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80' },
  { id: 80, cat: 'yakissoba', name: 'Yakissoba Misto Completo (500g)', desc: 'Carne, frango, legumes selecionados e molho oriental', price: 35.99, img: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80' },
  { id: 81, cat: 'yakissoba', name: 'Yakissoba Misto Completo (1 kg)', desc: '1 kg de yakissoba misto completo para a família', price: 44.00, img: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80' },
  { id: 82, cat: 'yakissoba', name: 'Yakissoba de Camarão (500g)', desc: 'Camarões suculentos salteados na wok com legumes frescos', price: 36.99, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80', badge: 'ESPECIAL' },
  { id: 83, cat: 'yakissoba', name: 'Yakissoba de Camarão (1 kg)', desc: '1 kg do nosso melhor yakissoba de camarão', price: 43.99, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80', badge: 'TOP' },
  { id: 84, cat: 'yakissoba', name: 'Yakissoba sem Legumes (500g)', desc: 'Para quem ama apenas massa e carnes (sem legumes)', price: 43.99, img: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80' },
  { id: 85, cat: 'yakissoba', name: 'Yakissoba sem Legumes (1 kg)', desc: '1 kg apenas com muita carne, frango e massa pura', price: 49.99, img: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80' },
  { id: 86, cat: 'yakissoba', name: 'Adicional de Legumes p/ Yakissoba', desc: 'Porção extra de legumes salteados na wok', price: 3.00, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80' },
  { id: 87, cat: 'yakissoba', name: 'Adicional de Carnes p/ Yakissoba', desc: 'Porção extra generosa de carnes', price: 5.00, img: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80' },

  // 7. ROLINHO PRIMAVERA (HARUMAKI)
  { id: 90, cat: 'rolinhos', name: 'Rolinho de Queijo', desc: 'Massa fininha e crocante recheada com queijo derretido', price: 8.00, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=300&q=80' },
  { id: 91, cat: 'rolinhos', name: 'Rolinho de Carne', desc: 'Recheio de carne moída bem temperada com legumes', price: 9.00, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=300&q=80' },
  { id: 92, cat: 'rolinhos', name: 'Rolinho de Frango', desc: 'Frango desfiado suculento e crocante', price: 8.00, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=300&q=80' },
  { id: 93, cat: 'rolinhos', name: 'Rolinho de Camarão', desc: 'Camarões selecionados com tempero leve e massa crocante', price: 10.00, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=300&q=80', badge: 'TOP' },
  { id: 94, cat: 'rolinhos', name: 'Rolinho de Salmão', desc: 'Massa harumaki sequinha recheada de salmão e cream cheese', price: 10.00, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=300&q=80' },
  { id: 95, cat: 'rolinhos', name: 'Rolinho de Legumes', desc: 'Repolho, cenoura e temperos orientais clássicos', price: 7.00, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=300&q=80' },
  { id: 96, cat: 'rolinhos', name: 'Rolinho Banana Flambada', desc: 'Sobremesa com banana caramelizada e canela', price: 8.00, img: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80' },
  { id: 97, cat: 'rolinhos', name: 'Rolinho Romeu e Julieta', desc: 'Queijo derretido com goiabada cremosa', price: 9.00, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=300&q=80', badge: 'DOCE' },
  { id: 98, cat: 'rolinhos', name: 'Rolinho Banana c/ Doce de Leite', desc: 'Banana frita com recheio cremoso de doce de leite', price: 10.00, img: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80' },
  { id: 99, cat: 'rolinhos', name: 'Rolinho Banana c/ Nutella', desc: 'A combinação favorita: banana fresquinha com Nutella original', price: 10.00, img: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80', badge: 'FAVORITO' },

  // 8. BEBIDAS (REFRIGERANTES)
  { id: 100, cat: 'bebidas', name: 'Coca-Cola Lata 350ml', desc: 'Refrigerante em lata geladinho', price: 6.00, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80' },
  { id: 101, cat: 'bebidas', name: 'Fanta Lata 350ml', desc: 'Refrigerante em lata bem gelado', price: 5.00, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80' },
  { id: 102, cat: 'bebidas', name: 'Guaraná Antarctica Lata 350ml', desc: 'Guaraná tradicional gelado', price: 5.00, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80' },
  { id: 103, cat: 'bebidas', name: 'Coca-Cola 1 Litro', desc: 'Garrafa de 1 litro ideal para compartilhar', price: 10.00, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80' },
  { id: 104, cat: 'bebidas', name: 'Pepsi 1 Litro', desc: 'Garrafa de 1 litro gelada', price: 9.00, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80' },
  { id: 105, cat: 'bebidas', name: 'Guaraná Antarctica 1 Litro', desc: 'Garrafa de 1 litro geladinha', price: 9.00, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80' },

  // 9. MOLHOS E EXTRAS
  { id: 115, cat: 'molhos', name: 'Molho Tarê Especial', desc: 'Pote com molho agridoce e encorpado artesanal', price: 1.50, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80' },
  { id: 116, cat: 'molhos', name: 'Molho Shoyu Extra', desc: 'Sachê/pote de molho de soja tradicional', price: 1.00, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80' },
  { id: 117, cat: 'molhos', name: 'Par de Hashi de Bambu', desc: 'Pauzinhos tradicionais para sushi', price: 1.00, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80' }
];

const CATEGORIES = {
  combos: { title: '🍱 Combos de Sushis', desc: 'Combos variados montados com a melhor seleção de peças da casa' },
  sushis_simples: { title: '🍙 Sushis Simples (Uramakis)', desc: 'Arroz por fora e gergelim crocante com recheios variados' },
  hots_especiais: { title: '🔥 Hots & Sushis Especiais', desc: 'Empanados em massa de rolinho primavera ou alga nori com panko' },
  niguiris_joys: { title: '🍣 Niguiris, Joys e Sashimis', desc: 'Cortes nobres de salmão fresco, camarão e lâminas maçaricadas' },
  temakis: { title: '🍙 Linha de Temakis', desc: 'Cones tradicionais, temakinhos e minis nas versões cruas e hots' },
  yakissoba: { title: '🥢 Yakissoba Artesanal', desc: 'Massa clássica salteada na wok com carnes nobres e legumes frescos' },
  rolinhos: { title: '🌯 Rolinhos Primavera (Harumaki)', desc: 'Massa fininha e crocante com recheios salgados e sobremesas' },
  bebidas: { title: '🥤 Bebidas & Refrigerantes', desc: 'Refrigerantes em lata de 350ml e garrafas de 1 Litro bem geladas' },
  molhos: { title: '🥢 Molhos & Acessórios', desc: 'Molhos extras e palitinhos hashi adicionais para o seu pedido' }
};

const DEFAULT_FEATURED_ID = 14; // Combo 25 Peças
const DEFAULT_STORE_IS_OPEN = true; // Loja aberta por padrão
const DEFAULT_DELIVERY_TIME = '30-50 min'; // Tempo estimado padrão
const DEFAULT_CLOSED_NOTICE = 'Restaurante fechado no momento. Atendimento de terça a domingo das 18h às 23h30.';
