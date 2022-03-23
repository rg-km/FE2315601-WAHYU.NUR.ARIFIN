// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh: 
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
const n = parseInt(prompt("Masukan jumlah baris: "));

// TODO: answer here

let hasil = '';
for (let i = 0; i < n; i++) {
      for (let j = n; j > i; j--) {
            hasil += '* ';
      }
      hasil += '\n';
}
console.log(hasil);