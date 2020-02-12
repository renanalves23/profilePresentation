const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

/* for styling */
server.use(express.static('public'))
/* for styling */


server.set("view engine", "html")

nunjucks.configure("views", {
  express: server
})

server.get('/', (req, res) => {
  return res.render('about')
})

server.get('/watch', (req, res) => {
  return res.render('watch')
})

server.listen(5000, () => {
  console.log('nodemon server running')
})