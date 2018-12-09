var express = require('express');
var router = express.Router();

/* needed for Heroku */
app.set('port', (process.env.PORT || 5000));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { 
      title: 'Home | Bonfire Pizza',
      keywords: 'Custom Artisan Pizzas',
      slider_title: 'Cloud based ordering system blended with your style',
      slider_paragraph: 'Blah blah blah',
      product1_title: 'Online Ordering System',
      product1_message: 'Speed up your business process. Let the hassle of writing down orders, entering payment info, and explaining tickets to your chefs, be automated by our hosted, cloud environment.',
      product2_title: 'Admin Tool',
      product2_message: 'You have full flexibility with your system. Add specials, make menu changes, track and view the statuses of your orders',
      product3_title: 'Realtime Analytics',
      product3_message: 'You have full flexibility with your system. Add specials, make menu changes, track and view the statuses of your orders',
      marketing_blurb: 'Digitalize your inventory and blah blah blah processes, cloud, cloud, boom',
      marketing2_blurb: 'Our system seamlessly integrates with your business workflow',
      ordering_message: 'Your chefs can respond quickly to orders through our provided tablet. They can even see orders on their smart-phones. Chefs can also be granted the ability to edit your menu.'
  });
});


module.exports = router;

