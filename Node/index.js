const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const  mongoose = require("mongoose"); 
const  SignupController=require('./Controllers/Signup')
const app=express()

app.use(cors())
app.use(bodyparser.json())


mongoose.connect('mongodb://127.0.0.1:27017/Questionpapermanagement').then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('error occured')
})

app.post('/signup',async(req,res)=>{
    SignupController(req,res);
})

app.listen(4000,()=>{
    console.log('listening at port 4000')
})