const Koa = require('koa');
const dotenv = require('dotenv');
dotenv.config();
const bodyparser = require('koa-bodyparser');
const router = require('./router');
const { connect } = require('./models/index');

const app = new Koa();

app.use(bodyparser());
app.use(router.routes());

app.listen(3000, async ()=> {
  console.log('Server listening on http://localhost:3000');
  await connect();

})