const { createUser, getUsers } = require('../models/users')

const create = async (ctx) => {
  const user = await createUser(ctx.request.body);
  ctx.status = 201;
  ctx.body = user;
}

const getAll = async (ctx) => {
  const users = await getUsers();
  ctx.status = 200;
  ctx.body = users;
}
module.exports = { create, getAll }