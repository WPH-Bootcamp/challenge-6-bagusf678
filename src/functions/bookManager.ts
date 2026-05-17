// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan


// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca


// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai


import { books } from "../data/books";
import { Book } from "../types";

// Menambah buku
export function addBook(
  title: string,
  author: string,
  publicationYear: number
): void {
  const book: Book = {
    title: title,
    author: author,
    publicationYear: publicationYear,
  };

  books.push(book);

  console.log("Buku berhasil ditambahkan");
}

// Menampilkan semua buku
export function listBooks(): void {
  if (books.length === 0) {
    console.log("Belum ada buku");
    return;
  }

  console.log("===== LIST BUKU =====");

  for (const book of books) {
    console.log(
      `${book.title} | ${book.author} | ${book.publicationYear}`
    );
  }
}

// Mencari buku
export function searchBook(title?: string): void {
  // Jika parameter kosong
  if (title === undefined) {
    console.log("Silakan masukkan judul buku");
    return;
  }

  let isFound = false;

  for (const book of books) {
    if (book.title.toLowerCase() === title.toLowerCase()) {
      console.log("===== BUKU DITEMUKAN =====");
      console.log(`Judul : ${book.title}`);
      console.log(`Author : ${book.author}`);
      console.log(`Tahun : ${book.publicationYear}`);

      isFound = true;
    }
  }

  if (!isFound) {
    console.log("Buku tidak ditemukan");
  }
}





