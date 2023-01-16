const Favoris = require('../Schema/Favoris');

class FavorisController{
    async addToFavorites(req, res){
        try {
            const favoris = new Favoris(req.body);
            await favoris.save();
            res.status(201).json({ message: 'Movie added to favorites', favoris });
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
    }
    async getAllFavMovies(req, res) {
        try {
            const userID = req.params.token;
            const favoris = await Favoris.find({userId : userID});
            res.status(200).json(favoris);
        } catch(err) {
            res.status(500).json({ message: err.message });
        }
    }
};

module.exports = FavorisController;