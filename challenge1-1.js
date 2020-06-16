// const name = "Rodrigo";
// const gender = "male";
// const height = 1.72;
// const weight = 89;

// const imc = weight / (height * height);
// //console.log(imc);
// if(imc >=30) {
//   console.log(`${name} You\'re overweight.`);
// } else if (imc < 29.9){
//   console.log(`${name} You\'re not overweight.`)
// }

/*==================================================== */

const name = "Janette";
const sex = "F";
const age = 40;
const paymentTime = 30;

if(sex === "M" && paymentTime >= 35) {
  if ((age+paymentTime)>=95){
    console.log(`${name} You are able to retire!`);
  } else {
    console.log(`${name} You are not able to retire. The sum of your age + paymenTime must be greater than 95 years.
    The current value is: ${age+paymentTime}`);
  }
} else if( sex === "F" && paymentTime >= 30){
  if((age+paymentTime)>=85){
    console.log(`${name} You are able to retire!`);
  } else{
    console.log(`${name} You are not able to retire!The sum of your age + paymenTime must be greater than 85 years.
    The current value is: ${age+paymentTime}`);
  }
} else {
  console.log(`${name} You don\'t fill the conditions to retire.`);
}