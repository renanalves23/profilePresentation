const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.set('view-engine', "html")

nunjucks.configure('views', {
  express:server
})

server.get('/', (req, res) => {
   return res.render('index')
})

server.listen(5000, () => {
  console.log('nodemon server running')
})