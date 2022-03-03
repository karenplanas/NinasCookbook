const jwt = require('jsonwebtoken')
const { createUser, getUsers, validateLogin } = require('../models/users')


const create = async (ctx) => {
  try {
    const user = await createUser(ctx.request.body);
    ctx.status = 201;
    ctx.body = user;
  } catch(e) {
    ctx.status = e.statusCode || 500
    console.error(e)
  }
}

const getAll = async (ctx) => {
  const users = await getUsers();
  ctx.status = 200;
  ctx.body = users;
}

const login = async (ctx) => {
  try {
    const { email, password } = ctx.request.body
    const userAllowed = await validateLogin(email, password)

    if (userAllowed) {
      ctx.status = 200;
      ctx.body = userAllowed;
    } else {
      ctx.status = 400;
      ctx.body = "Login failed";
    }
  } catch (error) {
    console.error(error);
  }
} 
module.exports = { create, getAll, login }