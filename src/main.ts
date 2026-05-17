// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log("Book Management Application - Week 6");
console.log("=====================================");

// Mulai pengujian di bawah ini


import {
  addBook,
  listBooks,
  searchBook,
} from "./functions/bookManager";

// Tambah buku baru
addBook("Semikonduktor", "Anwar Jazidi", 2004);

addBook("motor induksi", "azhari tahir", 2008);

// Tampilkan semua buku
listBooks();

// Cari buku
searchBook("Bumi");

// Test optional parameter
searchBook();

