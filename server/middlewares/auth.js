const { verifyJwt } = require('../utils/jwt-utils.js');

const authMiddleware = async (ctx, next) => {
  const authHeaders = ctx.request.headers['authorization'];
  if (!authHeaders) return ctx.status = 401;
  const token = authHeaders.split(' ')[1];
  const user = verifyJwt(token);

  if(!user) return ctx.status = 401;
  ctx.request.user = user;
  await next();
}

module.exports = { authMiddleware }