const teachersData = require('../data.json');
const fs = require('fs');

exports.post = function(req, res){
  const valueKeys = Object.keys(req.body);
  for(key of valueKeys){
    if(req.body[key] == "") {
      return res.send(`The ${key} field is missing! Please complete all the fields...`)
    }
  }

  let{image, name, birth__date, education__level, course__mode, subjects} = req.body;
  birth__date = Date.parse(birth__date);

  const id = Number(teachersData.teachers.length + 1);
  const registerDate = Date.now();

  teachersData.teachers.push(
    {
      id,
      image,
      name,
      birth__date,
      education__level,
      course__mode,
      subjects,
      registerDate
    }
  );

  fs.writeFile("data.json", JSON.stringify(teachersData, null, 2), function(err){
    if(err){
      return res.send(`Error during the creation of data file. Error: ${err}`)
    } 
    return res.redirect('/teachers')
  })
}