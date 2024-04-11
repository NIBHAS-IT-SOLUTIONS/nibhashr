var express=require('express')
var cors=require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const session = require("express-session");
var router=require("./routes/indexRouter")
var connectDB=require('./database')
const app=express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/',router)
connectDB()
app.use(session({ 
    secret: "key",
    saveUninitialized: false,
    resave: false,
    cookie:{maxAge:600000}
}));

 

app.listen(process.env.PORT,()=>{
    console.log(`running @${process.env.PORT} `);
})

module.exports=app