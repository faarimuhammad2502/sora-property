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
  stopArch3DAnimation();
}

function switchArchTab(tab) {
  const btnGallery = document.getElementById('archTabGalleryBtn');
  const btnBp = document.getElementById('archTabBlueprintBtn');
  const btnMat = document.getElementById('archTabMaterialsBtn');
  const btn3D = document.getElementById('archTab3DBtn');

  const contentGallery = document.getElementById('archTabGalleryContent');
  const contentBp = document.getElementById('archTabBlueprintContent');
  const contentMat = document.getElementById('archTabMaterialsContent');
  const content3D = document.getElementById('archTab3DContent');

  if (btnGallery) {
    btnGallery.className = "flex-1 min-w-[120px] py-3 font-semibold text-center border-b-2 transition-colors " + 
      (tab === 'gallery' ? 'text-[#CBB38B] border-[#CBB38B] bg-[#CBB38B]/5' : 'text-[#8E929B] hover:text-[#F5F2EB] border-transparent');
  }
  if (btnBp) {
    btnBp.className = "flex-1 min-w-[120px] py-3 font-semibold text-center border-b-2 transition-colors " + 
      (tab === 'blueprint' ? 'text-[#CBB38B] border-[#CBB38B] bg-[#CBB38B]/5' : 'text-[#8E929B] hover:text-[#F5F2EB] border-transparent');
  }
  if (btnMat) {
    btnMat.className = "flex-1 min-w-[120px] py-3 font-semibold text-center border-b-2 transition-colors " + 
      (tab === 'materials' ? 'text-[#CBB38B] border-[#CBB38B] bg-[#CBB38B]/5' : 'text-[#8E929B] hover:text-[#F5F2EB] border-transparent');
  }
  if (btn3D) {
    btn3D.className = "flex-1 min-w-[140px] py-3 font-semibold text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 " + 
      (tab === '3d' ? 'text-[#CBB38B] border-[#CBB38B] bg-[#CBB38B]/5' : 'text-[#8E929B] hover:text-[#F5F2EB] border-transparent');
  }

  if (contentGallery) contentGallery.classList.toggle('hidden', tab !== 'gallery');
  if (contentBp) contentBp.classList.toggle('hidden', tab !== 'blueprint');
  if (contentMat) contentMat.classList.toggle('hidden', tab !== 'materials');
  if (content3D) content3D.classList.toggle('hidden', tab !== '3d');

  if (tab === '3d') {
    initOrUpdateArch3D();
  } else {
    stopArch3DAnimation();
  }
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

// ========================================================
// 3D ARCHITECTURAL MASSING & SOLAR SIMULATOR (THREE.JS)
// Procedural Volumetric Engine Optimized for High Performance
// ========================================================
let arch3DScene = null;
let arch3DCamera = null;
let arch3DRenderer = null;
let arch3DControls = null;
let arch3DBuildingGroup = null;
let arch3DSunLight = null;
let arch3DSunSphere = null;
let arch3DAmbientLight = null;
let arch3DAnimId = null;
let arch3DInitialized = false;
let arch3DAutoRotate = true;
let arch3DCurrentStyle = 'solid'; // 'solid' | 'wireframe' | 'glass'
let arch3DCurrentHour = 12.0;

function initArch3DScene() {
  if (typeof THREE === 'undefined') {
    console.warn('Three.js belum termuat dari CDN.');
    return;
  }
  const container = document.getElementById('arch3DCanvasContainer');
  if (!container) return;

  const width = container.clientWidth || 600;
  const height = container.clientHeight || 380;

  // 1. Scene
  arch3DScene = new THREE.Scene();
  arch3DScene.background = new THREE.Color(0x07080B);
  arch3DScene.fog = new THREE.FogExp2(0x07080B, 0.022);

  // 2. Camera
  arch3DCamera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  arch3DCamera.position.set(13, 9, 15);

  // 3. Renderer (Optimized for Lenovo IdeaPad Slim 3)
  arch3DRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
  arch3DRenderer.setSize(width, height);
  arch3DRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  arch3DRenderer.shadowMap.enabled = true;
  arch3DRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

  container.innerHTML = '';
  container.appendChild(arch3DRenderer.domElement);

  // 4. OrbitControls
  if (typeof THREE.OrbitControls !== 'undefined') {
    arch3DControls = new THREE.OrbitControls(arch3DCamera, arch3DRenderer.domElement);
    arch3DControls.enableDamping = true;
    arch3DControls.dampingFactor = 0.06;
    arch3DControls.maxPolarAngle = Math.PI / 2 - 0.05; // Prevent camera clipping through ground
    arch3DControls.minDistance = 6;
    arch3DControls.maxDistance = 30;
    arch3DControls.target.set(0, 1.8, 0);
    arch3DControls.autoRotate = arch3DAutoRotate;
    arch3DControls.autoRotateSpeed = 0.8;
  }

  // 5. Architectural Ground Grid
  const gridHelper = new THREE.GridHelper(26, 26, 0xCBB38B, 0x1A1E29);
  gridHelper.position.y = -0.01;
  arch3DScene.add(gridHelper);

  // 6. Ground Shadow Receiver
  const groundGeo = new THREE.PlaneGeometry(40, 40);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x0A0B0E,
    roughness: 0.9,
    metalness: 0.1
  });
  const groundMesh = new THREE.Mesh(groundGeo, groundMat);
  groundMesh.rotation.x = -Math.PI / 2;
  groundMesh.position.y = -0.02;
  groundMesh.receiveShadow = true;
  arch3DScene.add(groundMesh);

  // 7. Lighting
  arch3DAmbientLight = new THREE.AmbientLight(0x404552, 1.2);
  arch3DScene.add(arch3DAmbientLight);

  arch3DSunLight = new THREE.DirectionalLight(0xFFF0D6, 2.2);
  arch3DSunLight.castShadow = true;
  arch3DSunLight.shadow.mapSize.width = 1024;
  arch3DSunLight.shadow.mapSize.height = 1024;
  arch3DSunLight.shadow.camera.near = 0.5;
  arch3DSunLight.shadow.camera.far = 45;
  arch3DSunLight.shadow.camera.left = -12;
  arch3DSunLight.shadow.camera.right = 12;
  arch3DSunLight.shadow.camera.top = 12;
  arch3DSunLight.shadow.camera.bottom = -12;
  arch3DSunLight.shadow.bias = -0.001;
  arch3DScene.add(arch3DSunLight);

  // Sun Orb Visualizer
  const sunSphereGeo = new THREE.SphereGeometry(0.5, 16, 16);
  const sunSphereMat = new THREE.MeshBasicMaterial({ color: 0xFFE396 });
  arch3DSunSphere = new THREE.Mesh(sunSphereGeo, sunSphereMat);
  arch3DScene.add(arch3DSunSphere);

  arch3DBuildingGroup = new THREE.Group();
  arch3DScene.add(arch3DBuildingGroup);

  arch3DInitialized = true;
  window.addEventListener('resize', resizeArch3D);
  updateSunlightPosition(arch3DCurrentHour);
}

function initOrUpdateArch3D() {
  if (!arch3DInitialized) {
    initArch3DScene();
  }
  const unit = SORA_CATALOG[currentArchUnitKey];
  const hudName = document.getElementById('hud3DUnitName');
  if (hudName && unit) {
    hudName.innerText = unit.title.toUpperCase();
  }

  renderArch3DUnit(currentArchUnitKey);
  setTimeout(resizeArch3D, 60);
  startArch3DAnimation();
}

function resizeArch3D() {
  if (!arch3DRenderer || !arch3DCamera) return;
  const container = document.getElementById('arch3DCanvasContainer');
  if (!container || container.clientWidth === 0) return;
  const w = container.clientWidth;
  const h = container.clientHeight || 380;
  arch3DCamera.aspect = w / h;
  arch3DCamera.updateProjectionMatrix();
  arch3DRenderer.setSize(w, h);
}

function startArch3DAnimation() {
  if (arch3DAnimId) cancelAnimationFrame(arch3DAnimId);
  function loop() {
    arch3DAnimId = requestAnimationFrame(loop);
    if (arch3DControls) arch3DControls.update();
    if (arch3DRenderer && arch3DScene && arch3DCamera) {
      arch3DRenderer.render(arch3DScene, arch3DCamera);
    }
  }
  loop();
}

function stopArch3DAnimation() {
  if (arch3DAnimId) {
    cancelAnimationFrame(arch3DAnimId);
    arch3DAnimId = null;
  }
}

function toggleArch3DAutoRotate() {
  arch3DAutoRotate = !arch3DAutoRotate;
  if (arch3DControls) {
    arch3DControls.autoRotate = arch3DAutoRotate;
  }
  const label = document.getElementById('labelAutoRotate');
  if (label) label.innerText = arch3DAutoRotate ? 'ON' : 'OFF';
}

function resetArch3DCamera() {
  if (!arch3DCamera) return;
  arch3DCamera.position.set(13, 9, 15);
  if (arch3DControls) {
    arch3DControls.target.set(0, 1.8, 0);
  }
}

function setArch3DStyle(style) {
  arch3DCurrentStyle = style;
  ['btnStyleSolid', 'btnStyleWireframe', 'btnStyleGlass'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    const isTarget = (id === 'btnStyleSolid' && style === 'solid') ||
                     (id === 'btnStyleWireframe' && style === 'wireframe') ||
                     (id === 'btnStyleGlass' && style === 'glass');
    if (isTarget) {
      btn.className = "py-1.5 px-2 rounded-lg bg-[#CBB38B]/20 text-[#CBB38B] border border-[#CBB38B]/40 font-semibold transition-all";
    } else {
      btn.className = "py-1.5 px-2 rounded-lg bg-[#181B22] text-[#8E929B] border border-white/5 hover:text-[#F5F2EB] font-semibold transition-all";
    }
  });

  renderArch3DUnit(currentArchUnitKey);
}

function handleSunSliderChange(val) {
  arch3DCurrentHour = parseFloat(val);
  const timeStr = formatSunHour(arch3DCurrentHour);
  const sliderText = document.getElementById('sliderTimeVal');
  if (sliderText) sliderText.innerText = `${timeStr} WIB`;
  updateSunlightPosition(arch3DCurrentHour);
}

function formatSunHour(hour) {
  const h = Math.floor(hour);
  const m = Math.round((hour - h) * 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function updateSunlightPosition(hour) {
  if (!arch3DSunLight) return;
  const progress = (hour - 7) / (17.5 - 7); // 0 (morning) -> 1 (evening)
  const angle = progress * Math.PI;
  const radius = 17;

  // Sun path arc across the sky
  const x = Math.cos(angle) * radius;
  const y = Math.max(1.8, Math.sin(angle) * radius * 0.95);
  const z = Math.sin(angle * 0.5) * 6 + 3;

  arch3DSunLight.position.set(x, y, z);
  if (arch3DSunSphere) arch3DSunSphere.position.set(x, y, z);

  const hudTime = document.getElementById('hud3DTime');
  let desc = 'Zenith Puncak';
  if (hour < 9.5) desc = 'Sinar Pagi Timur';
  else if (hour > 15) desc = 'Golden Hour Senja';

  if (hudTime) {
    hudTime.innerText = `${formatSunHour(hour)} WIB (${desc})`;
  }

  // Realistic color temperature
  if (hour < 9.5) {
    arch3DSunLight.color.setHex(0xFFD39B);
    arch3DSunLight.intensity = 1.9;
    if (arch3DSunSphere && arch3DSunSphere.material) arch3DSunSphere.material.color.setHex(0xFFD39B);
  } else if (hour > 15) {
    arch3DSunLight.color.setHex(0xFFA142);
    arch3DSunLight.intensity = 1.8;
    if (arch3DSunSphere && arch3DSunSphere.material) arch3DSunSphere.material.color.setHex(0xFFA142);
  } else {
    arch3DSunLight.color.setHex(0xFFF3E0);
    arch3DSunLight.intensity = 2.4;
    if (arch3DSunSphere && arch3DSunSphere.material) arch3DSunSphere.material.color.setHex(0xFFF3E0);
  }
}

function renderArch3DUnit(unitKey) {
  if (!arch3DBuildingGroup || typeof THREE === 'undefined') return;

  // Clear existing geometries
  while (arch3DBuildingGroup.children.length > 0) {
    const obj = arch3DBuildingGroup.children[0];
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
      else obj.material.dispose();
    }
    arch3DBuildingGroup.remove(obj);
  }

  const isWireframe = arch3DCurrentStyle === 'wireframe';
  const isGlass = arch3DCurrentStyle === 'glass';

  function createArchMaterial(colorHex, roughness = 0.7, metalness = 0.2, isTransparent = false, opacity = 1.0) {
    if (isWireframe) {
      return new THREE.MeshBasicMaterial({ color: 0xCBB38B, wireframe: true });
    }
    if (isGlass) {
      return new THREE.MeshStandardMaterial({
        color: 0x4B7B99,
        transparent: true,
        opacity: 0.38,
        roughness: 0.1,
        metalness: 0.3
      });
    }
    return new THREE.MeshStandardMaterial({
      color: colorHex,
      roughness: roughness,
      metalness: metalness,
      transparent: isTransparent,
      opacity: opacity
    });
  }

  const matConcrete = createArchMaterial(0x1E212A, 0.85, 0.15);
  const matBrass = createArchMaterial(0xCBB38B, 0.35, 0.75);
  const matTeak = createArchMaterial(0x523C27, 0.75, 0.05);
  const matGlass = isWireframe ? matConcrete : (isGlass ? matConcrete : createArchMaterial(0x7399B0, 0.15, 0.2, true, 0.42));
  const matWater = createArchMaterial(0x1B4B63, 0.1, 0.6, true, 0.75);
  const matFoliage = createArchMaterial(0x274332, 0.85, 0.05);
  const matTrunk = createArchMaterial(0x3B2D21, 0.9, 0.05);

  function addMesh(geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.rotation.set(rx, ry, rz);
    mesh.castShadow = !isWireframe;
    mesh.receiveShadow = !isWireframe;
    arch3DBuildingGroup.add(mesh);
    return mesh;
  }

  function addBiophilicTree(x, y, z, scale = 1.0) {
    const trunkGeo = new THREE.CylinderGeometry(0.08 * scale, 0.12 * scale, 1.8 * scale, 8);
    addMesh(trunkGeo, matTrunk, x, y + 0.9 * scale, z);
    const foliageGeo = new THREE.DodecahedronGeometry(0.9 * scale, 1);
    addMesh(foliageGeo, matFoliage, x, y + 2.0 * scale, z);
  }

  // PROCEDURAL MODELS PER UNIT ARCHITECTURE
  if (unitKey === 'skylight') {
    // UNIT 1: THE SKYLIGHT PAVILION (BSD City, Andramatin Partner)
    addMesh(new THREE.BoxGeometry(9.0, 0.35, 7.0), matConcrete, 0, 0.175, 0);
    addMesh(new THREE.BoxGeometry(7.5, 2.2, 5.5), matGlass, 0, 1.45, 0);

    const colGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.2, 12);
    addMesh(colGeo, matBrass, -3.6, 1.45, -2.6);
    addMesh(colGeo, matBrass, 3.6, 1.45, -2.6);
    addMesh(colGeo, matBrass, -3.6, 1.45, 2.6);
    addMesh(colGeo, matBrass, 3.6, 1.45, 2.6);

    addMesh(new THREE.BoxGeometry(9.4, 2.5, 5.8), matConcrete, 0.8, 3.8, 0.3);
    addMesh(new THREE.BoxGeometry(2.6, 0.4, 2.2), matBrass, -0.6, 5.15, 0);
    addMesh(new THREE.BoxGeometry(2.4, 0.1, 2.0), matGlass, -0.6, 5.25, 0);

    addBiophilicTree(-0.6, 0.35, 0, 1.4);
    addMesh(new THREE.BoxGeometry(3.0, 0.1, 1.2), matWater, -2.5, 0.36, 2.2);

  } else if (unitKey === 'mori') {
    // UNIT 2: MORI ZEN SANCTUARY (Cipete, Atelier SORA)
    addMesh(new THREE.BoxGeometry(8.5, 0.3, 7.5), matTeak, 0, 0.15, 0);
    addMesh(new THREE.BoxGeometry(5.8, 1.9, 4.8), matConcrete, -0.8, 1.25, -0.6);
    addMesh(new THREE.BoxGeometry(9.6, 0.2, 8.2), matConcrete, 0, 2.3, 0);
    addMesh(new THREE.BoxGeometry(4.2, 1.8, 3.6), matConcrete, -0.6, 3.2, -0.4);
    addMesh(new THREE.BoxGeometry(5.6, 0.18, 4.8), matBrass, -0.6, 4.15, -0.4);

    for (let i = -1.6; i <= 1.6; i += 0.4) {
      addMesh(new THREE.BoxGeometry(0.06, 1.8, 0.1), matTeak, 2.2, 1.25, i - 0.6);
    }

    addMesh(new THREE.BoxGeometry(2.6, 0.08, 2.6), matConcrete, 2.2, 0.32, 1.4);
    addBiophilicTree(2.2, 0.35, 1.4, 1.0);

  } else if (unitKey === 'komorebi') {
    // UNIT 3: KOMOREBI COURTYARD (Bintaro Sektor 9, Kalandra Studio)
    addMesh(new THREE.BoxGeometry(7.6, 0.3, 6.6), matConcrete, 0, 0.15, 0);
    addMesh(new THREE.BoxGeometry(4.2, 2.2, 5.6), matConcrete, -1.2, 1.4, 0);
    addMesh(new THREE.BoxGeometry(3.0, 2.2, 2.6), matGlass, 1.8, 1.4, -1.5);
    addMesh(new THREE.BoxGeometry(0.12, 4.4, 3.2), matBrass, 3.2, 2.5, 0.8);
    addMesh(new THREE.BoxGeometry(5.6, 2.1, 4.0), matConcrete, 0.4, 3.55, 0.2);

    addBiophilicTree(1.6, 0.3, 1.2, 1.3);

  } else if (unitKey === 'aether') {
    // UNIT 4: THE AETHER GLASS VILLA (Sentul Highlands, Linier Atelier)
    addMesh(new THREE.BoxGeometry(10.5, 0.6, 8.0), matConcrete, 0, 0.3, 0);
    addMesh(new THREE.BoxGeometry(8.5, 0.8, 6.0), matConcrete, 0.8, 0.9, -0.6);
    addMesh(new THREE.BoxGeometry(7.8, 2.4, 4.8), matGlass, 0.6, 2.4, 0.2);
    addMesh(new THREE.BoxGeometry(8.6, 0.25, 5.4), matBrass, 0.6, 3.65, 0.2);
    addMesh(new THREE.BoxGeometry(5.2, 2.2, 3.6), matConcrete, -0.8, 4.8, -0.2);
    addMesh(new THREE.BoxGeometry(4.6, 0.45, 2.0), matConcrete, 1.8, 1.3, 3.2);
    addMesh(new THREE.BoxGeometry(4.2, 0.1, 1.6), matWater, 1.8, 1.45, 3.2);

    addBiophilicTree(-3.6, 0.6, -2.4, 1.6);
    addBiophilicTree(-4.2, 0.6, 1.8, 1.2);
  }
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

  // Typing animation indicator
  answerBox.innerHTML = '<span class="inline-flex items-center gap-1.5 py-1 text-[#CBB38B] font-mono text-xs"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span> <span class="ml-2">SORAI sedang menganalisis arsip arsitektur...</span></span>';

  setTimeout(() => {
    let text = '';
    if (index === 1) {
      text = "Semua unit SORA dengan bukaan kaca lebar (seperti The Skylight Pavilion & Aether Villa) menggunakan kaca jenis Low-E (Low Emissivity) dengan insulasi ganda (double-glazed) serta sistem ventilasi silang aktif. Cahaya alami masuk 100%, tetapi radiasi panas tereduksi hingga 68%, sehingga ruangan tetap sejuk dan hemat daya AC.";
    } else if (index === 2) {
      text = "Seluruh properti dalam portofolio SORA diwajibkan lolos verifikasi legalitas 100%: Sertifikat Hak Milik (SHM) murni perorangan (bukan HGB bermasalah), PBG/IMB aktif, dan bebas sengketa waris atau jaminan bank. Pengecekan dilakukan oleh kantor notaris rekanan independen kami.";
    } else if (index === 3) {
      text = "Untuk keluarga dengan balita, Komorebi Courtyard dan Mori Zen Sanctuary adalah rekomendasi tertinggi. Keduanya memiliki tata ruang satu level utama yang minim tangga curam, tepian dinding membulat (soft-corner plaster), serta inner courtyard bebas kendaraan untuk area bermain anak yang aman dan terpantau.";
    }
    answerBox.style.opacity = '0';
    answerBox.innerText = text;
    answerBox.style.transition = 'opacity 0.4s ease';
    requestAnimationFrame(() => {
      answerBox.style.opacity = '1';
    });
  }, 420);
}

function handleCustomAsk() {
  const inputEl = document.getElementById('customAskInput');
  if (!inputEl) return;
  const input = inputEl.value.trim();
  if (!input) return;

  const answerBox = document.getElementById('askAnswerText');
  if (answerBox) {
    answerBox.innerHTML = `<span class="inline-flex items-center gap-1.5 py-1 text-[#CBB38B] font-mono text-xs"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span> <span class="ml-2">SORAI sedang menelaah aspek spasial: "${input}"...</span></span>`;
    
    setTimeout(() => {
      answerBox.style.opacity = '0';
      answerBox.innerHTML = `Dari tinjauan arsitektur SORA terhadap <em>"${input}"</em>:<br><br>Pertimbangan utama hunian ini bertumpu pada keselarasan orientasi angin lokal, materialitas jujur yang minim biaya perawatan jangka panjang, serta privasi akustik dari kebisingan luar. Kamu dapat mendiskusikan kustomisasi zonasi ini langsung dengan kurator arsitek SORA saat Private Viewing.`;
      answerBox.style.transition = 'opacity 0.4s ease';
      requestAnimationFrame(() => {
        answerBox.style.opacity = '1';
      });
      showToast('SORAI selesai menyusun rekomendasi arsitektur.');
    }, 550);
  }
  inputEl.value = '';
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

// Scroll Reveal Observer (Supports Directional & Scale Variants)
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
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

// Interactive Dynamic Card Cursor Reflection & CSS 3D Depth Tilt
function initCardSpotlight() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cards = document.querySelectorAll('.card-lift, .glass-panel');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // 3D Perspective Tilt on .card-lift for desktop
      if (!isReducedMotion && card.classList.contains('card-lift') && window.innerWidth >= 768) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5.5;
        const rotateY = ((x - centerX) / centerX) * 5.5;
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
      }
    });

    if (card.classList.contains('card-lift')) {
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    }
  });
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
  initScrollReveal();
  initCardSpotlight();
});

// Fallback jika dipanggil langsung
initCursorGlow();
initScrollReveal();
initCardSpotlight();
updateKprCalculations();
