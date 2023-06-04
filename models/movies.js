const mongoose = require('mongoose')
const movieSchema = mongoose.Schema({
    title:{
        type:String,
        require:true, 
    },
    year:{
        type:String,
        require : true
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