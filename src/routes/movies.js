const Router = require("express");
const { Movie, Person } = require("../db.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
  let moviesDb = await Movie.findAll({
    include: Person
  })
  res.json(moviesDb);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let moviesDb = await Movie.findAll({
      where: {
        id: id
      },
      include: Person
    })
    res.json(moviesDb)
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;