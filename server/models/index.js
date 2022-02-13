const mongoose = require('mongoose');

const connect = async() => {
  console.log('Connecting to database...')
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'recepies'});
    console.log('Connected sucessfully to dabase');
  } catch(e) {
    console.error('Error connecting to database:', e);
  }
}

module.exports = { connect };