var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
      var texts = [
	"BONFIRE RED SAUCE, FRESH WHOLE MILK MOZZARELLA, EXTRA VIRGIN OLIVE OIL, KOSHER SALT, FRESH BASIL.",
	"SPICEY RED SAUCE, HOUSE CHEESE BLEND, SHARP CHEDDAR, SEASONED GUMBO CHICKEN, ANDOUILLE SAUSAGE, GREEN PEPPERS, RED ONION, CHIPOTLE RANCH, FRESH PARSELY",
	"BONFIRE RED SAUCE, FRESH SPINACH, CHEESE BLEND, ITALIAN SAUSAGE, MUSHROOMS, RED ONION, GRATED PARMASEN",
	"CINNAMON, SUGAR, FROSTING",
	"MILK CHOCOLATE, MARSHMELLOW DRIZZLE",
	"NUTELLA, PEACHES, BLUEBERRIES, POWDERED SUGAR, WALNUTS, LEMON ZEST"
	]
	var text = "BONFIRE RED SAUCE, FRESHWHOLE MILK MOZZARELLA, EXTRA VIRGIN OLIVE OIL, KOSHER SALT,FRESH BASIL";
	text = text.toLowerCase();

  res.render('./menu/menu', {
  	title: 'Menu | Bonfire Pizza',
        keywords: 'Custom Artisan Pizzas | Gourmet Salads',
        ingredient_1 : texts[0].toLowerCase(),
  	ingredient_2 : texts[1].toLowerCase(),
  	ingredient_3 : texts[2].toLowerCase(),
  	ingredient_4 : texts[3].toLowerCase(),
  	ingredient_5 : texts[4].toLowerCase(),
  	ingredient_6 : texts[5].toLowerCase()
  });
});

module.exports = router;
