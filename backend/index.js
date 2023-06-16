const express = require('express')
const app = express()
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

//Api to get the data
const wp = require("./model/info.js")

app.get('/classes', (req, res) => {
    wp.find({}).then((data) => { res.json(data); })
})

app.post('/savelect', jsonparser, (req, res) => {

    const pr = new wp({
        _id: new mongoose.Types.ObjectId(),
        id: req.body.id,
        title: req.body.title,
        desc: req.body.desc,

       
        
    })

    pr.save().then(
        (msg) => { res.json(msg) }
    )
})


app.listen(3200, () => { console.log('server running on 3200') })


