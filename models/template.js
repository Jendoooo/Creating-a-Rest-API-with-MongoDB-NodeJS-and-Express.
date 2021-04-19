// this will have the schema for the database 

const mongoose = require("mongoose")

const stockSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Tag:{
        type: String,
        required: true
    },
    Brand:{
        type: String, 
        required:true,
    }, 
    UnitPrice:{
        type: Number, 
        required :true
    },
    MultPrice:{
        type: Number, 
        required :true
    }
})

module.exports = mongoose.model("stocks", stockSchema)