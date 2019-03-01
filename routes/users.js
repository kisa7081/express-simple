const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
  res.render('user', {"username":"Dan"});
});

router.get('/:userid', (req, res, next)=>{
  res.end(`user ${req.params.userid} requested`);
});

router.get('/:userid/profile', (req, res, next)=>{
  res.end('/users/profile requested');
});

// then at the bottom of our file, export the router object
module.exports = router;
