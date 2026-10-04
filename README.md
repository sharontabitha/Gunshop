# The Iron Vault

Katalog produk dengan pencarian, filter, pengurutan, dan keranjang belanja.

## Hasil dan Analisis

1. **Konsistensi gambar**: gambar kartu memakai slot tetap setinggi 160 px dengan `object-fit: contain`. Analisis: rasio gambar asli tidak lagi mengubah tinggi kartu dan gambar tetap terlihat utuh.
2. **Pencarian dan filter**: pencarian nama/kaliber dapat digabung dengan filter jenis dan batas harga. Analisis: seluruh kondisi diterapkan bersama sehingga daftar hanya menampilkan produk yang cocok dengan kriteria aktif.
3. **Pengurutan katalog**: tombol nama mengurutkan A-Z/Z-A, tombol harga mengurutkan rendah-tinggi/tinggi-rendah. Klik ulang tombol aktif membalik urutan. Analisis: pengguna dapat membandingkan katalog sesuai kebutuhan tanpa kehilangan filter.
4. **Keranjang belanja**: tiap kartu dapat menambahkan produk, badge header menghitung total kuantitas, kontrol keranjang mengubah jumlah, dan subtotal dihitung otomatis. Analisis: perubahan kuantitas langsung tercermin pada badge dan total belanja.

## Langkah Pengerjaan

1. Tetapkan tinggi slot gambar serta `object-fit` agar ukuran visual kartu konsisten.
2. Terapkan pencarian dan filter secara bersamaan, lalu tambahkan kontrol toggle untuk mengurutkan nama dan harga.
3. Tambahkan aksi keranjang pada tiap kartu dan gunakan state keranjang yang sudah ada untuk badge, kuantitas, serta subtotal.
4. Validasi perubahan dengan build, lint, dan uji interaksi katalog di browser.

## Menjalankan Proyek

```sh
npm install
npm run dev
```


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
