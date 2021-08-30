require('dotenv').config();

function getVariable() {
  const variable = process.env.SPREADSHEET_ID;
  console.log(variable);
}

getVariable();

console.log('Running');
