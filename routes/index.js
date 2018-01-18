const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/_api/package.json', (req, res, next) => {
  console.log('requested');
  fs.readFile('./package.json', (err, data) => {
    if (err) return next(err);
    res.type('txt').send(data.toString());
  });
});
router.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});
router.get('/time/:time', (req, res) => {
  var response;
  const enteredTime = req.params.time;
  console.log(typeof enteredTime);

  const date = new Date(enteredTime);
  console.log(date);
      if (isNaN(date.getTime())) { // d.valueOf() could also work
      // date is not valid
      response = `${enteredTime} is not valid.`;
    } else { // date is valid
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      const unix = date.getTime() / 1000;
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      const day = `0${date.getDate()}`.slice(-2);
      const natural = `${month} ${day}, ${year}`;
      response = {
        unix,
        natural
      }
    }
  
  res.send(response);
});

module.exports = router;
