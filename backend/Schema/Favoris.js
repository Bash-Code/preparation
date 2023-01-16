const mongoose = require('mongoose');

const favorisSchema = new mongoose.Schema({
    id : Number,
    userId : String,
    title : String,
    original_title : String,
    poster_path : String,
    release_date : String,
    overview: String
});

const FavorisModel = mongoose.model('Favoris', favorisSchema);

module.exports = FavorisModel;