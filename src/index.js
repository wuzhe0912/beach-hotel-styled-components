require('dotenv').config();

function getVariable() {
  const envAppVariable = process.env.APP_VARIABLE;
  console.log(envAppVariable);
}

getVariable();

function Hello() {
  console.log('Hello World!');
}

Hello();
