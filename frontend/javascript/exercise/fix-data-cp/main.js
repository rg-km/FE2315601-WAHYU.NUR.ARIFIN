/*
 Diberikan sebuah string `line`. Isi dari string ini adalah sebuah gabungan dari sembarang
 karakter. Tugas kamu adalah mengubah karakter yang merupakan virus menjadi konsonan atau vokal sesuai dengan
 requirement berikut:

 1. Jika di dalam 'line' jumlah karakter konsonan lebih banyak dari jumlah karakter vokal, 
    maka ubahlah semua karakter yang merupakan virus menjadi 'a'.
 2. Jika di dalam 'line' jumlah karakter vokal lebih banyak dari jumlah karakter konsonan, 
    maka ubah semua karakter yang merupakan virus menjadi 'b'.
 3. Jika di dalam 'line' jumlah karakter vokal sama dengan jumlah karakter konsonan, 
    maka ubah semua karakter yang merupakan virus menjadi 'c'.
 4. Jika tidak ada virus sama sekali, maka line tidak perlu diubah.
 5. Program akan menampilkan 'line' yang telah diubah sesuai dengan requirement diatas

 Berikut ini adalah contoh karakter vokal dan konsonan.
 Vokal = a i u e o
 Virus = #
 Konsonan = selain Vokal & Virus

 contoh 1:
 line = 'abc#ab#ueo'

 maka output yang diharapkan adalah 'abcbabbueo'
 karena jumlah vokal adalah 5, jumlah konsonan adalah 3. Lalu, untuk kedua virus
 yang ditemukan, maka semua karakter virus diubah menjadi 'b'.


 contoh 2:
 line = 'abcabdueobbb'

 Karena tidak terdapat virus, maka output yang diharapkan adalah
 'abcabdueobbb'
 
 [Ketentuan]:
 - TIDAK BOLEH menggunakan built-in function!
*/

function fixData(line) {
  // TODO: answer here
   let vocal = 0;
   let konsonan = 0;
   let adaVirus = false;
   let output = ''

   for (let i = 0; i < line.length; i++) {
       if (line[i] == 'a' || line[i] == 'i' || line[i] == 'u' || line[i] == 'e' || line[i] == 'o') {
           vocal = vocal + 1;
       } else if (line[i] != '#') {
           konsonan = konsonan + 1;
       }

       if (line[i] == '#') adaVirus = true;
   }

   if (!adaVirus) return line;
   let huruf = abc(vocal, konsonan);

   for (let j = 0; j < line.length; j++) {
       if (line[j] == '#') {
           output = output + huruf;
       } else {
           output = output + line[j];
       }
   }
   return output
}

function abc(vocal, konsonan) {
   if (vocal > konsonan) return 'b'
   if (vocal < konsonan) return 'a'
   if (konsonan == vocal) return 'c'
}


console.log(fixData('aoi#fdg#ue'))
console.log(fixData('eh#xyz#oi#'))
console.log(fixData('#eui#bcl##'))

module.exports = fixData