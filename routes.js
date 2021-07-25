//require express module
const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

router.get('/', (req, res) => {
    res.json({name: 'hello'});
})

router.post('/data', (req, res) => {
  const data = req.body.data
  console.log(data)
  const transporter = nodemailer.createTransport({
    port: 25,
    host: 'localhost',
    tls: {
      rejectUnauthorized: false
    },
  });
//dd
  var message = {
    from: 'noreply@aramex.com',
    to: 'Zetsubo.yami@yandex.com',
    subject: 'My result',
    text: 'Hello',
    html: `<p>${JSON.stringify(data)}</p>`,
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });

})

module.exports = router;
