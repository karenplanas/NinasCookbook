const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const signJwt = (payload) => jwt.sign({ ...payload }, SECRET_KEY);

const generateJwt = (user) => {
  const accessToken = signJwt(user);
  return { ...user, accessToken };
};

const verifyJwt = (token) => jwt.verify(token, SECRET_KEY);

module.exports = { signJwt, verifyJwt, generateJwt };
