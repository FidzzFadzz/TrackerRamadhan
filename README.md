# TrackerRamadhan - Aplikasi Islami

Aplikasi web mobile-first untuk membantu umat Muslim dalam menjalankan ibadah selama bulan Ramadhan. Aplikasi ini menyediakan berbagai fitur untuk mendukung aktivitas spiritual Anda.

## Fitur Utama

### 1. **Dashboard Utama** (`index.html`)
- Countdown timer menuju waktu berbuka puasa
- Jadwal imsakiyah dengan progress bar
- Daily tracker untuk memantau target ibadah harian
- Menu grid untuk akses cepat ke semua fitur

### 2. **Al-Qur'an** (`Pages/alquran.html`, `Pages/alquran-juz.html`)
- Daftar lengkap 114 surah Al-Qur'an
- Tampilan per Juz (30 Juz)
- Fitur pencarian surah
- Bookmark halaman favorit

### 3. **Kumpulan Doa** (`Pages/doa.html`)
- Kategori doa harian
- Wirid dan tahlil
- Sholawat Nabi
- Al-Ma'tsurat pagi dan petang
- Asmaul Husna (99 Nama Allah)

### 4. **Tasbih Counter** (`Pages/tasbih.html`)
- Counter digital dengan progress ring
- 3 pilihan tasbih: Subhanallah, Alhamdulillah, Allahu Akbar
- Target otomatis (33, 33, 34)
- Efek suara dan vibration
- Navigasi antar tasbih

### 5. **Penunjuk Kiblat** (`Pages/kiblat.html`)
- Kompas digital untuk menunjuk arah kiblat
- Menggunakan GPS dan sensor device
- Menampilkan jarak ke Mekah
- Informasi lokasi real-time

### 6. **Jadwal Imsakiyah** (`Pages/jadwal-imsakiyah.html`)
- Jadwal sholat lengkap (Imsak, Subuh, Dzuhur, Ashar, Maghrib, Isya)
- Jadwal untuk seluruh bulan Ramadhan
- Countdown untuk waktu sholat berikutnya
- Informasi lokasi dan zona waktu

### 7. **Tracker Ibadah** (`Pages/tracker-ibadah.html`)
- Checklist 9 target ibadah harian:
  - 5 waktu sholat
  - Tarawih
  - Tilawah Quran
  - Sedekah
  - Puasa
- Progress bar visual
- Penyimpanan status harian

### 8. **Kelola Target** (`Pages/target.html`)
- Tambah target ibadah custom
- Edit dan hapus target
- Daftar target yang dapat disesuaikan

### 9. **Halaman Ditandai** (`Pages/halaman-ditandai.html`)
- Simpan halaman Al-Qur'an favorit Anda
- Akses cepat ke ayat yang sering dibaca
- Kelola bookmark

## Struktur Proyek

```
TrackerRamadhan/
├── index.html                 # Halaman utama
├── script.js                  # Script global
├── Pages/
│   ├── alquran.html          # Daftar surah
│   ├── alquran-juz.html      # Daftar juz
│   ├── doa.html              # Kumpulan doa
│   ├── kiblat.html           # Penunjuk kiblat
│   ├── tasbih.html           # Tasbih counter
│   ├── tracker-ibadah.html   # Tracker ibadah
│   ├── target.html           # Kelola target
│   ├── jadwal-imsakiyah.html # Jadwal imsakiyah
│   └── halaman-ditandai.html # Halaman ditandai
├── Asset/                     # Gambar dan ikon
│   ├── Logo Alquran.png
│   ├── logo buku.png
│   ├── icon kiblat.png
│   ├── icon tasbih.png
│   ├── Subuh.png
│   ├── Magrib.png
│   ├── Tarawih.png
│   ├── Puasa.png
│   ├── Sedekah.png
│   ├── diary.png
│   ├── target.png
│   ├── Pattern.png
│   └── bg_mesjid.png
└── README.md                  # Dokumentasi

```

## Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **Tailwind CSS** - Styling dan responsive design
- **JavaScript (Vanilla)** - Interaktivitas
- **Font Awesome 6.4.0** - Ikon
- **Geolocation API** - Lokasi pengguna
- **Device Orientation API** - Sensor kompas
- **Web Audio API** - Efek suara tasbih
- **Vibration API** - Haptic feedback

## Fitur Teknis

### Responsive Design
- Dioptimalkan untuk mobile (max-width: 500px)
- Gradient background yang menarik
- Bottom navigation yang fixed
- Touch-friendly interface

### Local Storage
- Menyimpan data tracker ibadah
- Menyimpan target custom
- Menyimpan bookmark halaman

### Real-time Features
- Countdown timer yang update setiap detik
- Sensor kompas untuk penunjuk kiblat
- GPS tracking untuk jarak ke Mekah

### Accessibility
- Semantic HTML
- ARIA labels untuk ikon
- Kontras warna yang cukup
- Font size yang readable

## Cara Menggunakan

1. Buka `index.html` di browser
2. Navigasi menggunakan menu grid atau bottom navigation
3. Klik pada fitur yang ingin digunakan
4. Untuk tracker ibadah, klik checkbox untuk menandai aktivitas
5. Untuk tasbih, klik lingkaran untuk menambah counter

## Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Catatan Penting

- Fitur Kiblat memerlukan izin akses lokasi dan sensor device
- Fitur countdown timer berjalan di background
- Data disimpan di local storage browser
- Aplikasi bekerja offline setelah dimuat pertama kali

## Pengembangan Lebih Lanjut

Fitur yang dapat ditambahkan:
- Backend API untuk sinkronisasi data
- Notifikasi push untuk waktu sholat
- Integrasi dengan kalender
- Statistik ibadah bulanan
- Sharing progress ke social media
- Dark mode
- Multi-language support
- Audio Quran recitation

## Lisensi

Proyek ini dibuat untuk keperluan edukasi dan spiritual.

---

**Dibuat dengan ❤️ untuk membantu ibadah Ramadhan Anda**
