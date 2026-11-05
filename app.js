/**
 * ========================================================
 * SORA PROPERTY — APPLICATION LOGIC ENGINE (app.js)
 * Clean, Modular, Anti-Slop Architectural Platform Engine
 * ========================================================
 */

// Database Lengkap Katalog & Arsitektur Hunian SORA
const SORA_CATALOG = {
  skylight: {
    id: 'skylight',
    title: 'The Skylight Pavilion',
    vibe: 'Tropical Brutalist',
    price: 8800000000,
    monthlyEst: 48240000,
    area: '420 m²',
    specs: '4 BR + 1 Studio',
    location: 'BSD City, Tangerang Selatan',
    architect: 'Studio Andramatin Partner',
    light: 'Utara - Selatan (Merata sepanjang hari)',
    materials: 'Beton ekspos non-porous, void kaca double-glazed, batu andesit',
    maintenance: 'Rendah (Material tahan cuaca ekstrem)',
    bestFor: 'wfh',
    blueprint: {
      orientation: 'Utara - Selatan (Bebas radiasi panas sore)',
      wind: 'Ventilasi Silang Aktif 24 Jam',
      ceiling: '3.8 - 6.5 Meter (Double Height Void)',
      daylight: '94% Teriluminasi Alami',
      level1: [
        { name: 'Inner Courtyard & Water Reflection', dims: '6.2m x 4.8m', type: 'garden' },
        { name: 'Double-Height Living & Dining Room', dims: '9.0m x 6.5m', type: 'public' },
        { name: 'Open Island Kitchen & Pantry', dims: '4.5m x 4.0m', type: 'public' },
        { name: 'Guest Bedroom Suite 1', dims: '4.8m x 4.2m', type: 'private' },
        { name: 'Covered Carport (2 EV Ready)', dims: '6.0m x 5.8m', type: 'public' }
      ],
      level2: [
        { name: 'Master Penthouse Suite & Dressing Room', dims: '7.8m x 5.6m', type: 'private' },
        { name: 'Ensuite Spa Bathroom with Skylight', dims: '4.2m x 3.5m', type: 'private' },
        { name: 'Mezzanine Architectural Studio (WFH)', dims: '5.5m x 4.2m', type: 'public' },
        { name: 'Junior Bedroom Suite 2 & 3', dims: '5.0m x 4.0m', type: 'private' },
        { name: 'Rooftop Stargazing Deck', dims: '5.2m x 3.8m', type: 'garden' }
      ]
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 01 • Inner Courtyard & Reflection Pool',
        desc: 'Void kaca ganda di tengah bangunan menghadirkan semilir angin sejuk dan refleksi riak air yang menenangkan ke dalam ruang keluarga.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 02 • High-Ceiling Living Void (6.5m)',
        desc: 'Ketinggian siling 6.5 meter dengan dinding semen ekspos mulus menyerap cahaya matahari pagi tanpa pantulan panas silau.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 03 • Master Bedroom Suite & Private Garden',
        desc: 'Kamar tidur utama dengan pemandangan langsung ke taman privat bambu Jepang, dirancang kedap suara hingga 42dB.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 04 • Mezzanine Architectural Studio',
        desc: 'Area kerja kreatif WFH di lantai mezzanine dengan sudut pandang terbuka ke seluruh ruang bawah dan langit.'
      }
    ],
    materialsSpecs: [
      {
        title: 'Struktur Beton Ekspos Non-Porous',
        desc: 'Dikerjakan dengan formwork kayu pinus berserat halus. Permukaan beton dilapisi sealer nano-silane tahan jamur dan lumut hingga 15 tahun.'
      },
      {
        title: 'Kaca Double-Glazed Low-E 16mm',
        desc: 'Menolak 68% panas radiasi infra-merah matahari dan meredam kebisingan luar hingga 38dB untuk kenyamanan akustik suci.'
      },
      {
        title: 'Kayu Ulin Kalimantan Grade A',
        desc: 'Digunakan pada dek kolam dan kisi-kisi luar. Kuat terhadap air hujan tropis dan rayap secara alami tanpa bahan kimia beracun.'
      },
      {
        title: 'Rainwater Harvesting 2.500L',
        desc: 'Sistem penampungan dan filtrasi air hujan terintegrasi untuk menyiram tanaman courtyard dan flushing otomatis ramah lingkungan.'
      }
    ]
  },
  mori: {
    id: 'mori',
    title: 'Mori Zen Sanctuary',
    vibe: 'Japandi Warm',
    price: 6900000000,
    monthlyEst: 37800000,
    area: '310 m²',
    specs: '3 BR Ensuite',
    location: 'Cipete, Jakarta Selatan',
    architect: 'Atelier SORA',
    light: 'Timur (Limpahan cahaya lembut di pagi hari)',
    materials: 'Kayu jati bersertifikat, plester kapur alami, taman koral',
    maintenance: 'Sedang (Perawatan berkala lapisan kayu jati)',
    bestFor: 'zen',
    blueprint: {
      orientation: 'Menghadap Timur (Cahaya Sehat Pagi Hari)',
      wind: 'Ventilasi Silang Mengalir Lewat Shoji Vents',
      ceiling: '3.6 Meter (Plafon Balok Kayu Ekspos)',
      daylight: '89% Teriluminasi Lembut',
      level1: [
        { name: 'Karesansui Dry Zen Garden', dims: '5.2m x 3.8m', type: 'garden' },
        { name: 'Tatami Living Space & Tea Nook', dims: '7.5m x 5.8m', type: 'public' },
        { name: 'Minimalist Dining & Teppan Island', dims: '4.8m x 4.0m', type: 'public' },
        { name: 'Powder Room & Foot Bath', dims: '2.8m x 2.2m', type: 'public' },
        { name: 'Private Zen Garage (2 Mobil)', dims: '5.8m x 5.5m', type: 'public' }
      ],
      level2: [
        { name: 'Primary Bedroom with Onsen Tub', dims: '6.8m x 5.2m', type: 'private' },
        { name: 'Guest Sanctuary Suite 1', dims: '4.5m x 4.0m', type: 'private' },
        { name: 'Meditation & Yoga Loft', dims: '4.8m x 3.6m', type: 'public' },
        { name: 'Outdoor Bonsai Balcony', dims: '3.8m x 2.5m', type: 'garden' }
      ]
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 01 • Living Room & Kayu Jati Solid',
        desc: 'Pintu geser kayu jati dengan kisi-kisi shoji modern membingkai pemandangan taman zen basah di samping ruang keluarga.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 02 • Ruang Meditasi & Yoga Minimalis',
        desc: 'Lantai kayu jati hangat dengan pencahayaan skylight lembut yang menciptakan keheningan spiritual untuk rehat mental.'
      },
      {
        url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 03 • Onsen-Inspired Master Ensuite',
        desc: 'Bak mandi teraso batu hitam alami yang terhubung langsung dengan taman lumut tertutup, menjamin privasi absolut.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 04 • Dapur Terbuka & Meja Kayu Utuh',
        desc: 'Konsep dapur minim sekat dengan meja makan kayu trembesi solid sepanjang 3 meter sebagai pusat berkumpul keluarga.'
      }
    ],
    materialsSpecs: [
      {
        title: 'Kayu Jati Solid FSC Certified',
        desc: 'Seluruh elemen kayu interior berasal dari perkebunan legal lestari dengan perlakuan natural beeswax tanpa racun VOC.'
      },
      {
        title: 'Dinding Plester Kapur Alami (Lime Plaster)',
        desc: 'Material dinding bernafas yang secara alami menyerap kelembapan udara tropis dan mencegah jamur tanpa pewarna buatan.'
      },
      {
        title: 'Batu Teraso Hitam Custom Cast',
        desc: 'Dipadukan dengan kerikil sungai hitam dari Gunung Merapi untuk bak mandi dan lantai area basah anti-slip.'
      },
      {
        title: 'Insulasi Akustik Dinding Ganda',
        desc: 'Dinding pembatas ruang tidur dilapisi peredam wool mineral untuk ketenangan tidur setara hotel bintang lima.'
      }
    ]
  },
  komorebi: {
    id: 'komorebi',
    title: 'Komorebi Courtyard',
    vibe: 'Modern Courtyard',
    price: 5200000000,
    monthlyEst: 28500000,
    area: '280 m²',
    specs: '3 BR + Creative Studio',
    location: 'Bintaro Sektor 9, Tangerang Selatan',
    architect: 'Kalandra Studio',
    light: 'Barat Daya (Disaring kisi-kisi kayu vertikal)',
    materials: 'Batu bata terakota terkurasi, kisi kayu ulin, kaca bening',
    maintenance: 'Rendah (Material lokal berdaya tahan tinggi)',
    bestFor: 'family',
    blueprint: {
      orientation: 'Barat Daya (Filter Kisi-Kisi Terakota)',
      wind: 'Ventilasi Cerobong Udara Vertikal (Stack Effect)',
      ceiling: '3.4 - 4.2 Meter',
      daylight: '91% Tersebar Rata',
      level1: [
        { name: 'Central Terracotta Courtyard', dims: '5.0m x 4.0m', type: 'garden' },
        { name: 'Family Lounge & Open Dining', dims: '7.8m x 5.2m', type: 'public' },
        { name: 'Kids Playroom / Creative Studio', dims: '4.5m x 3.8m', type: 'public' },
        { name: 'Clean Modern Pantry', dims: '4.0m x 3.2m', type: 'public' },
        { name: 'Carport & Bicycle Shed', dims: '5.5m x 5.2m', type: 'public' }
      ],
      level2: [
        { name: 'Master Suite & Walk-in Wardrobe', dims: '6.5m x 4.8m', type: 'private' },
        { name: 'Ensuite Bathroom with Courtyard View', dims: '3.8m x 3.0m', type: 'private' },
        { name: 'Children Bedrooms (2 Kamar)', dims: '4.2m x 3.8m', type: 'private' },
        { name: 'Study Corner & Shaded Balcony', dims: '4.0m x 2.8m', type: 'public' }
      ]
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 01 • Pola Bayangan Komorebi di Sore Hari',
        desc: 'Kisi-kisi kayu vertikal menyaring sinar matahari sore menjadi bayangan artistik dinamis yang bergerak seiring waktu.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 02 • Courtyard Tengah Ramah Anak',
        desc: 'Halaman berumput bebas kendaraan di dalam rumah tempat anak-anak dapat bermain aman di bawah pengawasan langsung dari dapur.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 03 • Studio Kreatif & Ruang Baca',
        desc: 'Ruang kerja serbaguna dengan rak buku built-in setinggi dinding dan sirkulasi udara bebas debu perkotaan.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 04 • Ruang Makan Terhubung Taman',
        desc: 'Pintu lipat kaca tanpa bingkai yang dapat dibuka selebar 5 meter untuk menyatukan area indoor dan outdoor.'
      }
    ],
    materialsSpecs: [
      {
        title: 'Bata Terakota Lokal Presisi Tinggi',
        desc: 'Bata merah terkurasi dengan pori alami yang membuang panas lebih cepat dibandingkan dinding plester konvensional.'
      },
      {
        title: 'Lantai Semen Poles Terazzo Kustom',
        desc: 'Permukaan dingin yang ramah untuk anak-anak bertelanjang kaki di rumah, sangat mudah dibersihkan dan awet puluhan tahun.'
      },
      {
        title: 'Kisi-Kisi Kayu Kamper Samarinda',
        desc: 'Finishing natural oil berpigmen anti-UV untuk melindungi interior rumah dari panas langsung tanpa menghalangi sirkulasi angin.'
      },
      {
        title: 'Ventilasi Cerobong Stack Effect',
        desc: 'Desain lubang udara di puncak atap menarik udara panas ke atas dan menggantikannya dengan udara segar dari halaman bawah.'
      }
    ]
  },
  aether: {
    id: 'aether',
    title: 'The Aether Glass Villa',
    vibe: 'Highland Villa',
    price: 14500000000,
    monthlyEst: 79400000,
    area: '580 m²',
    specs: '5 BR + Infinity Pool',
    location: 'Sentul Highlands, Bogor',
    architect: 'Linier Atelier',
    light: '360° Panorama Bukit & Langit Terbuka',
    materials: 'Baja struktural I-beam hitam, cantilever glass, marmer travertine',
    maintenance: 'Tinggi (Perawatan kolam dan facade kaca luas)',
    bestFor: 'view',
    blueprint: {
      orientation: 'Menghadap Lembah Perbukitan (Panorama 360°)',
      wind: 'Angin Pegunungan Alami (Suhu 21°C - 26°C)',
      ceiling: '4.2 - 7.0 Meter (Kubah Langit)',
      daylight: '98% Teriluminasi Penuh',
      level1: [
        { name: 'Cantilever Infinity Pool & Deck', dims: '14.0m x 4.5m', type: 'garden' },
        { name: 'Grand Sky Living & Entertaining Lounge', dims: '12.0m x 8.0m', type: 'public' },
        { name: 'Chef Kitchen & Wine Cellar', dims: '6.5m x 4.8m', type: 'public' },
        { name: 'Executive Guest Suite 1', dims: '5.8m x 4.8m', type: 'private' },
        { name: 'Covered Glass Garage (4 Supercars)', dims: '10.0m x 6.5m', type: 'public' }
      ],
      level2: [
        { name: 'Presidential Master Suite with Jacuzzi', dims: '9.5m x 6.8m', type: 'private' },
        { name: 'Ensuite Marble Bathroom & Steam Room', dims: '5.2m x 4.2m', type: 'private' },
        { name: 'Family Cinema & Games Room', dims: '7.0m x 5.5m', type: 'public' },
        { name: 'Bedrooms 2, 3, & 4 All Ensuite', dims: '5.5m x 4.8m', type: 'private' },
        { name: 'Observation Telescope Sky Platform', dims: '6.0m x 4.5m', type: 'garden' }
      ]
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 01 • Cantilever Infinity Pool & Panorama',
        desc: 'Kolam renang air hangat melayang di atas tebing dengan pemandangan lembah hijau dan matahari terbit di atas awan.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 02 • Grand Sky Living Room',
        desc: 'Dinding kaca struktural selebar 12 meter tanpa tiang tengah memberi sensasi tinggal melayang di tengah langit.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 03 • Presidential Master Suite',
        desc: 'Kamar tidur utama dengan perapian bioetanol modern, lantai marmer travertine berpemanas, dan balkon kaca gantung.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sudut 04 • Outdoor Sunset Firepit Lounge',
        desc: 'Area duduk melingkar di dek bawah bintang untuk menikmati udara dingin pegunungan di malam hari.'
      }
    ],
    materialsSpecs: [
      {
        title: 'Baja Struktural I-Beam Standar Heavy Industry',
        desc: 'Rangka struktural berani dengan coating anti-korosi matte hitam yang memungkinkan bentang kantilever 6 meter tanpa pilar.'
      },
      {
        title: 'Marmer Travertine Roman Asli',
        desc: 'Diimpor langsung dari Italia, berpori alami indah yang tetap sejuk di siang hari dan hangat saat suhu pegunungan turun di malam hari.'
      },
      {
        title: 'Kaca Akustik Smart-Tinted Low-E 24mm',
        desc: 'Kaca tiga lapis (triple-pane) tahan terpaan angin badai pegunungan dengan filter UV 99.5% dan perlindungan termal superior.'
      },
      {
        title: 'Sistem Energi Surya Hybrid 10 kWp',
        desc: 'Panel surya monokristalin terintegrasi atap dengan baterai lithium cadangan untuk kemandirian energi ramah lingkungan.'
      }
    ]
  }
};

// State Global Aplikasi
let currentPrice = 8800000000;
let currentDpPercent = 20;
let currentTenorYears = 20;
let currentRate = 5.5;
let currentVibe = 'Tropical Brutalist';
let currentTargetUnitName = 'The Skylight Pavilion';
let currentArchUnitKey = 'skylight';
let currentBlueprintLevel = 1;

// Helper Format Rupiah
function formatRupiah(num) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(num);
}

// Kalkulasi Matematis KPR Anuitas
function updateKprCalculations() {
  const dpNominal = (currentPrice * currentDpPercent) / 100;
  const loanAmount = currentPrice - dpNominal;
  const totalMonths = currentTenorYears * 12;
  const monthlyRate = (currentRate / 100) / 12;

  const monthlyInstallment = Math.round(loanAmount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -totalMonths))));
  const minIncome = Math.round(monthlyInstallment * 2.8);

  const priceEl = document.getElementById('priceDisplay');
  const dpPercentEl = document.getElementById('dpPercentDisplay');
  const dpNominalEl = document.getElementById('dpNominalDisplay');
  const tenorEl = document.getElementById('tenorDisplay');
  const rateEl = document.getElementById('rateDisplay');
  const monthlyEl = document.getElementById('monthlyInstallmentDisplay');
  const loanEl = document.getElementById('loanAmountDisplay');
  const incomeEl = document.getElementById('incomeDisplay');
  const vibeEl = document.getElementById('selectedVibeDisplay');

  if (priceEl) priceEl.innerText = formatRupiah(currentPrice);
  if (dpPercentEl) dpPercentEl.innerText = currentDpPercent + '%';
  if (dpNominalEl) dpNominalEl.innerText = '(' + formatRupiah(dpNominal) + ')';
  if (tenorEl) tenorEl.innerText = currentTenorYears + ' Tahun';
  if (rateEl) rateEl.innerText = currentRate.toFixed(1) + '%';
  
  if (monthlyEl) monthlyEl.innerText = formatRupiah(monthlyInstallment);
  if (loanEl) loanEl.innerText = formatRupiah(loanAmount);
  if (incomeEl) incomeEl.innerText = 'Min. ' + formatRupiah(minIncome) + ' / bln';
  if (vibeEl) vibeEl.innerText = currentVibe;
}

// Event Listeners Sliders KPR
function initKprListeners() {
  const priceInput = document.getElementById('priceRange');
  const dpInput = document.getElementById('dpRange');
  const tenorInput = document.getElementById('tenorRange');
  const rateInput = document.getElementById('rateRange');

  if (priceInput) {
    priceInput.addEventListener('input', (e) => {
      currentPrice = parseInt(e.target.value);
      updateKprCalculations();
    });
  }
  if (dpInput) {
    dpInput.addEventListener('input', (e) => {
      currentDpPercent = parseInt(e.target.value);
      updateKprCalculations();
    });
  }
  if (tenorInput) {
    tenorInput.addEventListener('input', (e) => {
      currentTenorYears = parseInt(e.target.value);
      updateKprCalculations();
    });
  }
  if (rateInput) {
    rateInput.addEventListener('input', (e) => {
      currentRate = parseFloat(e.target.value);
      updateKprCalculations();
    });
  }
}

function selectVibe(vibeName) {
  currentVibe = vibeName;
  document.querySelectorAll('.vibe-btn').forEach(btn => {
    btn.classList.remove('active', 'border-accent-brass', 'bg-amber-500/10', 'text-amber-200');
    btn.classList.add('border-white/10', 'bg-surface', 'text-muted');
  });
  if (event && event.target) {
    event.target.classList.add('active', 'border-accent-brass', 'bg-amber-500/10', 'text-amber-200');
    event.target.classList.remove('border-white/10', 'bg-surface', 'text-muted');
  }
  updateKprCalculations();
  showToast('Vibe suasana hunian: ' + vibeName);
}

function calculateKprFor(price, unitTitle) {
  currentPrice = price;
  currentTargetUnitName = unitTitle;
  const priceInput = document.getElementById('priceRange');
  if (priceInput) priceInput.value = price;
  updateKprCalculations();
  
  const calcSection = document.getElementById('kalkulator');
  if (calcSection) calcSection.scrollIntoView({ behavior: 'smooth' });
  showToast('Kalkulator disinkronkan untuk ' + unitTitle);
}

function sendKprToWhatsapp() {
  const dpNominal = (currentPrice * currentDpPercent) / 100;
  const loanAmount = currentPrice - dpNominal;
  const totalMonths = currentTenorYears * 12;
  const monthlyRate = (currentRate / 100) / 12;
  const monthlyInstallment = Math.round(loanAmount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -totalMonths))));

  const message = `Halo SORA Property, saya ingin berkonsultasi mengenai rencana kepemilikan hunian:%0A%0A` +
    `• Target Unit: ${currentTargetUnitName}%0A` +
    `• Harga Properti: ${formatRupiah(currentPrice)}%0A` +
    `• Uang Muka (DP ${currentDpPercent}%): ${formatRupiah(dpNominal)}%0A` +
    `• Tenor: ${currentTenorYears} Tahun%0A` +
    `• Estimasi Cicilan: ${formatRupiah(monthlyInstallment)}/bulan%0A` +
    `• Vibe Suasana: ${currentVibe}%0A%0A` +
    `Mohon informasi ketersediaan unit dan jadwal sesi private tour. Terima kasih.`;

  window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
}

// ========================================================
// MODAL: ARCHITECTURAL SPOTLIGHT & FLOOR PLAN BLUEPRINT
// ========================================================
function openArchitecturalModal(unitKey) {
  currentArchUnitKey = unitKey;
  const unit = SORA_CATALOG[unitKey];
  if (!unit) return;

  const titleEl = document.getElementById('archModalTitle');
  const vibeEl = document.getElementById('archModalVibeBadge');
  const subEl = document.getElementById('archModalSubtitle');

  if (titleEl) titleEl.innerText = unit.title;
  if (vibeEl) vibeEl.innerText = unit.vibe;
  if (subEl) subEl.innerText = `${unit.location} • Arsitek: ${unit.architect} • ${formatRupiah(unit.price)}`;

  switchArchTab('gallery');
  renderArchGalleryThumbnails(unit);
  setArchFeaturedPhoto(0);

  renderBlueprintLayout(unit, 1);
  renderArchMaterials(unit);

  const modal = document.getElementById('architecturalModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeArchitecturalModal() {
  const modal = document.getElementById('architecturalModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function switchArchTab(tab) {
  const btnGallery = document.getElementById('archTabGalleryBtn');
  const btnBp = document.getElementById('archTabBlueprintBtn');
  const btnMat = document.getElementById('archTabMaterialsBtn');

  const contentGallery = document.getElementById('archTabGalleryContent');
  const contentBp = document.getElementById('archTabBlueprintContent');
  const contentMat = document.getElementById('archTabMaterialsContent');

  if (btnGallery) {
    btnGallery.className = "flex-1 py-3 font-semibold text-center border-b-2 " + 
      (tab === 'gallery' ? 'text-amber-200 border-amber-400 bg-amber-400/5' : 'text-muted hover:text-sand border-transparent');
  }
  if (btnBp) {
    btnBp.className = "flex-1 py-3 font-semibold text-center border-b-2 " + 
      (tab === 'blueprint' ? 'text-amber-200 border-amber-400 bg-amber-400/5' : 'text-muted hover:text-sand border-transparent');
  }
  if (btnMat) {
    btnMat.className = "flex-1 py-3 font-semibold text-center border-b-2 " + 
      (tab === 'materials' ? 'text-amber-200 border-amber-400 bg-amber-400/5' : 'text-muted hover:text-sand border-transparent');
  }

  if (contentGallery) contentGallery.classList.toggle('hidden', tab !== 'gallery');
  if (contentBp) contentBp.classList.toggle('hidden', tab !== 'blueprint');
  if (contentMat) contentMat.classList.toggle('hidden', tab !== 'materials');
}

function renderArchGalleryThumbnails(unit) {
  const row = document.getElementById('archThumbnailsRow');
  if (!row) return;
  row.innerHTML = '';

  unit.gallery.forEach((item, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `p-1.5 rounded-xl border ${index === 0 ? 'border-amber-400 bg-amber-400/10' : 'border-white/10 bg-surface'} text-left hover:border-amber-300 transition-all group flex items-center gap-2.5`;
    btn.onclick = () => {
      document.querySelectorAll('#archThumbnailsRow button').forEach(b => {
        b.classList.remove('border-amber-400', 'bg-amber-400/10');
        b.classList.add('border-white/10', 'bg-surface');
      });
      btn.classList.add('border-amber-400', 'bg-amber-400/10');
      btn.classList.remove('border-white/10', 'bg-surface');
      setArchFeaturedPhoto(index);
    };

    btn.innerHTML = `
      <img src="${item.url}" class="w-12 h-12 object-cover rounded-lg flex-shrink-0">
      <div class="overflow-hidden">
        <span class="text-[10px] font-numeral text-amber-200 block font-semibold truncate">Sudut 0${index + 1}</span>
        <p class="text-[11px] text-muted truncate group-hover:text-sand transition-colors">${item.tag.split('•')[1] || item.tag}</p>
      </div>
    `;
    row.appendChild(btn);
  });
}

function setArchFeaturedPhoto(index) {
  const unit = SORA_CATALOG[currentArchUnitKey];
  if (!unit || !unit.gallery[index]) return;

  const photo = unit.gallery[index];
  const img = document.getElementById('archFeaturedImg');
  const tagEl = document.getElementById('archPhotoTag');
  const descEl = document.getElementById('archPhotoDesc');

  if (img) {
    img.style.opacity = '0.3';
    setTimeout(() => {
      img.src = photo.url;
      img.style.opacity = '1';
    }, 120);
  }

  if (tagEl) tagEl.innerText = photo.tag;
  if (descEl) descEl.innerText = photo.desc;
}

function switchBlueprintLevel(level) {
  currentBlueprintLevel = level;
  const btn1 = document.getElementById('btnLevel1');
  const btn2 = document.getElementById('btnLevel2');

  if (level === 1) {
    if (btn1) btn1.className = "px-3 py-1 rounded-lg bg-amber-400 text-obsidian font-bold transition-all";
    if (btn2) btn2.className = "px-3 py-1 rounded-lg text-muted hover:text-sand font-semibold transition-all";
  } else {
    if (btn2) btn2.className = "px-3 py-1 rounded-lg bg-amber-400 text-obsidian font-bold transition-all";
    if (btn1) btn1.className = "px-3 py-1 rounded-lg text-muted hover:text-sand font-semibold transition-all";
  }

  const unit = SORA_CATALOG[currentArchUnitKey];
  if (unit) renderBlueprintLayout(unit, level);
}

function renderBlueprintLayout(unit, level) {
  const bpOrient = document.getElementById('bpOrientation');
  const bpWind = document.getElementById('bpWind');
  const bpCeiling = document.getElementById('bpCeiling');
  const bpDaylight = document.getElementById('bpDaylight');
  const container = document.getElementById('blueprintLayoutContainer');

  if (bpOrient) bpOrient.innerText = `Orientasi: ${unit.blueprint.orientation}`;
  if (bpWind) bpWind.innerText = `Sirkulasi: ${unit.blueprint.wind}`;
  if (bpCeiling) bpCeiling.innerText = unit.blueprint.ceiling;
  if (bpDaylight) bpDaylight.innerText = unit.blueprint.daylight;

  if (!container) return;
  container.innerHTML = '';

  const rooms = level === 1 ? unit.blueprint.level1 : unit.blueprint.level2;

  rooms.forEach((room) => {
    const div = document.createElement('div');
    let bgStyle = 'bg-surface/90 border-white/10';
    let badgeColor = 'text-amber-200 bg-amber-400/10 border-amber-400/20';

    if (room.type === 'garden') {
      bgStyle = 'bg-emerald-950/20 border-emerald-500/30';
      badgeColor = 'text-emerald-300 bg-emerald-500/20 border-emerald-500/30';
    } else if (room.type === 'private') {
      bgStyle = 'bg-blue-950/20 border-blue-500/30';
      badgeColor = 'text-blue-300 bg-blue-500/20 border-blue-500/30';
    }

    div.className = `p-4 rounded-xl border ${bgStyle} flex flex-col justify-between hover:border-amber-400 transition-colors`;
    div.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${badgeColor}">${room.type}</span>
          <span class="text-[10px] text-muted font-numeral">${room.dims}</span>
        </div>
        <h5 class="text-xs font-bold text-sand">${room.name}</h5>
      </div>
      <p class="text-[10px] text-muted mt-2 font-mono flex items-center gap-1">
        <span>✦ Sirkulasi Cahaya Optimal</span>
      </p>
    `;
    container.appendChild(div);
  });
}

function renderArchMaterials(unit) {
  const grid = document.getElementById('archMaterialsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  unit.materialsSpecs.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = "p-4 rounded-2xl glass-panel border border-white/10 space-y-1.5";
    card.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="text-amber-400 text-xs font-numeral font-bold">0${idx + 1}</span>
        <h5 class="text-xs font-bold text-sand">${item.title}</h5>
      </div>
      <p class="text-xs text-muted leading-relaxed">${item.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function compareCurrentModalInSorai() {
  closeArchitecturalModal();
  const selectA = document.getElementById('compareUnitA');
  if (selectA) selectA.value = currentArchUnitKey;
  openSoraiModal('compare');
  runSoraiComparison();
}

function sendPrivateTourForCurrentModal() {
  const unit = SORA_CATALOG[currentArchUnitKey];
  if (!unit) return;

  const msg = `Halo SORA Property, saya telah mempelajari denah lantai dan galeri arsitektur untuk *${unit.title}* (${unit.location} • ${formatRupiah(unit.price)}). Saya ingin menjadwalkan private walkthrough tour bersama konsultan kurator SORA.`;
  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, '_blank');
}

// ========================================================
// MODAL: SORAI (AI ARCHITECTURAL CONCIERGE) ENGINE
// ========================================================
function openSoraiModal(mode) {
  const modal = document.getElementById('soraiModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (mode === 'compare') {
    switchSoraiTab('compare');
  } else {
    switchSoraiTab('match');
  }
}

function closeSoraiModal() {
  const modal = document.getElementById('soraiModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function switchSoraiTab(tab) {
  const tabMatchBtn = document.getElementById('tabMatchBtn');
  const tabCompareBtn = document.getElementById('tabCompareBtn');
  const tabAskBtn = document.getElementById('tabAskBtn');

  if (tabMatchBtn) {
    tabMatchBtn.className = "flex-1 py-3 font-semibold text-center border-b-2 " + 
      (tab === 'match' ? 'text-amber-200 border-amber-400 bg-amber-400/5' : 'text-muted hover:text-sand border-transparent');
  }
  if (tabCompareBtn) {
    tabCompareBtn.className = "flex-1 py-3 font-semibold text-center border-b-2 " + 
      (tab === 'compare' ? 'text-amber-200 border-amber-400 bg-amber-400/5' : 'text-muted hover:text-sand border-transparent');
  }
  if (tabAskBtn) {
    tabAskBtn.className = "flex-1 py-3 font-semibold text-center border-b-2 " + 
      (tab === 'ask' ? 'text-amber-200 border-amber-400 bg-amber-400/5' : 'text-muted hover:text-sand border-transparent');
  }

  const matchContent = document.getElementById('tabMatchContent');
  const compareContent = document.getElementById('tabCompareContent');
  const askContent = document.getElementById('tabAskContent');

  if (matchContent) matchContent.classList.toggle('hidden', tab !== 'match');
  if (compareContent) compareContent.classList.toggle('hidden', tab !== 'compare');
  if (askContent) askContent.classList.toggle('hidden', tab !== 'ask');
}

function compareWithUnit(unitKey) {
  const selectA = document.getElementById('compareUnitA');
  if (selectA) selectA.value = unitKey;
  openSoraiModal('compare');
  runSoraiComparison();
}

function runSoraiMatching() {
  const budgetSelect = document.getElementById('soraiBudgetSelect');
  const prioritySelect = document.getElementById('soraiPrioritySelect');
  if (!budgetSelect || !prioritySelect) return;

  const budget = parseInt(budgetSelect.value);
  const priority = prioritySelect.value;

  let matched = SORA_CATALOG.skylight;

  if (budget <= 6000000000) {
    matched = SORA_CATALOG.komorebi;
  } else if (budget > 10000000000 || priority === 'view') {
    matched = SORA_CATALOG.aether;
  } else if (priority === 'zen') {
    matched = SORA_CATALOG.mori;
  } else {
    matched = SORA_CATALOG.skylight;
  }

  const matchBox = document.getElementById('soraiMatchResult');
  const matchTitle = document.getElementById('soraiMatchTitle');
  const matchPrice = document.getElementById('soraiMatchPrice');
  const matchScore = document.getElementById('soraiMatchScore');
  const matchDesc = document.getElementById('soraiMatchDesc');

  if (matchTitle) matchTitle.innerText = matched.title;
  if (matchPrice) matchPrice.innerText = formatRupiah(matched.price);
  if (matchScore) matchScore.innerText = '98% Match Score';
  
  if (matchDesc) {
    matchDesc.innerText = `Berdasarkan alokasi anggaran dan fokus ruangmu, ${matched.title} memberikan rasio pencahayaan langit dan efisiensi ruang tertinggi (${matched.area}, ${matched.specs}). Tata letak arsitekturnya mengedepankan sirkulasi alami ${matched.light}.`;
  }

  if (matchBox) matchBox.classList.remove('hidden');
  showToast('SORAI menemukan hunian yang paling cocok!');
}

function exportSoraiResultToWa() {
  const title = document.getElementById('soraiMatchTitle')?.innerText || 'SORA Unit';
  const price = document.getElementById('soraiMatchPrice')?.innerText || '';
  const msg = `Halo SORA Property, asisten SORAI merekomendasikan unit *${title}* (${price}) sesuai dengan profil kebutuhan ruang saya. Saya ingin menindaklanjuti untuk sesi diskusi privat.`;
  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, '_blank');
}

function askSoraiFromMatcher() {
  openSoraiModal('match');
  const budgetSelect = document.getElementById('soraiBudgetSelect');
  if (budgetSelect) {
    if (currentPrice <= 6000000000) {
      budgetSelect.value = "6000000000";
    } else if (currentPrice <= 10000000000) {
      budgetSelect.value = "9000000000";
    } else {
      budgetSelect.value = "15000000000";
    }
  }
  runSoraiMatching();
}

function runSoraiComparison() {
  const selectA = document.getElementById('compareUnitA');
  const selectB = document.getElementById('compareUnitB');
  if (!selectA || !selectB) return;

  const keyA = selectA.value;
  const keyB = selectB.value;

  const unitA = SORA_CATALOG[keyA];
  const unitB = SORA_CATALOG[keyB];

  document.getElementById('colTitleA').innerText = unitA.title;
  document.getElementById('colTitleB').innerText = unitB.title;

  document.getElementById('compPriceA').innerText = `${formatRupiah(unitA.price)} (~${formatRupiah(unitA.monthlyEst)}/bln)`;
  document.getElementById('compPriceB').innerText = `${formatRupiah(unitB.price)} (~${formatRupiah(unitB.monthlyEst)}/bln)`;

  document.getElementById('compLightA').innerText = unitA.light;
  document.getElementById('compLightB').innerText = unitB.light;

  document.getElementById('compMatA').innerText = unitA.materials;
  document.getElementById('compMatB').innerText = unitB.materials;

  document.getElementById('compMaintA').innerText = unitA.maintenance;
  document.getElementById('compMaintB').innerText = unitB.maintenance;

  let verdict = '';
  if (unitA.price > unitB.price) {
    verdict = `<strong>${unitA.title}</strong> menawarkan skala spasial yang lebih masif (${unitA.area}) dan kemewahan material premium. Namun jika kamu mencari efisiensi budget dan kenyamanan perawatan jangka panjang, <strong>${unitB.title}</strong> memiliki efisiensi nilai investasi yang sangat seimbang.`;
  } else if (unitA.price < unitB.price) {
    verdict = `<strong>${unitB.title}</strong> memiliki spesifikasi lebih tinggi dan ruang lebih lapang. Sebaliknya, <strong>${unitA.title}</strong> adalah pilihan cerdas untuk hunian fungsional berkarakter arsitektural kuat dengan komitmen finansial yang lebih terjangkau.`;
  } else {
    verdict = `Kedua hunian berada pada level investasi yang setara. Pilihan terbaik bergantung pada orientasi gaya hidupmu: ${unitA.vibe} vs ${unitB.vibe}.`;
  }

  document.getElementById('compVerdict').innerHTML = verdict;
  showToast('Analisis komparasi selesai diperbarui.');
}

function askPresetQuestion(index) {
  const answerBox = document.getElementById('askAnswerText');
  if (!answerBox) return;

  if (index === 1) {
    answerBox.innerText = "Semua unit SORA dengan bukaan kaca lebar (seperti The Skylight Pavilion & Aether Villa) menggunakan kaca jenis Low-E (Low Emissivity) dengan insulasi ganda (double-glazed) serta sistem ventilasi silang aktif. Cahaya alami masuk 100%, tetapi radiasi panas tereduksi hingga 68%, sehingga ruangan tetap sejuk dan hemat daya AC.";
  } else if (index === 2) {
    answerBox.innerText = "Seluruh properti dalam portofolio SORA diwajibkan lolos verifikasi legalitas 100%: Sertifikat Hak Milik (SHM) murni perorangan (bukan HGB bermasalah), PBG/IMB aktif, dan bebas sengketa waris atau jaminan bank. Pengecekan dilakukan oleh kantor notaris rekanan independen kami.";
  } else if (index === 3) {
    answerBox.innerText = "Untuk keluarga dengan balita, Komorebi Courtyard dan Mori Zen Sanctuary adalah rekomendasi tertinggi. Keduanya memiliki tata ruang satu level utama yang minim tangga curam, tepian dinding membulat (soft-corner plaster), serta inner courtyard bebas kendaraan untuk area bermain anak yang aman dan terpantau.";
  }
}

function handleCustomAsk() {
  const inputEl = document.getElementById('customAskInput');
  if (!inputEl) return;
  const input = inputEl.value.trim();
  if (!input) return;

  const answerBox = document.getElementById('askAnswerText');
  if (answerBox) {
    answerBox.innerHTML = `Menganalisis pertanyaan: <em>"${input}"</em>...<br><br>Dari tinjauan arsitektur SORA, pertimbangan utama hunian ini bertumpu pada keselarasan orientasi angin lokal, materialitas jujur yang minim biaya perawatan jangka panjang, serta privasi akustik dari kebisingan jalanan luar. Kamu dapat mendiskusikan penyesuaian tata ruang ini langsung dengan arsitek kurator kami.`;
  }
  inputEl.value = '';
  showToast('SORAI telah menganalisis pertanyaanmu.');
}

// ========================================================
// MODAL: TRAILER VIDEO SORA (REMOTION-BASED CINEMATIC PREVIEW)
// ========================================================
function openTrailerModal() {
  const modal = document.getElementById('trailerModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    startTrailerPlayback();
  }
}

function closeTrailerModal() {
  const modal = document.getElementById('trailerModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
  stopTrailerPlayback();
}

let trailerInterval = null;
let trailerCurrentScene = 0;

const TRAILER_SCENES = [
  {
    title: 'SPATIAL OPENNESS',
    subtitle: 'Where Architecture Meets the Sky',
    desc: 'Bukaan langit vertikal dan siling 6.5 meter menghadirkan nafas ketenangan di tengah kota.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    duration: 3500
  },
  {
    title: 'THE SKYLIGHT PAVILION',
    subtitle: 'Tropical Brutalist Masterpiece',
    desc: 'Andramatin Partner • Inner Courtyard dengan kolam refleksi air alami.',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    duration: 3500
  },
  {
    title: 'MORI ZEN SANCTUARY',
    subtitle: 'Japandi Quiet Living • Cipete',
    desc: 'Kayu jati solid bersertifikat dan taman bebatuan Karesansui.',
    img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    duration: 3500
  },
  {
    title: 'GUIDED BY SORAI',
    subtitle: 'AI Architectural Intelligence',
    desc: 'Mencocokkan gaya hidup, orientasi cahaya, dan kalkulasi cicilan transparan.',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
    duration: 3500
  }
];

function startTrailerPlayback() {
  trailerCurrentScene = 0;
  renderTrailerScene();

  if (trailerInterval) clearInterval(trailerInterval);
  trailerInterval = setInterval(() => {
    trailerCurrentScene = (trailerCurrentScene + 1) % TRAILER_SCENES.length;
    renderTrailerScene();
  }, 3600);
}

function stopTrailerPlayback() {
  if (trailerInterval) clearInterval(trailerInterval);
}

function renderTrailerScene() {
  const scene = TRAILER_SCENES[trailerCurrentScene];
  const imgEl = document.getElementById('trailerBgImg');
  const titleEl = document.getElementById('trailerSceneTitle');
  const subEl = document.getElementById('trailerSceneSubtitle');
  const descEl = document.getElementById('trailerSceneDesc');
  const progressEl = document.getElementById('trailerTimelineProgress');

  if (imgEl) {
    imgEl.style.opacity = '0.3';
    setTimeout(() => {
      imgEl.src = scene.img;
      imgEl.style.opacity = '0.85';
    }, 150);
  }

  if (titleEl) titleEl.innerText = scene.title;
  if (subEl) subEl.innerText = scene.subtitle;
  if (descEl) descEl.innerText = scene.desc;

  if (progressEl) {
    progressEl.style.width = '0%';
    setTimeout(() => {
      progressEl.style.transition = 'width 3.4s linear';
      progressEl.style.width = '100%';
    }, 50);
  }
}

// ========================================================
// CORE UTILITIES & OBSERVERS
// ========================================================
function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.innerText = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2600);
}

// Ambient Cursor Glow Spotlight Follower
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    glow.style.left = currentX + 'px';
    glow.style.top = currentY + 'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}

// Contemporary Luxury Preloader / Loading Screen Engine
function initLuxuryLoader() {
  const screen = document.getElementById('loadingScreen');
  const counter = document.getElementById('loadCounter');
  const progressBar = document.getElementById('loadProgressBar');
  const statusMsg = document.getElementById('loaderStatusMsg');
  const subtext = document.getElementById('loaderSubtext');

  if (!screen || !counter || !progressBar) return;

  let count = 0;
  const targetTime = 1500;
  const intervalTime = 20;
  const step = 100 / (targetTime / intervalTime);

  const interval = setInterval(() => {
    count += step;
    if (count >= 100) {
      count = 100;
      clearInterval(interval);

      counter.innerText = '100%';
      progressBar.style.width = '100%';
      if (statusMsg) statusMsg.innerText = 'WELCOME TO SORA ATELIER';
      if (subtext) subtext.innerText = 'Where Architecture Meets the Sky';

      setTimeout(() => {
        screen.classList.add('loaded');
        initScrollReveal();
      }, 250);
    } else {
      const currentVal = Math.floor(count);
      counter.innerText = (currentVal < 10 ? '0' : '') + currentVal + '%';
      progressBar.style.width = currentVal + '%';

      if (currentVal > 25 && currentVal < 60 && statusMsg) {
        statusMsg.innerText = 'FILTERING BIOPHILIC DAYLIGHT PARAMETERS...';
      } else if (currentVal >= 60 && currentVal < 90 && statusMsg) {
        statusMsg.innerText = 'CALIBRATING SORAI INTELLIGENCE ENGINE...';
      }
    }
  }, intervalTime);
}

// Scroll Reveal Observer
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// Mobile Navigation Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileNavDropdown');
  const btn = document.getElementById('mobileMenuBtn');
  const iconBars = document.getElementById('menuIconBars');
  const iconClose = document.getElementById('menuIconClose');
  if (!menu) return;

  const isHidden = menu.classList.contains('hidden');
  if (isHidden) {
    menu.classList.remove('hidden');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    if (iconBars) iconBars.classList.add('hidden');
    if (iconClose) iconClose.classList.remove('hidden');
  } else {
    closeMobileMenu();
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileNavDropdown');
  const btn = document.getElementById('mobileMenuBtn');
  const iconBars = document.getElementById('menuIconBars');
  const iconClose = document.getElementById('menuIconClose');
  if (!menu) return;

  menu.classList.add('hidden');
  if (btn) btn.setAttribute('aria-expanded', 'false');
  if (iconBars) iconBars.classList.remove('hidden');
  if (iconClose) iconClose.classList.add('hidden');
}

// Global Keyboard Accessibility (Escape dismisses modals & mobile menu)
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeArchitecturalModal();
    closeSoraiModal();
    closeTrailerModal();
    closeMobileMenu();
  }
});

// Inisialisasi awal saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  initCursorGlow();
  initLuxuryLoader();
  initKprListeners();
  updateKprCalculations();
});

// Fallback jika dipanggil langsung
initCursorGlow();
initScrollReveal();
updateKprCalculations();
