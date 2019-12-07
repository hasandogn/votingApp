var express = require('express');
var router = express.Router();

const connection = require('../helper/dbHelper').mysql_pool;

/* GET comments listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/sql/:id', (req, res, next) =>{
  connection.query('SELECT * FROM Comment where id = '+req.params.id, (err, result) => {
    res.json({result});
  });
});
router.get('/all',  (req, res, next) =>{
  connection.query('SELECT * FROM Comment', (err, result) => {
    res.json({result});
  });
});

router.get('/:id/food', (req, res, next) =>{
  connection.query('SELECT * FROM Comment WHERE Comment.foodId= '+req.params.id, (err, result) => {
    res.json({result});
  });
});
router.get('/:id/user', (req, res, next) =>{
  connection.query('SELECT * FROM Comment WHERE Comment.userId= '+req.params.id, (err, result) => {
    res.json({result});
  });
});
router.get('/:id/rank', (req, res, next) =>{
  connection.query('SELECT * FROM Comment WHERE Comment.rank= '+req.params.id, (err, result) => {
    res.json({result});
  });
});
//ranka göre hepsini sıralama
router.get('/rankall', (req, res, next) =>{
  connection.query('SELECT* FROM `Comment` order by rank DESC ', (err, result) => {
    res.json({result});
  });
});
//en iyi 5 rank
router.get('/ranktop', (req, res, next) =>{
  connection.query('SELECT* FROM `Comment` order by rank DESC LIMIT 5 ', (err, result) => {
    res.json({result});
  });
});

module.exports = router;
