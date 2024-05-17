const mongoose = require('mongoose')

const connectDb = mongoose.connect('mongodb://127.0.0.1:27017/superior')
.then(()=>console.log('mongodb connected'))
.catch((e)=>console.log('eror while connecting db',e))

module.exports = connectDb
