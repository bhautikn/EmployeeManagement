const app = require('express')();
const mongoose = require('mongoose');
const User = require('./user.js');
var cors = require('cors')
const bodyparser = require('body-parser');
const user = require('./user.js');

const uri = 'mongodb+srv://bhautik:bhautik@cluster0.eutrnxk.mongodb.net/Employee?retryWrites=true&w=majority';
mongoose.connect(uri).then(()=>{
    console.log('database connected');
})

app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());
app.use('/admin', (req,res)=>{
    console.log(req.headers.cookie);
})
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
    // const data = await User.findOne({username:username})
    const data = await User.findOne({$and:[{username:username}, {password:password}]})
    if(data){
        res.json({login:true, isAdmin:data.isadmin, id:data._id});
    }
    else{
        res.json({login:false});
    }
    console.log(data);

})
app.get('/', (req, res)=>{
    res.send("hello")
})
app.listen(3000, ()=>{
    console.log('server started on', 3000);
})