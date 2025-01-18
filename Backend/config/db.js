const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Nitesh@2005', // use your database password
  database: 'tweets_db', // use your database name
});

module.exports = db;
