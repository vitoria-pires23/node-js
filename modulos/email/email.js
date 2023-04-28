var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vitoria.pires23.03@gmail.com',
    pass: 'czjftdxhfzcdsrov'
  }
});

var mailOptions = {
  from: 'vitoria.pires23.03@gmail.com',
  to: 'raissaluiz07@gmail.com',
  subject: 'S',
  text: 'That was NOT easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 