const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/_api/package.json',(req, res, next)=> {
    console.log('requested');
    fs.readFile(__dirname + '/package.json', (err, data)=> {
      if(err) return next(err);
      res.type('txt').send(data.toString());
    });
  });
  
router.get('/',(req, res)=> {
		  res.sendFile(process.cwd() + '/views/index.html');
    })


module.exports = router;