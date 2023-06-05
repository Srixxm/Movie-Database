const express = require('express')
const {Searchmovies, Uploadmovie, Updatemovie, Deletemovie, getMovies, getMoviebyId} = require('../controllers/movies')
const router = express.Router()

router.route('/').get(Searchmovies).post(Uploadmovie)
router.route('/:id').patch(getMovies ,Updatemovie).delete(getMovies, Deletemovie).get(getMovies, getMoviebyId)


module.exports = router