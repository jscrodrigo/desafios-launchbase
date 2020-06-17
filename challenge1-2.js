const company = {
  name: "Cross Systems",
  color: "blue",
  segment: "Technology and software development",
  addres: {
    streetName: "Ambar street",
    number: 23
  }
};
 console.log(`The company ${company.name} is located in ${company.addres.streetName}, ${company.addres.number}`);

 const dev = {
   name: "Rodrigo Cruz",
   age: 22,
   techs: [
     {
       techName: "C#",
       techApplication: "Desktop"
     },
     {
       techName: "Ruby",
       techApplication: "Web"
     },
     {
       techName: "Python",
       techApplication: "Data Science"
     }
   ]
 }

 console.log(`The user ${dev.name} is ${dev.age} years old and uses ${dev.techs[0].techName}
 apllied in ${dev.techs[0].techApplication}`);