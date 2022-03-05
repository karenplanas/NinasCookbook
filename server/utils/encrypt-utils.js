const bcrypt = require('bcrypt');

const comparePassword = (userPassword, databasePassword) =>
  bcrypt.compare(userPassword, databasePassword);

const encrypt = (password) => {
  const hashedPw = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  return hashedPw;
};

module.exports = { comparePassword, encrypt };
