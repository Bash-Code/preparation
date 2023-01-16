const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/UserRouter');
const favorisRouter = require('./routes/FavorisRoutes');
const commentsRouter = require('./routes/CommentsRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors("*"));
app.use('/users',userRouter);
app.use('/favoris',favorisRouter);
app.use('/comments',commentsRouter);


mongoose.connect('mongodb://127.0.0.1:27017/MoviesDatabase', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB!")
});

app.listen(3000, () => {
  console.log('Server started on port http://localhost:3000');
});
