# SORA Property — Remotion Cinematic Trailer

Trailer video arsitektural terprogram (*code-based video*) untuk **SORA Property** menggunakan framework **Remotion**.

---

## 🎬 Spesifikasi Video:
* **Durasi:** 15 Detik (450 Frames @ 30 FPS)
* **Resolusi:** 4K / Full HD Landscape (1920 x 1080)
* **Karakter Visual:** Architectural Cinematic, Slow Breathing Zoom, Kinetic Typography, & Muted Aged Brass Aesthetics
* **Struktur Adegan:**
  1. *Scene 1 (0s - 3.5s):* Opening Manifesto & Simbol Kanji `空` (Spatial Openness & Light).
  2. *Scene 2 (3.5s - 7.5s):* Masterpiece Showcase (The Skylight Pavilion, 6.5M Ceiling Void).
  3. *Scene 3 (7.5s - 11s):* Material Honesty & Zen Courtyards.
  4. *Scene 4 (11s - 15s):* Guided by SORAI & Private Walkthrough Invitation.

---

## 🚀 Cara Menjalankan & Render Video

Masuk ke folder `trailer/`:
```bash
cd "C:\Users\Faari\.gemini\antigravity\scratch\sora-property\trailer"
```

### 1. Install Dependencies:
```bash
npm install
```

### 2. Buka Remotion Studio (Preview Interaktif di Browser):
```bash
npm start
```
Buka `http://localhost:3000` untuk memutar, menggeser scrubber timeline frame-by-frame, dan melihat render preview secara langsung.

### 3. Render Menjadi File Video MP4:
```bash
npm run build
```
Hasil file video MP4 akan otomatis tersimpan di folder `out/sora-trailer.mp4`.
