const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY 

const generateJwt = (user) => {
  const accessToken = signJwt(user);
  return {...user, accessToken}
}

const signJwt = (payload) => {
  return jwt.sign({ ...payload }, SECRET_KEY);
}

const verifyJwt = (token) => {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = { signJwt, verifyJwt, generateJwt }