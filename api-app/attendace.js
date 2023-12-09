const mongoose = require('mongoose');

const scema = mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    username:String,
    date:Date,
    present:Boolean
})

module.exports = mongoose.model('attandace', scema);