/**
 * Customisable greeting
 * Buatlah fungsi untuk memformat nama ada sebuah ucapan.
 * Fungsi terebut menerima dua argumen sebagai input
 * Argumen pertama berupa objek user, contoh: let user = { firstName: "John", lastName: "Doe" };
 * Argumen kedua berupa callback untuk memformat nama user.
 *
 */

function customisableGreeting(user, formatCallback) {
  // TODO: answer here
<<<<<<< HEAD
  const formattedName = formatCallback(user);
=======
>>>>>>> 466979049e6a25d12227dd7a51f55bb2aefac437
  return `Hi name is ${formattedName}, how are you?`;
}

module.exports = customisableGreeting