var express = require('express');
var router = express.Router();

const connection = require('../helper/dbHelper').mysql_pool;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/user/:id', (req, res, next) => {
  connection.query('UPDATE users SET userName='+req.body.userName
  +', password = '+req.body.password
  +', email='+req.body.email
  +', photo='+req.body.photo,(err, result) => {
    res.json({result});
  })
});

router.get('/all',  (req, res, next) =>{
  connection.query('SELECT * FROM User', (err, result) => {
    res.json({result});
  });
});

router.get('/sql/:id',  (req, res, next) =>{
  connection.query('SELECT * FROM User where id= '+req.params.id, (err, result) => {
    res.json({result});
  });
});

router.get('/sql/:name',  (req, res, next) =>{
  connection.query('SELECT * FROM User where name= '+req.params.name, (err, result) => {
    res.json({result});
  });
});

router.get('/sql/:id',  (req, res, next) =>{
  connection.query('SELECT * FROM User where id= '+req.params.id, (err, result) => {
    res.json({result});
  });
});

//user status in ratings
router.get('sql/:id', (req, res, next) =>{
  connection.query('SELECT i.title, i.startDate FROM Idea i INNER JOIN Option o ON o.ideaId = i.id INNER JOIN Vote v ON v.optionId = o.id INNER JOIN User u ON v.userId = CASE WHEN u.id THEN "OYLANDI" ELSE null END',(err, result) => {
    res.json({result});
  });
})

//create an endpoint to add the data
router.post('/user', (req, res, next) => {
  collection.insert(req.body, (err, result) => {
      if(err) {
          return res.status(500).send(err);
      }
      res.send(result.result);
  });
});




module.exports = router;

