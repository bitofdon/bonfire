var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./about_us/about_us', {
        title: 'About Us | Bonfire Pizza',
        keywords: 'Fire Fam'
  });
});


module.exports = router;
