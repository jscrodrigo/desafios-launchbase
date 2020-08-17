const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const myServer = express();

myServer.use(express.urlencoded({extended: true}))
myServer.use(express.static('public'));
myServer.use(routes);

myServer.set('view engine', 'njk');

nunjucks.configure('views', {
  express: myServer,
  autoescape: false,
  noCache: true
});

myServer.listen(1337, function(){
  console.log('The server is online...')
});