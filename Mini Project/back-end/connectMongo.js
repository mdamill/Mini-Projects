

// 1.
const mongoose = require('mongoose')

// 2. Define URL
const mongoURL = 'mongodb://localhost:27017/miniProject'

// 3. mongo connection
mongoose.connect(mongoURL)

// 4. maintaining default connection object 
const db = mongoose.connection

// 5. Defining event listeners
db.on('connected', function(){
    console.log(`Connected to MongoDB server`);
})

db.on('error', function(err){
    console.log(`Error : ${err}`);
})

db.on('disconnected', function(){
    console.log(`Disconnected from MongoDB server`);
})

// Last : Exporting
module.exports = db;