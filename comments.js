// create web server
const express = require('express');
const app = express();
const port = 3000;
// create comments array
const comments = [
  { name: 'Stevie', comment: 'Wow!'},
  { name: 'Linda', comment: 'Cool!'},
  { name: 'Dan', comment: 'Nice!'}
];
// set view engine
app.set('view engine', 'pug');
// serve static files
app.use(express.static('public'));
// serve comments
app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments });
});
// listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});