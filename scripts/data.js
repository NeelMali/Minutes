// Demo dataset + merge with any custom vendors saved from subscription page
window.QS_DATA = (() => {
  const demo = [
  {
    id: 1,
    name: 'Krishna Electrician',
    category: 'Electrician',
    rating: 4.3,
    distance_km: 0.8,
    tags: ['wiring', 'socket', 'AC installation'],
    description: 'Quick-response electrician near Gautam Nagar on Aakurli Road.',
    image: 'https://www.justdial.com/Mumbai/Krishna-Electrician-Near-White-House-Kandivali-East/022PXX22-XX22-220714172538-K9G8_BZDET/photos/photo-1'
  },
  {
    id: 2,
    name: 'Shree Krishna Electric & Hardware Store',
    category: 'Electrician',
    rating: 4.1,
    distance_km: 1.2,
    tags: ['hardware', 'cables', 'installation'],
    description: 'Well-established electrical hardware store in Thakur Village.',
    image: 'https://www.justdial.com/Mumbai/Shree-Krishna-Electric-Hardware-Stores-Thakur-Village-kandivali-East/022PXX22-XX22-120403025035-G4V4_BZDET/photos/photo-1'
  },
  {
    id: 3,
    name: 'Jagannath Plumbing Work',
    category: 'Plumber',
    rating: 4.4,
    distance_km: 0.9,
    tags: ['leak repair', 'bath fitting', '24/7'],
    description: 'Reliable plumbing services near Western Express Highway, Akurli Road.',
    image: 'https://www.justdial.com/Mumbai/Jagannath-Plumbing-Work-Kandivali-East/022PXX22-XX22-241212120420-F3J8_BZDET/photos/photo-1'
  },
  {
    id: 4,
    name: 'Pratap Plumbing Works',
    category: 'Plumber',
    rating: 4.4,
    distance_km: 1.5,
    tags: ['emergency', 'leak repair'],
    description: '24-hour plumbing support across Kandivali East.',
    image: 'https://www.justdial.com/Mumbai/Plumbers-in-Kandivali-East/nct-10378025' // image gallery listing
  },
  {
    id: 5,
    name: 'Devanshi Plumber',
    category: 'Plumber',
    rating: 4.5,
    distance_km: 1.8,
    tags: ['bath fitting', 'pipe repair'],
    description: 'Trusted plumber in Radha Krishna Society area.',
    image: 'https://www.justdial.com/Mumbai/Plumbers-in-Kandivali-East/nct-10378025'
  },
  {
    id: 6,
    name: 'Mobile Mazza',
    category: 'Electronics Repair',
    rating_km: 4.2,
    distance_km: 1.8,
    tags: ['mobile', 'screen repair', 'software fix'],
    description: 'Specialized mobile repair services in Kandivali East.',
    image: 'https://www.justdial.com/Mumbai/Electronic-Goods-Repair-Services-in-Kandivali-East/nct-10890947' // image listing
  },
  {
    id: 7,
    name: 'GS Electronics',
    category: 'Electronics Repair',
    rating: 4.3,
    distance_km: 2.0,
    tags: ['LED repair', 'household electronics'],
    description: 'Experienced LED and electronics repair at Thakur Village.',
    image: 'https://www.facebook.com/groups/1733811590082137/posts/gs-electronics-with-years-of-experience-we-repair-all-brands-and-models-of-ledlc' // shared visuals
  },
  {
    id: 8,
    name: 'Fondant N Frost',
    category: 'Bakery',
    rating: 4.9,
    distance_km: 0.7,
    tags: ['cakes', 'desserts', 'bakes'],
    description: 'Top-rated bakery on Aakurli Road.',
    image: 'https://www.justdial.com/Mumbai/Bakeries-in-Kandivali-East/nct-10033880' // gallery
  },
  {
    id: 9,
    name: 'Tosita Bakery',
    category: 'Bakery',
    rating: 4.1,
    distance_km: 0.5,
    tags: ['bakery', 'sweets', 'snacks'],
    description: 'Popular bakery at D Mart Ganga Nagar near Thakur Mall.',
    image: 'https://www.tripadvisor.in/Restaurant_Review-g304554-d7979398-Reviews-Tosita_Bakery-Mumbai_Maharashtra.html' // listing with photos
  },
  {
    id: 10,
    name: 'Krishna Paan Shop',
    category: 'Food & Beverage',
    rating: 4.5,
    distance_km: 1.0,
    tags: ['paan', 'snacks', 'delivery'],
    description: 'Local paan shop near Kotak Mahindra Bank, Phase V.',
    image: 'https://www.zomato.com/mumbai/krishna-paan-shop-kandivali-east' // listing with gallery
  }
  ];
  const custom = JSON.parse(localStorage.getItem('qs_vendors_custom') || '[]');
  return { vendors: [...custom, ...demo] };
})();
