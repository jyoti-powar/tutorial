const mongoose = require('mongoose')

const wpSchema = new mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        id:Number,
        title:String,
        desc:String,
        
    }
)

module.exports = mongoose.model('classes',wpSchema)
