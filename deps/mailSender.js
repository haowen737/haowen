const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.yeah.net',
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'haowen_server@yeah.net', // generated ethereal user
    pass: 'zhw45226802'  // generated ethereal password
  }
});

// setup email data with unicode symbols
let defaultMailOptions = {
  from: '"Cogman" <haowen_server@yeah.net>', // sender address
  to: 'haowen737@gmail.com' // list of receivers
};

// // send mail with defined transport object


function send (mailOptions) {
  transporter.sendMail(Object.assign({}, defaultMailOptions, mailOptions), (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
}

module.exports = send
