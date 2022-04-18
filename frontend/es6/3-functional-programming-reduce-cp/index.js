/**
 * Jumlahkan semua elemen angka dalam sebuah array
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 8
 */

 const sumTotalArray = (numbers) => {
      // TODO: answer here
      return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
    };
    
    module.exports = sumTotalArray