# Zizi & Ulwan - Wedding Invitation

Undangan pernikahan online dengan tema Minangkabau tradisional. Dibuat dengan React, TypeScript, dan Vite.

## 🎯 Fitur Utama

- **Hero Section**: Sambutan dengan tema "Maimbau Baralek" dan countdown interaktif
- **Countdown**: Hitung menuju hari pernikahan
- **Profil Mempelai**: Foto dan informasi lengkap mempelai beserta orang tua
- **Save The Date**: Detail acara Akad Nikah dan Resepsi
- **Quote Section**: Ayat Al-Quran(QS. Ar-Rum: 21) dengan dekorasi Islamic
- **RSVP Form**: Konfirmasi kehadiran dengan statistik
- **Daftar Tamu**: Tampilan tamu yang telah konfirmasi
- **Footer**: Informasi kontak, undangan tambahan, dan galang

## 🎨 Tema & Desain

- **Warna Utama**: 
  - Cream (#f5e6d3) - background
  - Gold (#d4af37) - aksen dan border
  - Dark Brown (#2d1810) - teks utama
- **Font**: Playfair Display (display) + Lato (body)
- **Motif**: Pola tradisional Minangkabau (Rumah Gadang, Islamic geometry)
- **Responsif**: Tampilan optimal di desktop dan mobile

## 📁 Struktur Proyek

```
src/
├── components/      # Komponen React
│   ├── Hero.tsx        # Section utama
│   ├── Countdown.tsx   # Hitung mundur
│   ├── CoupleInfo.tsx  # Info mempelai
│   ├── EventDetails.tsx # Detail acara
│   ├── QuoteSection.tsx # Quote Al-Quran
│   ├── RSVP.tsx        # Form konfirmasi
│   └── Footer.tsx      # Footer dengan daftar tamu
├── data/
│   └── wedding.ts      # Data pernikahan
├── hooks/
│   └── useCountdown.ts # Custom hook countdown
├── types/
│   └── index.ts        # TypeScript interfaces
└── assets/
    ├── images/         # Foto & placeholder
    ├── patterns/       # SVG patterns Minang
    └── downloaded/     # Assets dari referensi
```

## 🚀 Menjalankan Proyek

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Buka http://localhost:5173 di browser

### Build Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## ⚙️ Konfigurasi

Edit file `src/data/wedding.ts` untuk mengubah:
- Nama mempelai
- Tanggal & waktu acara
- Lokasi
- Informasi orang tua
- Quote/doa
- Kontak & Instagram

### Mengganti Foto
Ganti file di `src/assets/images/`:
- `bride-placeholder.svg` → foto mempelai wanita
- `groom-placeholder.svg` → foto mempelai pria

Rekomendasi format: SVG atau PNG, ukuran 400x400px untuk hasil terbaik.

## 🌐 Deployment

Proyek siap di-deploy ke:
- **Netlify** / **Vercel** (drag & drop folder `dist`)
- **GitHub Pages**
- **Shared hosting** (upload file `dist/`)

Pastikan untuk:
1. Set base path di `vite.config.ts` jika perlu
2. Update `index.html` metadata (title, description, OG tags)
3. Ganti path gambar dan aset sesuai domain

## 📱 Fitur RSVP

Data RSVP tersimpan di **browser localStorage**:
- Reset: Buka console → `localStorage.clear()`
- Backup: `JSON.parse(localStorage.getItem('wedding_guests_zizi_ulwan'))`

Untuk backend, integrasi dengan Firebase/Node.js bisa ditambahkan.

## 🎨 Kustomisasi

### Mengubah Warna
Edit `src/index.css`:
```css
:root {
  --color-gold: #d4af37;      /* Aksen utama */
  --color-cream: #f5e6d3;     /* Background */
  --color-dark-brown: #2d1810; /* Teks */
}
```

### Mengubah Font
1. Tambah Google Font di `src/App.tsx` (useEffect)
2. Update `:root` font-family di `index.css`

## 📜 Lisensi

Proyek ini dibuat untuk keperluan pernikahan. Bebas dimodifikasi.

---

**Dibuat dengan ❤️ untuk Zizi & Ulwan**
*19 April 2026 - Bukittinggi*
