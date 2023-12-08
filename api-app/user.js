const {mongoose } = require("mongoose");

const scema = mongoose.Schema({
    username:String,
    password:String,
    isadmin:String,
    _id:mongoose.Types.ObjectId
})

module.exports = mongoose.model('user', scema);