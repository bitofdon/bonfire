var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var texts = [
	"BONFIRE RED SAUCE, FRESHWHOLE MILK MOZZARELLA, EXTRA VIRGIN OLIVE OIL, KOSHER SALT,FRESH BASIL",
	"SPICEY RED SAUCE, HOUSE CHEESE BLEND, SHARP CHEDDAR, SEASONED GUMBO CHICKEN, ANDOUILLE SAUSAGE, GREEN PEPPERS, RED ONION, CHIPOTLE RANCH, FRESH PARSELY",
	"BONFIRE RED SAUCE, FRESH SPINACH, CHEESE BLEND, ITALIAN SAUSAGE, MUSHROOMS, RED ONION, GRATED PARMASEN"
	]
	var text = "BONFIRE RED SAUCE, FRESHWHOLE MILK MOZZARELLA, EXTRA VIRGIN OLIVE OIL, KOSHER SALT,FRESH BASIL";
	text = text.toLowerCase();

  res.render('./blog/blog', {
  	title: 'Blog | Bonfire Pizza',
        ingridient_1 : texts[0].toLowerCase(),
  	ingridient_2 : texts[1].toLowerCase(),
  	ingridient_3 : texts[2].toLowerCase()
  });
});

module.exports = router;
