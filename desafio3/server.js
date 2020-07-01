const express = require('express')
const nunjucks = require('nunjucks')

const myServer = express();

myServer.use(express.static('public'))

myServer.set('view engine', 'njk')

nunjucks.configure('views', {
  express:myServer
})


myServer.get('/content', function(req, res) {
  return res.render('content')
});

myServer.get('/', function(req, res){
  return res.render('content')
})

myServer.get('/about', function(req, res) {
  return res.render('about')
})

myServer.use(function(req, res) {
  res.status(404).render("not-found");
});

myServer.listen(5000, function() {
  console.log('The server is running!')
})