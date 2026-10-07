// Edit katalog di file ini tanpa menyentuh struktur halaman atau logika aplikasi.
const categories = [
    { id: "dus-kemasan", name: "Dus Kemasan", desc: "Dus Martabak, Nasi Box & Custom", icon: "fa-box-open", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80" },
    { id: "undangan", name: "Undangan", desc: "Soft Cover & Hardcover Amplop", icon: "fa-envelope-open-text", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80" },
    { id: "nota", name: "Nota / Faktur", desc: "NCR 1-3 Rangkap Warna-Warni", icon: "fa-receipt", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" },
    { id: "buku-yasin", name: "Buku Yasin", desc: "Soft Cover & Hard Cover Eksklusif", icon: "fa-book-open", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { id: "hangtag", name: "Hangtag Produk", desc: "Label Brand Bahan Lengkap", icon: "fa-tag", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80" }
];

const products = [
    {
        id: 1, categoryId: "dus-kemasan", name: "Dus Martabak", price: 850, unit: "pcs (Min. 2.000 pcs)",
        desc: "Dus martabak manis/asin kokoh dengan opsi laminasi anti air & minyak.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        features: ["Pilihan Bahan: Duplex, Ivory, atau Kraft", "Laminasi Dalam: Tersedia opsi anti air & minyak", "Ketahanan kokoh dan cetakan tajam"]
    },
    {
        id: 2, categoryId: "dus-kemasan", name: "Dus Nasi Box (S, M, L)", price: 950, unit: "pcs (Min. 2.000 pcs)",
        desc: "Dus nasi box higienis ukuran S, M, L dengan pilihan bahan berkualitas.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        features: ["Pilihan Ukuran: S, M, dan L", "Pilihan Bahan: Duplex, Ivory, atau Kraft", "Laminasi Dalam: Aman dari rembes minyak"]
    },
    {
        id: 3, categoryId: "dus-kemasan", name: "Dus Kemasan Custom Lainnya", price: 1000, unit: "pcs (Min. 2.000 pcs)",
        desc: "Cetak dus kue, dus produk, atau kemasan custom ukuran khusus.",
        image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80",
        features: ["Pilihan Bahan: Duplex, Ivory, atau Kraft", "Ukuran dan bentuk bisa disesuaikan kebutuhan usaha"]
    },
    {
        id: 4, categoryId: "undangan", name: "Undangan Soft Cover", price: 1000, unit: "lembar (Min. 100 pcs)",
        desc: "Undangan pernikahan/acara soft cover elegan berbahan kertas BC berkualitas.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
        features: ["Bahan: Kertas BC berkualitas", "Desain elegan dan cetakan tajam", "Minimum order terjangkau (100 pcs)"]
    },
    {
        id: 5, categoryId: "undangan", name: "Undangan Hardcover Amplop", price: 4000, unit: "lembar (Min. 300 pcs)",
        desc: "Undangan hardcover bentuk amplop eksklusif dengan finishing rapi.",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
        features: ["Pilihan Bahan Cover: Kertas BC atau Art Paper", "Bentuk amplop eksklusif & kokoh", "Finishing rapi & elegan"]
    },
    {
        id: 6, categoryId: "nota", name: "Nota / Faktur / Surat Jalan (NCR)", price: 150000, unit: "rim",
        desc: "Nota NCR rangkap, bebas pilih warna kertas dan bisa tambah nomorator.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
        features: ["Pilihan Rangkap: 1, 2, atau 3 Rangkap", "Warna Kertas NCR: Putih, Kuning, Merah, Biru", "Tersedia opsi tambahan nomorator (nomor urut)"]
    },
    {
        id: 7, categoryId: "buku-yasin", name: "Buku Yasin Soft Cover", price: 7000, unit: "buku (Min. 30 pcs)",
        desc: "Cetak buku Yasin kenangan tahlilan dengan berbagai pilihan halaman.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        features: ["Pilihan Halaman: 96 Halaman atau 148 Halaman", "Cover bisa dipilih sesuai keinginan", "Minimum order 30 pcs"]
    },
    {
        id: 8, categoryId: "buku-yasin", name: "Buku Yasin Hard Cover", price: 18000, unit: "buku (Min. 30 pcs)",
        desc: "Buku Yasin hardcover eksklusif isian 148 halaman dengan warna cover bebas pilih.",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        features: ["Isian Halaman: 148 Halaman", "Pilihan Warna Cover: Hijau, Biru, Hitam, Maroon, Gold, dll", "Tampilan hardcover eksklusif"]
    },
    {
        id: 9, categoryId: "hangtag", name: "Hangtag / Label Produk Brand", price: 150, unit: "pcs (Min. 500 pcs)",
        desc: "Hangtag baju, label brand, souvenir dengan bahan dan laminasi pilihan.",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80",
        features: ["Pilihan Bahan: Kraft, Art Paper, Ivory, atau Duplex", "Cetak: 1 Muka atau Bolak-Balik (2 Muka)", "Laminasi: Tersedia Glossy atau Doff"]
    }
];
