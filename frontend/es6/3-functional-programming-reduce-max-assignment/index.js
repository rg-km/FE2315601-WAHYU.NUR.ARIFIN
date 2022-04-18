/**
 * Cari nilai tertinggi dari array menggunakan reduce
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 5
 *
 * Catatan: Tidak boleh menggunakan perintah Math.max().
 */

const maxFromArray = (numbers) => {
  // TODO: answer here
<<<<<<< HEAD
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > max) {
      max = numbers[i];
      
    } else {
      max = max;
    }
  }
=======
>>>>>>> 466979049e6a25d12227dd7a51f55bb2aefac437
  return max;
};

module.exports = maxFromArray