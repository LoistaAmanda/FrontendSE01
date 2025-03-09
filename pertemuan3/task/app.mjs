import { index, store, destroy } from "./controller.mjs";

// Menampilkan data awal
index();

// Menambah data baru
store("Zaki", 23, "Aceh", "zaki@example.com");
store("Zahra", 18, "Medan", "zahra@example.com");
store("Hani", 17, "Bandung", "honey@example.com");

// Menampilkan data setelah penambahan
index();

// Menghapus data
destroy("Dian");

// Menampilkan data setelah penghapusan
index();
