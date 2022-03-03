// const bcrypt = require('bcrypt');

const comparePassword = (userPassword, databasePassword) => {
  // const validatedPass = await bcrypt.compare(password, user.password);
  return userPassword === databasePassword;
}

const encrypt = (password) => {
  //password: bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
  return password;

}

module.exports = { comparePassword, encrypt }