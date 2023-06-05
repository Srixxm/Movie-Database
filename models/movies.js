const mongoose = require('mongoose')
const movieSchema = mongoose.Schema({
    title:{
        type:String,
        unique: true,
        require:true
    },
    year:{
        type:Number,
        require : true,
        minimum:1888,
        maximum:2023
    },
    genre:{
        type:String,
        require : true
    },
    DateOfUpload:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model(`moviesModel`, movieSchema)