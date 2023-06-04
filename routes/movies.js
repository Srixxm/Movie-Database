const express = require('express')
const {Searchmovies, Uploadmovie, Updatemovie, Deletemovie, getMovies, getMoviebyId} = require('../controllers/movies')
const router = express.Router()

router.route('/').get(Searchmovies).post(Uploadmovie)
router.route('/:id').patch(Updatemovie).delete(Deletemovie).get(getMovies, getMoviebyId)


module.exports = router