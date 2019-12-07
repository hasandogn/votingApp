var express = require('express');
var router = express.Router();

const connection = require('../helper/dbHelper').mysql_pool;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all',  (req, res, next) =>{
  connection.query('SELECT * FROM Vote', (err, result) => {
    res.json({result});
  });
});

router.get('/sql/:id',  (req, res, next) =>{
  connection.query('SELECT * FROM Vote where id= '+req.params.id, (err, result) => {
    res.json({result});
  });
});

router.get('/sql/:id', (req, res, next) =>{
  connection.query('SELECT * FROM')
})

router.get('/sql/:userId',  (req, res, next) =>{
  connection.query('SELECT * FROM Vote where userId= '+req.params.userId, (err, result) => {
    res.json({result});
  });
});


module.exports = router;
