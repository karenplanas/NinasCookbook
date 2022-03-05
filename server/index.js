const Koa = require('koa');
const dotenv = require('dotenv');

dotenv.config();
const cors = require('@koa/cors');
const bodyparser = require('koa-bodyparser');
const router = require('./router');
const { connect } = require('./models/index');

const app = new Koa();

app.use(cors());
app.use(bodyparser());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    console.error('Error:', e);
    ctx.status = 500;
    ctx.body = e;
  }
});

app.use(router.routes());

app.listen(3000, async () => {
  console.log('Server listening on http://localhost:3000');
  await connect();
});
