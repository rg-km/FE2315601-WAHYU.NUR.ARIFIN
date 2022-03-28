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
   let vokal = ['a','i','u','e','o'];
   let konsonan = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
   let hasil = '';
   let countVokal = 0;
   let countKonsonan = 0;
   let countVirus = 0;
   // masih memakai built in function
   for(var i = 0; i < line.length; i++){
      if(vokal.includes(line[i])){
            countVokal++;
      }
      if(konsonan.includes(line[i])){
            countKonsonan++;
      }
      if(line[i] == '#'){
            countVirus++;
      }
   }
   if(countVokal > countKonsonan){
      for(j = 0; j < line.length; j++){
         if(line[j] == '#'){
            hasil += 'b';
         }else{
            hasil += line[j];
         }
      }
   }else if(countVokal < countKonsonan){
      for(k = 0; k < line.length; k++){
         if(line[k] == '#'){
            hasil += '';
         }else{
            hasil += line[k];
         }
      }
   }
   if(countVokal == countKonsonan){
      for(l = 0; l < line.length; l++){
         if(line[l] == '#'){
            hasil += 'c';
         }else{
            hasil += line[l];
         }
      }
   }
   if(countVirus == 0){
      hasil = line;
   }
   return hasil;

}

console.log(fixData('aoi#fdg#ue'))
console.log(fixData('eh#xyz#oi#'))
console.log(fixData('#eui#bcl##'))

module.exports = fixData