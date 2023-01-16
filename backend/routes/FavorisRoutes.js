const express = require('express');
const app = express();
const router = express.Router();
const FavorisController = require("../Controllers/FavorisController");
favorisController = new FavorisController();

router.post("/add",favorisController.addToFavorites);
router.get("/get/:token",favorisController.getAllFavMovies);
module.exports = router; 

