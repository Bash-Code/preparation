const Comments = require('../Schema/Comments');

class CommentsController{
    async addComment(req, res) {
        try {
            const comment = new Comments(req.body);
            await comment.save();
            res.status(201).json(comment);
        } catch(err) {
            res.status(500).json({ message: err.message });
        }
    }
    async getComments(req, res){
        Comments.find({ filmID: req.params.filmID }, (err, comments) => {
            if (err) {
                res.status(500).json({ message: err.message });
            } else {
                res.json(comments);
            }
        });
    }   
}

module.exports = CommentsController;