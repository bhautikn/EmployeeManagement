const mongoose = require('mongoose');

const scema = mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    firstname:String,
    startdate:Date,
    enddate:Date,
    username:String,
    userId:mongoose.Types.ObjectId,
})

module.exports = mongoose.model('leave', scema);