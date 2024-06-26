const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()
const app = express()

app.get('/',(req,res)=>{
    res.send('hii')
})

mongoose.connect(process.env.MONGODB_URL,{})
.then((data)=>{
    console.log('db connected',data);
})
.catch((e)=>{
    console.log('error',e)
})

app.listen(1000, ()=>{
    console.log('running port 1000');
})
