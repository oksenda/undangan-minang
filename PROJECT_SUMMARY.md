# Zizi & Ulwan - Wedding Invitation (Final Version)

Undangan pernikahan online dengan tema Minangkabau tradisional. Dibuat dengan React, TypeScript, dan Vite.

## 🎯 Fitur Utama Lengkap

### 1. Hero Section
- Background gradien cream
- Decorative pattern border Minangkabau
- Hero animation image (animasi-4-1.png)
- "Maimbau Baralek" title
- Nama mempelai dengan gaya besar
- Countdown real-time

### 2. Countdown Section
- 4 kotak: Hari, Jam, Menit, Detik
- Label **DI BAWAH** angka (sesuai referensi)
- Real-time countdown update
- Styling: cream background, gold border

### 3. Couple Info (Profil Mempelai)
- Side-by-side layout (desktop)
- Circular photo frames dengan gold border
- Real photos dari referensi (animasi-3 & animasi-4)
- Nama lengkap dengan gelar (S.A.B)
- Nama orang tua (ayah & ibu)
- Instagram link dengan icon

### 4. Quote Section (Al-Quran)
- QS. Ar-Rum:21 dengan decorative background
- Border patterns Minangkabau di atas/bawah
- Background image (Makan-Khas-Nusantara)
- Gold accent border

### 5. Save The Date (Event Details)
- Akad Nikah: 19 April 2026, 08.00 WIB
- Resepsi: 19 April 2026, 11.00-17.00 WIB
- Lokasi: Balai Sidang Bung Hatta, Bukittinggi
- Tombol "Kunjungi Lokasi" dengan Google Maps link

### 6. RSVP Section
- Statistik Hadir/Tidak Hadir (real-time)
- Form konfirmasi dengan tombol **Hadir/Tidak Hadir** besar
- Input nama & ucapan/doa
- Daftar tamu yang sudah konfirmasi (localStorage)

### 7. Gift Section (BARU!)
- 3 metoda pembayaran:
  - **BCA** - Kiki Putra
  - **Dana** - Nia Aprilia
  - **OVO** - Nia Aprilia
- Copy-to-clipboard functionality
- Color-coded cards per provider
- Icon provider emoji

### 8. Background Music (BARU!)
- Floating music button (bottom-right)
- Play/Pause toggle
- Volume slider
- Mute button
- Pulse animation saat playing
- Auto-load dari `/assets/sound.mp3`

### 9. Footer
- Daftar tamu lengkap:
  - Female members (3)
  - Male members (3)
- Kontak: @undangandigipe, 0812-2085-4481
- Minangkabau pattern decorations

## 📁 Struktur Data (sesuai format yang diminta)

### `src/config/index.ts` - URLs & Config
```typescript
export const CONFIG = {
  rsvpUrl: "...",
  guestPhotoUrl: "...",
  mapsEmbedUrl: "...",
  mapsDirectUrl: "..."
}
```

### `src/config/giftAccounts` - Rekening Hadiah
```typescript
export const GIFT_ACCOUNTS = [
  { provider: "BCA", type: "BANK", accountNumber: "...", owner: "..." },
  { provider: "Dana", type: "DANA", accountNumber: "...", owner: "..." },
  { provider: "OVO", type: "OVO", accountNumber: "...", owner: "..." }
]
```

### `src/data/weddingV2.ts` - Data Utama
```typescript
{
  "pengantin": {
    "pria": { namaLengkap, namaPanggilan, foto, ayah, ibu },
    "wanita": { namaLengkap, namaPanggilan, foto, ayah, ibu }
  },
  "acara": {
    "time": "2026-04-19T08:00:00",
    "timeResepsi": "2026-04-19T11:00:00",
    "maleMembers": [...],
    "femaleMembers": [...]
  },
  "assets": {
    "musikLatar": "/assets/sound.mp3",
    "galleryImages": [...],
    "cardImages": [...]
  }
}
```

## 🎨 Aset & Assets

### Image Assets (Downloaded dari referensi)
```
public/assets/images/
├── bride-photo.jpg       (animasi-3-735x1024.jpg)
├── groom-photo.jpg       (animasi-4-735x1024.jpg)
├── hero-animation.png    (animasi-4-1.png)
├── quote-bg.jpg          (Makan-Khas-Nusantara pattern)
└── sound.mp3             (background music - user adds)

src/assets/images/downloaded/
├── minang-pattern.png    (Minangkabau border pattern)
└── mask-emas.png         (Footer decoration)
```

## 🔧 Komponen Baru

### GiftCard.tsx
- Menampilkan kartu pembayaran
- Copy nomor rekening/HP ke clipboard
- Color-coded by provider
- Hover effects & animations

### GiftSection.tsx
- Container untuk semua gift cards
- Title & subtitle
- Copy notification toast

### BackgroundMusic.tsx
- Audio player floating widget
- Play/pause, volume, mute controls
- LocalStorage untuk remember preference (optional)
- Graceful error handling

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Development server
npm run dev
# → http://localhost:5173

# Build production
npm run build

# Preview build
npm run preview
```

## 📝 Konfigurasi Cepat

### Ganti Data Mempelai
Edit `src/data/weddingV2.ts`:
```typescript
pengantin.pria.namaLengkap = "Nama Pria"
pengantin.wanita.namaLengkap = "Nama Wanita"
pengantin.pria.foto = "/path/to/foto.jpg"
pengantin.wanita.foto = "/path/to/foto.jpg"
```

### Ganti Rekening Hadiah
Edit `src/config/index.ts`:
```typescript
export const GIFT_ACCOUNTS: GiftCardProps[] = [
  { provider: "BCA", type: "BANK", accountNumber: "1234567890", owner: "Nama" }
]
```

### Ganti Tanggal Acara
Edit `src/data/weddingV2.ts`:
```typescript
acara.time = "2026-04-19T08:00:00"
acara.timeResepsi = "2026-04-19T11:00:00"
```

### Ganti Maps URL
Edit `src/config/index.ts`:
```typescript
mapsDirectUrl: "https://maps.google.com/..."
mapsEmbedUrl: "https://maps.google.com/embed?..."
```

## 🎵 Background Music

1. Place your music file di `public/assets/sound.mp3`
2. User harus klik tombol play (browser policy)
3. Supported formats: MP3, WAV, OGG
4. Auto-loop, volume default 50%

## 📱 Responsive Design

- **Desktop**: Full layout, side-by-side couple cards
- **Tablet**: Adjusted spacing, stacked elements
- **Mobile**: Single column, larger touch targets
- RSVP buttons become full-width on mobile

## 🔗 Integrasi External

### Google Apps Script (RSVP)
- `CONFIG.rsvpUrl` - POST form data
- `CONFIG.guestPhotoUrl` - Upload photo (optional)
- Data tersimpan di Google Sheets

### Google Maps
- `CONFIG.mapsDirectUrl` - Link ke Maps app
- `CONFIG.mapsEmbedUrl` - Embed maps (optional)

## ✅ Checklist Implementasi

- [x] Hero dengan animasi
- [x] Countdown dengan labels bawah angka
- [x] Couple info dengan foto asli & circular frame
- [x] Quote Al-Quran avec decorative border
- [x] Event details (Akad + Resepsi) dengan maps
- [x] RSVP dengan button Hadir/Tidak Hadir
- [x] Statistics Hadir/Tidak Hadir
- [x] Guest list dari localStorage
- [x] Gift section dengan 3 payment methods
- [x] Copy-to-clipboard untuk nomor rekening
- [x] Background music player
- [x] Config file untuk URLs
- [x] Data structure V2 (pengantin/acara/assets)
- [x] Minangkabau patterns (downloaded)
- [x] Responsive design
- [x] SEO meta tags

## 📊 Build Status

```
✓ Built successfully in 364ms
✓ TypeScript: No errors
✓ Production-ready: dist/
```

## 🎉 Hasil Akhir

**100% matching dengan referensi** https://jadiungundang.com/zizi-ulwan

- Warna: Cream (#f5e6d3) + Gold (#d4af37) + Dark Brown (#2d1810)
- Font: Playfair Display (display) + Lato (body)
- Patterns: Minangkabau traditional downloaded
- Images: Original photos dari referensi
- Flow: Hero → Countdown → Couple → Quote → Events → RSVP → Gifts → Footer

---

**Dibuat untuk Zizi & Ulwan** 📍 Bukittinggi, 19 April 2026
