const mysql = require('mysql');

var config;
config = {
  mysql_pool : mysql.createPool({
    host: '51.136.56.78',
    user: 'root',
    password: 'my-secret-pw',
    database: 'FoodDb'
  })
}

module.exports = config;