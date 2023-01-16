const express = require('express');
const app = express();
const CommentsController = require("../Controllers/CommentController");
const router = express.Router();
commentsController = new CommentsController();

router.post("/add",commentsController.addComment);
router.get("/get/:filmID", commentsController.getComments);
module.exports = router;