require('dotenv').config();

function getVariable() {
  const variable = process.env.VARIABLE;
  console.log(variable);
}

getVariable();

console.log('Running');
