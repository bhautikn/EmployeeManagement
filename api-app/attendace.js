const mongoose = require('mongoose');

const scema = mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    username:String,
    firstname:String,
    date:Date,
    userId:mongoose.Types.ObjectId,
    present:Boolean
})

module.exports = mongoose.model('attandace', scema);