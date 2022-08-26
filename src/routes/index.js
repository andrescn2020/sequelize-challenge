const { Router } = require('express');
const persons = require('./persons.js');
const movies = require('./movies.js');

const router = Router();

router.use("/persons", persons);

router.use("/movies", movies);

module.exports = router;
