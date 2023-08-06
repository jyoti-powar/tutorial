const express = require('express')
const app = express()
const multer = require('multer')
const mongoose = require('mongoose')

const bodyparser= require('body-parser')
const jsonparser = bodyparser.json()

const cors = require('cors')
app.use(cors())

mongoose.connect('mongodb+srv://jyoti:1234@cluster0.abbyjyt.mongodb.net/Tutorial?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => { console.log('Database Connected') }
)

// // Require the upload middleware
// const upload = require('../uploads');

// // Set up a route for file uploads
// app.post('../uploads', upload.single('file'), (req, res) => {
//   // Handle the uploaded file
//   res.json({ message: 'File uploaded successfully!' });
// });




//Api to get the data
const wp = require("./model/info.js")

app.get('/classes', (req, res) => {
    wp.find({}).then((data) => { res.json(data); })
})

app.post('/savelect', jsonparser, (req, res) => {

    const pr = new wp({
        _id: new mongoose.Types.ObjectId(),
        // id: req.body.id,
        title: req.body.title,
        desc: req.body.desc,
        img:req.body.img

       
        
    })

    pr.save().then(
        (msg) => { res.json(msg) }
    )
})


// delete api

app.delete('/product/:id',(req,res)=>{
    wp.deleteOne({_id:req.params.id}).then((info)=>{res.json(info)}).catch(
        (err)=>{console.log(err)}
    )
})

// update api
app.put('/updatelec/:id',jsonparser,(req,res)=>{
    
    wp.updateOne({_id:req.params.id},
        {$set:{
            // id: req.body.id,
            title: req.body.title,
            desc: req.body.desc,
        }}).then(
            (info)=>{console.log(info); res.json(info)}
        )
})







app.listen(3200, () => { console.log('server running on 3200') })


