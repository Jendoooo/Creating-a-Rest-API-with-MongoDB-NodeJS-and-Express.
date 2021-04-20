const express = require("express")
const mongoose = require("mongoose")
const app = express()
port = process.env.PORT || 41999
// app.set('port', process.env.PORT || 41999);
// const port = 41999
// const url = "mongodb://localhost:27017/GTCdb" //specifiying the default url and db

// change the above to online route

const url = "mongodb+srv://Jendo:drowssap2@jscluster.oc6tl.mongodb.net/GTCDb?retryWrites=true&w=majority"

// connecting to mongo database 
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
const connection = mongoose.connection  

connection.on("open", () =>{
    console.log("Connected successfully")
})

// telling express we want to run json
app.use(express.json())

// since we want this to reference the template router we have;
const templateRouter = require("./routes/controller")
app.use("/", templateRouter) // we are literally saying for all the template request , you have 
// to use the template router 


app.listen(port, ()=>{
    console.log(`You are listening at port ${port}`)
})

