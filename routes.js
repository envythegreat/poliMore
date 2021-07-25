//require express module
const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

router.get('/', (req, res) => {
    res.json({name: 'hello'});
})

router.post('/data', (req, res) => {
  const data = req.body.Data

  const transporter = nodemailer.createTransport({
    port: 25,
    host: 'localhost',
    tls: {
      rejectUnauthorized: false
    },
  });

  var message = {
    from: 'noreply',
    to: 'whatever@otherdomain.com',
    subject: 'My result',
    text: data,
    html: `<p>${data}/p>`,
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });

})

module.exports = router;