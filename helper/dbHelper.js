const mysql = require('mysql');

var config;
config = {
  mysql_pool : mysql.createPool({
    host: 'localhost:8080',
    user: 'root',
    password: 'password',
    database: 'VotingApp'
  })
}

module.exports = config;