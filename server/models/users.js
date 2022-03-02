const mongoose = require('mongoose');
const { Schema, model } = mongoose;
// const bcrypt = require('bcrypt');

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

const createUser = async(user) => {
  try {
    // const newUser = { 
    //   firstname, 
    //   lastName, 
    //   email, 
    //   password: bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
    // }
    return await User.create(user);
  } catch(error) {
    console.error(error)
  }

}

const getUsers = async() => {
  try {
    return await User.find();
  } catch (error) {
    console.error(error);
  }
}

module.exports = { createUser, getUsers }