const app = require('express')();
const mongoose = require('mongoose');
const User = require('./user.js');
var cors = require('cors')
const bodyparser = require('body-parser');
const user = require('./user.js');
const Employee = require('./employee.js');
const Attandace = require('./attendace.js');

const uri = 'mongodb+srv://bhautik:bhautik@cluster0.eutrnxk.mongodb.net/Employee?retryWrites=true&w=majority';
mongoose.connect(uri).then(()=>{
    console.log('database connected');
})
// start middleware
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());
app.use('/admin', (req,res, next)=>{
    const coockies = req.headers.coockie;
    console.log(coockies);
    console.log(getCookie('_isAdmin', coockies)==='true');
    if(getCookie('_isAdmin', coockies) === 'true'){
        next()
    }
    else{
        res.json({error:'somthing went wrong'});
    }
})

// end middleware

////////////// attandance module //////////////
app.get('/admin/attandance',async (req,res)=>{
    let data = await Employee.find({}, {firstname:1, middlename:1, lastname:1, _id:0, username:1})
    res.json(data);
})
app.post('/admin/attandance', async (req, res)=>{
    const data = await Attandace.insertMany(req.body);
    res.json({status:'ok'})
})

//////////////////////////////////////////////////////////
// const data = new User({
//     username:'bhautik',
//     password:'bhautik',
//     _id: new mongoose.Types.ObjectId()
// })
// data.save().then(data=>{
//     console.log('data saved', data)
// })

app.post('/UserLogin', async (req, res)=>{
    const username = req.body.UserName;
    const password = req.body.Password;
    const rme = req.body.RMe;
    const data = await User.findOne({$and:[{username:username}, {password:password}]})
    if(data){
        res.json({login:true, isAdmin:data.isadmin, id:data._id});
    }
    else{
        res.json({login:false});
    }

})

////////// server listning ///////////
app.listen(3000, ()=>{
    console.log('server started on', 3000);
})

/////// some extra functions /////////
function getCookie(name, cookie) {
    const value = `; ${cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }