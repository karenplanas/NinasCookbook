const { verifyJwt } = require('../utils/jwt-utils');

const authMiddleware = async (ctx, next) => {
  const authHeaders = ctx.request.headers.authorization;

  if (!authHeaders) {
    ctx.status = 401;
    return;
  }

  const token = authHeaders.split(' ')[1];
  const user = verifyJwt(token);

  if (!user) {
    ctx.status = 401;
    return;
  }

  ctx.request.user = user;
  await next();
};

module.exports = { authMiddleware };
