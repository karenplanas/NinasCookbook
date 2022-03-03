const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY 
const { comparePassword, encrypt } = require ('./encrypt-utils');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  }, 
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }, 
  password: {
    type: String,
    required: true,
  }
})

const User = model('user', userSchema);

const generateJwt = (user) => {
  const accessToken = jwt.sign({ ...user }, SECRET_KEY);
  return {...user, accessToken}
}

// class ApiError extends Error {
//   constructor(statusCode) {
//     this.statusCode = statusCode;
//   }
// }
// class InvalidUserPayloadError extends ApiError {
//   constructor() {
//     this.statusCode = 400;
//   }

// }
// class UserAlreadyExistsError extends ApiError {
//   constructor() {
//     this.statusCode = 400;
//   }
// }

// class SomethingElse extends ApiError {
//   constructor() {
//     this.statusCode = 401;
//   }
// }

const createUser = async(user) => {
  try {
    const newUser = await User.create({...user, password: encrypt(user.password)});
    return generateJwt(newUser);
  } catch(error) {
    // if(...) {
    //   throw UserAlreadyExistsError()
    // } else if(...) {
    //   throw InvalidUserPayloadError()
    // } else {
    //   throw error
    // }
    console.error(error);
    throw error
  }
}

const getUsers = async() => {
  try {
    return await User.find();
  } catch (error) {
    console.error(error);
    throw error
  }
}

const validateLogin = async (email, password) => {
  const user = await User.findOne({ email: email}).then(d => d._doc);
  if (user && comparePassword(password, user.password)){
    return generateJwt(user);
  }
}

module.exports = { createUser, getUsers, validateLogin }