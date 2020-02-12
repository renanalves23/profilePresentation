const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send({message: "Hello"})
})

server.listen(5000, () => {
  console.log('server running')
})