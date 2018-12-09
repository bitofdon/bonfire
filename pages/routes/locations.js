var express = require('express');
var router = express.Router();
var hours = [
	{
		day: 0,
		name: "Sunday",
		open: 11,
		open_pretty: "11am",
		close: 22,
		close_pretty: "10pm"
	},
	{
		day: 1,
		name: "Monday",
		open: 11,
		open_pretty: "11am",
		close: 22,
		close_pretty: "10pm"
	},
	{
		day: 2,
		name: "Tuesday",
		open: 11,
		open_pretty: "11am",
		close: 22,
		close_pretty: "10pm"
	},
	{
		day: 3,
		name: "Wednesday",
		open: 11,
		open_pretty: "11am",
		close: 22,
		close_pretty: "10pm"
	},
	{
		day: 4,
		name: "Thursday",
		open: 11,
		open_pretty: "11am",
		close: 22,
		close_pretty: "10pm"
	},
	{
		day: 5,
		name: "Friday",
		open: 11,
		open_pretty: "11am",
		close: 1,
		close_pretty: "1am"
	},
	{
		day: 6,
		name: "Saturday",
		open: 11,
		open_pretty: "11am",
		close: 1,
		close_pretty: "1am"
	}
];

router.get('/', function(req, res, next) {
	checkHour(function(result, html) {
	  res.render('./locations/locations', {
	  	title: 'Locations | Bonfire Pizza',
	  	keywords: 'Pensacola, Florida',
                time_situation: result,
	  	hours_table_html: html
	  });
	});
});

function checkHour(callback) {
	var time = new Date();
	var hour = time.getHours();
	var min = time.getMinutes();
	var day = time.getDay();
	var open = `
		<div role="contentinfo" aria-label="Status message" class="messages messages--status">
		 OPEN NOW till ${hours[day].close_pretty}
		</div>
	`
	var closed = `
    <div role="contentinfo" aria-label="Status message" class="messages messages--error">
       CLOSED
    </div>
	`;
	var tablehtml = '';
	hours.map( currentDay => {
		if (currentDay.day == day)
			tablehtml += `<tr class="hours-active">`;
		else
			tablehtml += `<tr>`;
		tablehtml += `
				<td>${currentDay.name}</td>
				<td>${currentDay.open_pretty}-${currentDay.close_pretty}</td>
			</tr>
		`;
	});

	if (day == 0) {
		if (hour == 0)
			callback(open, tablehtml);
		else {
			if (parseInt(hour) >= parseInt(hours[day].open) && parseInt(hour) < parseInt(hours[day].close))
				callback(open, tablehtml);
			else
				callback(closed, tablehtml);
		}
	}
	else if (day == 6) {
		if (hour == 0)
			callback(open, tablehtml);
		else {
			if (parseInt(hour) >= parseInt(hours[day].open) && parseInt(hour) < parseInt(hours[day].close)+24)
				callback(open, tablehtml);
			else
				callback(closed, tablehtml);
		}
	}
	else if (day == 5) {
		if (parseInt(hour) >= parseInt(hours[day].open) && parseInt(hour) < parseInt(hours[day].close)+24)
			callback(open, tablehtml);
		else
			callback(closed, tablehtml);
	}
	else {
		if (parseInt(hour) >= parseInt(hours[day].open) && parseInt(hour) < parseInt(hours[day].close))
			callback(open, tablehtml);
		else
			callback(closed, tablehtml);
	}
}

module.exports = router;
