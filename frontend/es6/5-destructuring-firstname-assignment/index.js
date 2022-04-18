/** Akses user name, namun dengan nama variabel yang berbeda dari atribut pada objek user
 */
const getUserFirstName = (user) => {
  // TODO: answer here
<<<<<<< HEAD
  const { name: firstName } = user;
  return firstName;
=======
>>>>>>> 466979049e6a25d12227dd7a51f55bb2aefac437
};

console.log(getUserFirstName({ name: "John", email: "john@example.com" }));

module.exports = getUserFirstName