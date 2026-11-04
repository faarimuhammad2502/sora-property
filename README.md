# SORA PROPERTY
### Contemporary Architectural Living & Spatial Intelligence

> **SORA (空)** — Diambil dari filosofi arsitektur ruang terbuka Jepang. Sebuah kurasi hunian kontemporer di mana volume ruang, bukaan cahaya alami, dan lanskap menyatu dalam kesederhanaan yang berwibawa.

---

## Overview

SORA Property adalah *digital atelier* dan kurasi hunian arsitektural butik yang dirancang untuk mempertemukan penikmat desain dengan karya hunian berkarakter kuat. Menggabungkan estetika editorial kelas tinggi, denah tata ruang interaktif, kalkulator finansial anuitas, dan asisten spasial **SORAI (SORA Architectural Intelligence)**.

Dibangun dengan prinsip *Material Honesty* dan *Anti-Generic Design*: tanpa elemen visual artifisial murahan, tanpa tumpukan gradien generik, dan bebas dari ornamen berlebihan.

---

## Architectural Principles & Design System

* **Palet Materialitas:**
  * **Belgian Basalt (`#0A0B0E`)** — Fondasi gelap bertekstur arang hitam yang dalam dan teduh.
  * **Raw Limestone (`#F5F2EB`)** — Tipografi bernuansa batu kapur alami dengan keterbacaan tinggi.
  * **Aged Brass (`#CBB38B`)** — Aksen metalik tembaga tua yang tenang dan elegan.
* **Disiplin Tipografi:**
  * **Headings:** *Cinzel* — Serif klasik modern dengan proporsi monumental.
  * **Body Copy:** *Plus Jakarta Sans* — Geometris netral, ramah, dan presisi.
  * **Numerals & Metrics:** *Space Grotesk* dengan format tabular numerals (`font-feature-settings: 'tnum' on, 'zero' on`) untuk memastikan seluruh data harga, luas tanah, dan dimensi denah terbaca tajam tanpa pergeseran lebar angka.
* **Motion & Interaksi:**
  * Ambient cursor spotlight glow responsif.
  * Infinite kinetic ticker kurasi filosofi.
  * Editorial preloader dengan live percentage counter dan status kalibrasi volume ruang.

---

## Core Experiences

### 1. Curated Masterpiece Portfolio
Menampilkan 4 karya hunian dengan pendekatan spasial yang berbeda:
* **The Skylight Pavilion** — *Modern Glass Pavilion* (BSD City | Rp 18,5 M). Penetrasi cahaya vertikal dengan atrium setinggi 8,2 meter.
* **Mori Zen Sanctuary** — *Japandi Courtyard* (Sentul Highlands | Rp 12,8 M). Halaman tengah bernuansa lumut dan kayu cedar hitam (*Shou Sugi Ban*).
* **Komorebi Courtyard** — *Biophilic Residence* (Pondok Indah | Rp 24,0 M). Dinding kisi kayu yang menyaring cahaya matahari menjadi bayangan artistik.
* **The Aether Glass Villa** — *Brutalist Minimalist* (Uluwatu, Bali | Rp 31,5 M). Kantilever beton ekspos yang membentang dramatis menghadap cakrawala samudra.

### 2. Architectural Spotlight & Floor Plan Modal
Setiap unit dilengkapi dengan sistem inspeksi mendalam:
* **Spatial Perspectives:** Galeri 4 sudut ruang beresolusi tinggi (Fasad, Ruang Utama, Master Suite, Courtyard/Bukaan).
* **Technical Blueprint (Denah Lantai 1 & 2):** Vektor tata ruang interaktif dengan pembagian zonasi publik, semi-privat, dan privat, serta visualisasi sirkulasi ventilasi silang.
* **Materiality & Biophilic Specs:** Rincian spesifikasi struktur, fasad, insulasi termal kaca Low-E, dan rasio sirkulasi udara alami.

### 3. SORA Film — 16-Second Architectural Cinema Trailer
Trailer sinematik berbasis kode program (Remotion & Canvas Engine) yang menyajikan narasi visual:
* 4 adegan transisi sinematik dengan efek pergerakan kamera Ken Burns.
* Tipografi kinetik terukur dengan soundtrack ambient akustik.
* Tersedia sebagai pemutar video mandiri di folder `trailer/trailer.html` dan terintegrasi langsung di dalam modal situs.

### 4. Lifestyle & Mortgage Math Engine (KPR)
Perangkat kalkulasi finansial proporsional:
* Penyesuaian fleksibel untuk nilai unit, uang muka (DP 10% - 50%), tenor hingga 30 tahun, dan suku bunga tahunan.
* Kalkulasi formula anuitas standar industri perbankan secara instan.
* Indikator batas minimum rekomendasi penghasilan bulanan untuk menjaga stabilitas finansial pembeli.
* Sinkronisasi langsung hasil simulasi ke dalam catatan SORAI atau pesan WhatsApp konsultan.

### 5. SORAI (SORA Architectural Intelligence) Concierge
Asisten spasial cerdas yang didesain untuk mendampingi pencari hunian:
* **Curated Matcher:** Menganalisis preferensi kepribadian, gaya arsitektur yang disukai, dan toleransi budget.
* **Spatial Contrast (Komparasi Dua Unit):** Membedah perbedaan teknis orientasi cahaya, kompleksitas perawatan fasad, privasi, dan kesimpulan arsitektur objektif.
* **Direct Architect Consultation Handoff:** Format ringkasan rapi yang siap dikirimkan ke konsultan properti resmi via WhatsApp.

---

## File Architecture

Repositori ini disusun secara modular, bersih, dan tanpa dependensi rumit:

```
sora-property/
│
├── index.html            # Dokumen semantik utama (SEO ready, accessible, clean markup)
├── style.css             # Desain sistem SORA (Dark mode, tipografi, utility classes)
├── app.js                # Engine logika katalog, kalkulator KPR, SORAI, dan modal
├── README.md             # Dokumentasi resmi repositori
│
└── trailer/              # Studio video sinematik
    ├── trailer.html      # Standalone browser cinema player (zero-dependency)
    ├── package.json      # Dependensi Remotion React video engine
    ├── remotion.config.ts# Konfigurasi video renderer
    └── src/              # Source code komposisi video Remotion
        ├── index.ts
        ├── Root.tsx
        └── SoraTrailer.tsx
```

---

## Getting Started

### Menjalankan Secara Lokal
Tidak memerlukan instalasi server atau npm build untuk menjalankan situs utama:
1. Clone repositori ini:
   ```bash
   git clone https://github.com/faarimuhammad2502/sora-property.git
   ```
2. Buka file `index.html` langsung di browser modern (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari).
3. Untuk memutar video trailer, buka `trailer/trailer.html` atau klik tombol **Tonton Film SORA** pada landing page.

### Menjalankan Remotion Studio (Opsional untuk Modifikasi Video)
Jika ingin mengembangkan atau memodifikasi komposisi video Remotion:
```bash
cd trailer
npm install
npm start
```

---

## Deployment ke Vercel

Situs ini 100% siap dideploy langsung ke Vercel:
1. Hubungkan akun GitHub di [Vercel Dashboard](https://vercel.com).
2. Pilih repositori `faarimuhammad2502/sora-property`.
3. Biarkan pengaturan build default (Framework Preset: Other / Static Site).
4. Klik **Deploy**. Situs akan langsung aktif dalam beberapa detik.

---

## Identity & Philosophy

* **SORA (空):** Melambangkan langit, kekosongan yang bermakna (*Ma*), serta keterbukaan tanpa batas.
* **SORAI:** SORA Architectural Intelligence — pendamping analitis dan kuratorial dalam menentukan tempat berpulang.

---

Architectural Curation by **Faari** · 2026 SORA Property.
