// Demo dataset + merge with any custom vendors saved from subscription page
window.QS_DATA = (() => {
  const demo = [
 {
    id: 1,
    name: 'Megha Electricals',
    category: 'Electrician',
    rating: 4.3,
    distance_km: 0.8,
    tags: ['wiring', 'socket', 'fan'],
    description: 'Electrician on Aakurli Road—quick response and reliable wiring fixes.',
    image: 'https://content.jdmagicbox.com/comp/udupi/z5/0820px820.x820.180807132622.y1z5/catalogue/mega-electrical-malpe-udupi-electrical-shops-alvs3ok0hj.jpg'
  },
  {
    id: 2,
    name: 'Sudhakar Electricals',
    category: 'Electrician',
    rating: 4.1,
    distance_km: 1.2,
    tags: ['hardware', 'cables', 'installation'],
    description: 'Electrical and hardware supplies in Thakur Village with solid reviews.',
    image: 'https://i0.wp.com/ebhubaneswar.com/wp-content/uploads/2023/05/sudhakar-electrical-bapuji-nagar-bhubaneshwar-electrical-shops-guf8cu7r3c.jpg?resize=1536%2C1024&ssl=1'
  },
  {
    id: 3,
    name: 'Smiths Electrical Supplies',
    category: 'Electrician',
    rating: 4.8,
    distance_km: 2.0,
    tags: ['socket install', 'maintenance'],
    description: 'Prompt and courteous residential electrical services.',
    image: 'https://smithselectricalsupplies.co.uk/wp-content/uploads/2017/10/IMG_0743_4_5_Natural-002-1080x607.jpg'
  },
  {
    id: 4,
    name: 'Mahalakshmi Plumbing Work',
    category: 'Plumber',
    rating: 4.4,
    distance_km: 0.9,
    tags: ['leak', 'bath fitting'],
    description: 'Efficient plumbing repairs and fittings in Kandivali East.',
    image: 'https://www.bizkl.com/galleryimgs/t_shop5377.jpg'
  },
  {
    id: 5,
    name: 'PlumbWell',
    category: 'Plumber',
    rating: 4.4,
    distance_km: 1.5,
    tags: ['24/7', 'emergency', 'leak repair'],
    description: '24-hour plumbing support, always ready for emergencies.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.i4sxmsTLMjQ_oO6HR4JQ-wHaHk?pid=Api&P=0&h=180'
  },
  {
    id: 6,
    name: 'Style Mobile',
    category: 'Electronics accessories',
    rating: 4.2,
    distance_km: 1.8,
    tags: ['mobile', 'screen', 'software'],
    description: 'Specialized mobile accessories services across Kandivali East.',
    image: 'https://xindadisplay.com/wp-content/uploads/2019/09/custom-design-mobile-cell-phone-shop-fitting-1.jpg'
  },
  {
    id: 7,
    name: 'Mobile reapir centre',
    category: 'Electronics Repair',
    rating: 4.0,
    distance_km: 2.3,
    tags: ['electronics', 'equipment', 'repair'],
    description: 'Trusted for repairing various electronic equipment in Thakur Village.',
    image: 'https://www.gloucesterbid.uk/wp-content/uploads/DSCF1002-Copy-1024x768.jpg'
  },
  {
    id: 8,
    name: 'Merwans Cake stop',
    category: 'Bakery',
    rating: 4.9,
    distance_km: 0.7,
    tags: ['cakes', 'desserts'],
    description: 'Top-rated bakery on Akurli Road, perfect for sweets and pastries.',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/68/37/a0/outlet-from-outside.jpg'
  },
  {
    id: 9,
    name: ' Cafe K2K',
    category: 'Bakery',
    rating: 4.3,
    distance_km: 0.9,
    tags: ['cafe', 'bakery', 'quick bites'],
    description: 'Cozy vegetarian-friendly café open 24 hours in Centrium.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.i25MxooR3pi4FwhQhk0OwwHaIQ?pid=Api&P=0&h=180'
  },
  {
    id: 10,
    name: 'Bangalore Iyengar Bakery',
    category: 'Bakery',
    rating: 4.5,
    distance_km: 1.1,
    tags: ['traditional', 'bakes'],
    description: 'Traditional bakery delights at Thakur Village—delivery and takeaway.',
    image: 'https://images.unsplash.com/photo-placeholder-kandivali-shop.jpghttps://tse2.mm.bing.net/th/id/OIP.3ZGSatVDABP9dWiBBg2XwgHaGb?pid=Api&P=0&h=180'
  },
  {
    id: 11,
    name: 'Crazy Mens Wear',
    category: 'Clothing',
    rating: 4.7,
    distance_km: 0.6,
    tags: ['men', 'casual', 'blazers'],
    description: 'Stylish men’s wear boutique near Noble Chemist in Vasant Sagar.',
    image: 'https://images.unsplash.com/photo-placeholder-kandivali-shop.jpg'
  },
  {
    id: 12,
    name: 'M S Computers',
    category: 'Computer Repair',
    rating: 4.2,
    distance_km: 1.7,
    tags: ['PC', 'repair', 'hardware'],
    description: 'Computer repair and servicing near Gokul Garden, Thakur Complex.',
    image: 'https://images.unsplash.com/photo-placeholder-kandivali-shop.jpg'
  },
  {
    id: 13,
    name: 'GS Electronics',
    category: 'Electronics Repair',
    rating: 4.3,
    distance_km: 2.0,
    tags: ['LED', 'household', 'repair'],
    description: 'Experienced LED and electronics repair at Thakur Village.',
    image: 'https://images.unsplash.com/photo-placeholder-kandivali-shop.jpg'
  },
  {
    id: 14,
    name: 'Indra Electrician',
    category: 'Electrician',
    rating: 4.0,
    distance_km: 1.4,
    tags: ['residential', 'repair'],
    description: 'Reliable electrician at Dattani Park Road, opposite Union Bank ATM.',
    image: 'https://images.unsplash.com/photo-placeholder-kandivali-shop.jpg'
  },
  {
    id: 15,
    name: 'Tosita Bakery',
    category: 'Bakery',
    rating: 4.1,
    distance_km: 0.5,
    tags: ['bakery', 'sweets'],
    description: 'Popular bakery in D Mart Ganga Nagar, opposite Thakur Mall.',
    image: 'https://images.unsplash.com/photo-placeholder-kandivali-shop.jpg'
  }
  ];
  const custom = JSON.parse(localStorage.getItem('qs_vendors_custom') || '[]');
  return { vendors: [...custom, ...demo] };
})();
