var express = require('express');
var router = express.Router();
const Brevo = require('@getbrevo/brevo');
const SibApiV3Sdk = require('sib-api-v3-sdk');

const defaultClient = SibApiV3Sdk.ApiClient.instance;

var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', async (req, res) => {
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  const sender = {
    email: "anand20031@gmail.com",
    name: "Anand",
  };
  const receivers = [{
    email: req.body.email
  }];
  try {
    const sendEmail = await apiInstance.sendTransacEmail({
      sender,
      to: receivers,
      subject: 'Thanks for Subscribing',
      textContent: `Thanks for Subscribing ${req.body.name}`

    })
    return res.send(sendEmail);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
})

module.exports = router;
