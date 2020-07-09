const express = require('express');
const nunjucks = require('nunjucks');
const data = require('./data');

const myServer = express();

myServer.use(express.static('public'))
myServer.set('view engine', 'njk')

nunjucks.configure('views', {
  express:myServer,
  noCache: true,
  autoescape: false
});

myServer.get('/content', function(req, res) {
  return res.render('content', {cards: data})
});


myServer.get('/', function(req, res){
  return res.render('content', {cards: data})
});

myServer.get('/about', function(req, res) {
  return res.render('about')
})

myServer.get('/content/:id', function(req, res) {
  const id = req.params.id;
  const course = data.find(function(course){
    return course.id == id
  })
  if(!course){
    return res.send('Course not found...')
  } 
  return res.render('description', {course: course})
})

myServer.use(function(req, res) {
 res.status(404).render('not-found');
});

myServer.listen(5000, function() {
  console.log('The server is running!')
});