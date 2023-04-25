var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vitoria.pires23.03@gmail.com',
    pass: 'Vitoria23!03'
  }
});

var mailOptions = {
  from: 'vitoria.pires23.03@gmail.com',
  to: 'raissaluiz07@gmail.com',
  subject: 'Se não de certo eu choro',
  text: 'That was NOT easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 