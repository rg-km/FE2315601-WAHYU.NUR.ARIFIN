// format nama user menjadi "John - john@example.com", dan akses nama user dengan teknik destrucuring assignment.

const format = (user) => {
  // TODO: answer here
<<<<<<< HEAD
  const { name, email } = user;
  return `${name} - ${email}`;
=======
>>>>>>> 466979049e6a25d12227dd7a51f55bb2aefac437
};

console.log(format({ name: "John", email: "john@example.com" }))

module.exports = format