const express = require("express")
const source_file = require("../models/template")

const router = express.Router()

const Template = require("../models/template")

// router.get("/", (req, res)=>
// {
//     res.send("Get request")
// })

// we would have used the data above normally, but since we are fetching from a db , we have to use 
// the async request 

// and in anticipation of an error, we use the try and catch method 
// if no error send all the entries from the database 


router.get("/", async(req, res)=>{
    try{
        const source_files = await Template.find()
        res.json(source_files)

    }catch(err){
        res.send("Error" + err)
    }
})

// TO CALL WITH ID
router.get("/:ID", async(req, res)=>{
    try{
        const source_file = await Template.findById(req.params.id)
        res.json(source_file)

    }catch(err){
        res.send("Error" + err)
    }
})

router.post("/", async(req, res) => {
    const source_file = new Template({
        name: req.body.name,
        tech: req.body.tech,
        sub:req.body.sub
    })
    try{
        const a1 = await source_file.save() // save to db
        res.json(a1)
    }catch(err){
        res.send("Error")
    }
})

router.patch("/:id", async(req,res)=>{
    try{
        const source_file = await Template.findById(req.params.id)
        source_file.sub = req.body.sub
        const a1 = await source_file.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.delete("/:id", async(req, res)=>{
    try{
        const source_file = await Template.findByIdAndDelete(req.params.id)
        const a1 = await source_file.remove()
        res.json(a1)
    }catch(err){
        res.send("Error")
    }
})

module.exports = router