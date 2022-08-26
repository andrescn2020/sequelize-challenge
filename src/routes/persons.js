const Router = require("express");
const { Person, Movie } = require("../db.js");

const router = Router();

router.get("/", async (req, res) => {
    try {
    let personsDb = await Person.findAll({
      include: Movie
    })
    res.json(personsDb);
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
    let personsDb = await Person.findAll({
      where: {
        id: id
      },
      include: Movie
    })
    res.json(personsDb);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;