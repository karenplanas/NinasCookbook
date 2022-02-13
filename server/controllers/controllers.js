const { getRecepies, addRecepie } = require ('../models/recepies')

const getAll = async (ctx) => {
  console.log('get all');
  try {
    const recepies = await getRecepies();
    console.log('recepies', recepies);
    ctx.status = 200;
    ctx.body = recepies;

  } catch(e) {
    console.error('Error:', e)
    ctx.status = 500;
    ctx.body = e;
  }
}

const addOne = async(ctx) => {
  try {
    const recepie = await addRecepie(ctx.request.body);
    ctx.status = 201;
    ctx.body = recepie;

  } catch(e) {
    console.error('Error:', e)
    ctx.status = 500;
    ctx.body = e;
  }
}

module.exports = { getAll, addOne };