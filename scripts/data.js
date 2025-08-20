
// Demo dataset + merge with any custom vendors saved from subscription page
window.QS_DATA = (() => {
  const demo = [
    { id: 1, name: 'SparkFix Electricians', category: 'Electrician', rating: 4.7, distance_km: 0.8, tags: ['wiring','AC','fan'], description: 'Certified electricians for wiring, appliance installs, and quick fixes.', image: 'https://images.unsplash.com/photo-1581092336792-3e1c6c40f6d7?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, name: 'PipePro Plumbers', category: 'Plumber', rating: 4.6, distance_km: 1.5, tags: ['leak','bath','kitchen'], description: 'Leak repairs, bathroom fitting, and emergency plumbing.', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, name: 'RoadRescue Mechanics', category: 'Mechanic', rating: 4.5, distance_km: 2.1, tags: ['tyre','battery','service'], description: '24/7 roadside assistance and on-spot repair.', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop' },
    { id: 4, name: 'FreshMart Grocery', category: 'Grocery', rating: 4.2, distance_km: 0.7, tags: ['fruits','veg','snacks'], description: 'Daily essentials and fresh produce delivered fast.', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop' },
    { id: 5, name: 'MediQuick Pharmacy', category: 'Pharmacy', rating: 4.4, distance_km: 1.2, tags: ['meds','health','wellness'], description: 'Prescription meds and wellness products at your doorstep.', image: 'https://images.unsplash.com/photo-1587854692152-1cfc1e7dc3cf?q=80&w=1200&auto=format&fit=crop' },
    { id: 6, name: 'BakeHouse', category: 'Bakery', rating: 4.3, distance_km: 1.0, tags: ['bread','cakes','pastry'], description: 'Fresh breads, cakes and pastries made daily.', image: 'https://images.unsplash.com/photo-1514516870926-2059896c24e9?q=80&w=1200&auto=format&fit=crop' },
    { id: 7, name: 'Wire&Care Electric', category: 'Electrician', rating: 4.1, distance_km: 2.9, tags: ['socket','inverter'], description: 'Affordable electrical maintenance and upgrades.', image: 'https://images.unsplash.com/photo-1572197498886-1e0fba9d8f87?q=80&w=1200&auto=format&fit=crop' },
    { id: 8, name: 'City Pipe Masters', category: 'Plumber', rating: 4.8, distance_km: 0.6, tags: ['heater','clog','sewage'], description: 'Expert plumbing with fair pricing and quick arrival.', image: 'https://images.unsplash.com/photo-1602749369442-9b64b7c7a7be?q=80&w=1200&auto=format&fit=crop' }
  ];
  const custom = JSON.parse(localStorage.getItem('qs_vendors_custom') || '[]');
  return { vendors: [...custom, ...demo] };
})();
