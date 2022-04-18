/**
 * Buatlah sebuah fungsi yang menerima dua argumen berupa objek kemudian mengembalikan menjadi satu objek gabungan
 *
 * Contoh: {a: 1, b: 2}, {c: 3, d: 4}
 * Output: {a: 1, b: 2, c: 3, d: 4}
 */

const mergeTwoObjects = (firstObject, secondObject) => {
  // TODO: answer here
<<<<<<< HEAD
  let mergedObject = {};
  for (let key in firstObject) {
    mergedObject[key] = firstObject[key];
  }
  for (let key in secondObject) {
    mergedObject[key] = secondObject[key];
  }
  return mergedObject;
=======
>>>>>>> 466979049e6a25d12227dd7a51f55bb2aefac437
};

module.exports = mergeTwoObjects