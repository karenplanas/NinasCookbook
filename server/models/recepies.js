const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const recepieSchema = new Schema({
  name: String,
  ingredients: [String],
  steps: [String],
})

const Recepies = model('recepies', recepieSchema, 'recepies');

const getRecepies = async() => {
  try{
    const recepies = await Recepies.find();
    return recepies;
  } catch(e){
    console.error('Error:', e)
  }
}

const addRecepie = async (recepie) => {
  try {
    const r = new Recepies({  
      name: recepie.name,
      ingredients: recepie.ingredients,
      steps: recepie.steps})
    return r.save();

  } catch(e){
    console.error('Error:', e);
    throw e;
  }

}

module.exports = { getRecepies, addRecepie };