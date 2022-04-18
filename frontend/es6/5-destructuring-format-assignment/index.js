/** Format nama user menjadi "John - john@example.com - Unemployed",
 *  dan akses data user dengan teknik destrucuring assignment
 *  gunakan default value ketika atribut tidak ditemukan
 */

const format = (user) => {
  // TODO: answer here
<<<<<<< HEAD
  const {
    name = "John Wick",
    email = "johnwick@example.com"
  } = user;
  return `${name} - ${email} - Unemployed`;
=======
>>>>>>> 466979049e6a25d12227dd7a51f55bb2aefac437
};

console.log(format({ name: "John", email: "john@example.com" }));

module.exports = format