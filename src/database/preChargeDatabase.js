const { Person, Movie } = require('../../src/db.js');
const personsDb = require("./personsDb.js");
const moviesDb = require("./moviesDb.js");

const preChargeDatabase = async () => {
    try {

        for (let k = 0; k < moviesDb.length; k++) {
            try {
                await Movie.create(moviesDb[k]);
            } catch (error) {
                console.log(error);
            }
        }

        let allMovies = await Movie.findAll();

        for (let i = 0; i < personsDb.length; i++) {
            try {
                let newPerson = await Person.create(personsDb[i]);
                for (let j = 0; j < allMovies.length; j++) {
                    try {
                        if (allMovies[j].casting.includes(`${personsDb[i].name} ${personsDb[i].lastName}`) || allMovies[j].directors.includes(`${personsDb[i].name} ${personsDb[i].lastName}`) || allMovies[j].producers.includes(`${personsDb[i].name} ${personsDb[i].lastName}`)) {
                            await newPerson.addMovies(allMovies[j].id)
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    preChargeDatabase
} 