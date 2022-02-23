const router = require('express').Router();

const Movie = require('../models/Movie.model.js')

// GET route to retrieve and display all the books
router.get('/', (req, res) => {
    Movie.find()
    .then(allTheMoviesFromDB => {
        // res.send(allTheMoviesFromDB);
          // -> allTheMoviesFromDB is a placeholder, it can be any word
      console.log('Retrieved movies from DB:', allTheMoviesFromDB);
 
      // we call the render method after we obtain the movies data from the database -> allTheMoviesFromDB
      res.render('movies/movies-list.hbs', { movies: allTheMoviesFromDB }); // pass `allTheMoviesFromDB` to the view (as a variable books to be used in the HBS)
    })
    .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
    
    });

})

router.get('/:movieId', (req, res) => {
    const {movieId} = req.params;

    Movie.findById(movieId)
    .then(theMovie => {
        console.log(theMovie)
        res.render('movies/movie-details.hbs', {movie: theMovie})
    })
    .catch(error => {
        console.log('Error while retrieving movie details: ', error);
    })
})



module.exports = router;