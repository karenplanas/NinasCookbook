const mongoose = require('mongoose');

const connect = async() => {
  console.log('Connecting to database...')
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'ninas-recipes'});
    console.log('Connected sucessfully to database');
  } catch(e) {
    console.error('Error connecting to database:', e);
  }
}

module.exports = { connect };