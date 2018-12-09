var express = require('express');
var router = express.Router();
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});


router.get('/', function(req, res, next) {
    res.render('./contact_us/contact_us', {
      title: 'Get In Touch | ByteSize Orders',
      keywords: 'Online Ordering System | Restaurant Ordering | Digital Marketing'
    });

});

router.post('/email', function (req, res) {
  console.log(req.body)
  //res.send('POST request to the homepage')
  // Create sendEmail params 
  var params = {
    Destination: { /* required */
      CcAddresses: [
      'zano@bytesizeorders.com',
      /* more items */
      ],
      ToAddresses: [
      'zano@bytesizeorders.com,',
      /* more items */
    ]
  },
    Message: { /* required */
      Body: { /* required */
        Html: {
          Charset: "UTF-8",
          Data: "HTML_FORMAT_BODY"
        },
        Text: {
          Charset: "UTF-8",
          Data: req.body.stringify()
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Contact Form'
      }
    },
    Source: 'zano@bytesizeorders.com', /* required */
      ReplyToAddresses: [
        'zano@bytesizeorders.com',
        /* more items */
      ],
    };       

    // Create the promise and SES service object
    var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
    console.log('before send')
    // Handle promise's fulfilled/rejected states
    sendPromise.then(
      function(data) {
        console.log('hey')
        console.log(data.MessageId);
        res.send(data)
      }).catch(
        function(err) {
          console.log('err')
          console.error(err, err.stack);
          res.send(err)
        });

});

module.exports = router;
