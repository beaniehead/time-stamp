const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/_api/package.json',(req, res, next)=> {
    console.log('requested');
    fs.readFile('./package.json', (err, data)=> {
      if(err) return next(err);
      res.type('txt').send(data.toString());
    });
  });
  
router.get('/',(req, res)=> {
		  res.sendFile(process.cwd() + '/views/index.html');
    });

router.get('/time/:time', (req, res) => {
  const enteredTime = req.params.time;
  const date = new Date(req.params.time);
  if (toString.call(date) === "[object Date]") {// it is a date  
    if (isNaN(date.getTime())) {  // d.valueOf() could also work
      // date is not valid
      console.log("not valid");
    }
    else { // date is valid
      res.send(req.params.time);
      console.log("valid");
      return;
    }
  }
  else { // not a date  
    console.log("invalid");
  }
  res.send(req.params.time);
});



router.get('/layout',(req,res)=>{
res.sendFile(process.cwd() + '/views/layout.html');
});
           
module.exports = router;