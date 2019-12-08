var express = require('express');
var router = express.Router();

const connection = require('../helper/dbHelper').mysql_pool;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all',  (req, res, next) =>{
  connection.query('SELECT * FROM Idea', (err, result) => {
    res.json({result});
  });
});


router.get('/sql/:id',  (req, res, next) =>{
  connection.query('SELECT * FROM Idea where id= '+req.params.id, (err, result) => {
    res.json({result});
  });
});

router.get('/sql/:starterUserId',  (req, res, next) =>{
    connection.query('SELECT * FROM Idea where starterUserId= '+req.params.starterUserId, (err, result) => {
      res.json({result});
    });
  });


module.exports = router;
