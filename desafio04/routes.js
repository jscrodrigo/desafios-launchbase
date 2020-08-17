const express = require('express');
const teachers = require('./functions/teachers')
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.redirect('/teachers')
});

routes.get('/teachers',  (req, res) => {
 return res.render('teacher/index')
});


routes.get('/teachers/register', (req, res)=>{
 return  res.render('teacher/new-teacher')
});

routes.post('/teachers', teachers.post);

routes.get('/students', (req, res) => {
  return res.render('student/index')
});


module.exports = routes;