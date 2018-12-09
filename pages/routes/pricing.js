var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('./pricing/pricing', {
      title: 'Pricing | ByteSize Orders',
      keywords: 'Online Ordering System | Cloud POS | Digital Marketing | Sales Analytics | Web Development'
    });
});

module.exports = router;

