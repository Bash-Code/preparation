const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    id : Number,
    comment : String,
    userId : String,
    filmID : String,
});

const commentModel = mongoose.model('Comments', commentSchema);
module.exports = commentModel;
