const mongoose = require('mongoose');

const scema = mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    leave:Number,
    username:String,
    password:String,
    firstname:String,
    middlename:String,
    lastname:String,
    mobileno:String,
    experience:Number,
    email:String,
    maritalstatus:String,
    address:String,
    salary:Number,
    language:String,
    age:Number,
    bloodgroup:String,
    hobby:String,
    dob:Date,
    gender:String,
    pr10:Number,
    pr12:Number,
    degree:String,
    contry:String,
    weight:Number,
    height:Number,
    dept:String,
})

module.exports = mongoose.model('employee', scema);