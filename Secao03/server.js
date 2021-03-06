const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

/* for styling */
server.use(express.static('public'))
/* for styling */


server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', (req, res) => {
  const about = {
    avatar_url: "https://avatars2.githubusercontent.com/u/53740747?s=460&v=4",
    name: "Renan Alves",
    college: "FIAP",
    role: 'FullStack Developer at<a style="background-color: rgb(0,0,0,0.2) " href="https://www.linkedin.com/in/renan-mendes-b3482a63/" target="_blank"> . . . Hire Me. . .</a>',
    //role: 'FullStack Developer at',
    links: [
      { name: "Github", url: "https://github.com/renanalves23"},
      { name: "Linkedin", url: "https://www.linkedin.com/in/renan-mendes-b3482a63/"}
    ]
  }

  return res.render("about", { about: about })
})

server.get('/watch', (req, res) => {
  return res.render('watch', { items: videos } )
})

server.get('/video', (req, res) => {
  const id = req.query.id;

  const video = videos.find((video) => {
      return video.id == id
  })

  if (!video){
    return res.send("Video not found")
  }

 return res.render("video", { item: video })
})



server.listen(5000, () => {
  console.log('nodemon server running')
})