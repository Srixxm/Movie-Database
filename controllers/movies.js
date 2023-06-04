const { json, response, request } = require('express')
const moviesModel = require('../models/movies')

const Searchmovies = async (request, response) => {
    // response.send("This was the list of Movies")
    try{
        const movies = await moviesModel.find()
        response.status(200).json(movies)
    }
    catch(error) {
        response.status(500).json({message: error})
    }
}

const Uploadmovie = async (request, response) => {
    // response.send("this is the uploaded movie")
    const newMovie = new moviesModel({
        title: request.body.title,
        year: request.body.year,
        genre: request.body.genre,
        DateOfUpload: request.body.DateOfUpload
    })
    try{
        const movie = await newMovie.save()
        response.status(200).json(movie)
    }
    catch(error){
        response.status(500).json({message: "couldnt upload movie"})
    }

}

const getMoviebyId = async (request,response) =>  {
    response.status(200).json(response.movie)

}



const Updatemovie = (request , response ) => {
    response.send("updated movie")
}

const Deletemovie = (request, response ) => {
    response.send("delete movies")
}


async function getMovies(request, response, next) {
    let movie 
    try{
        movie = await moviesModel.findById(request.params.id)
        if(movie == null){
            return response.status(404).json({message:"enter a valid id."})
        }
        response.movie = movie 
        next()
    }

    catch(error) {
        return response.status(500).json({message: error})
    }
}


module.exports = {Searchmovies, Uploadmovie, Updatemovie, Deletemovie , getMovies, getMoviebyId}
