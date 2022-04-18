/**
 * Mencari hewan diantara semak-semak
 * Buatlah fungsi untuk mencari nama binatang yang tersembunyi di dalam random string
 * Kata yang di cari akan selalu dituliskan dengan huruf kecil
 * Sedangkan semak-semak akan dituliskan dengan huruf besar.
 *
 * Contoh:
 * Input: UkUNFYGaFYFYmtNUHbJKHJJiOKDJKDnKFKFLgLLF
 * Output: kambing
 *
 * Hint:
 * - Javascript memiliki fungsi untuk mengubah huruf besar menjadi huruf kecil dan huruf besar menjadi huruf kecil
 * - string.toLowerCase(); string.toUpperCase();
 *
 */

const findAnimal = (bush) => {
  // TODO: answer here
  let output = '';

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < bush.length; i++){
    let isUpperCase = false;
    for (let j = 0; j < upperCase.length; j++){
      if (bush[i] === upperCase[j]){
        isUpperCase = true;
      }
    }

    if (isUpperCase === false){
      output += bush[i];
    }
  }
  
  return output;
};

module.exports = findAnimal