const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export function sendMail({ email, subject, content }) {
  console.log(email,subject,content)
  const msg = {
    to: 'aungmyomyat874@gmail.com',
    from: email,
    subject: subject,
    text: content,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  return sgMail.send(msg);
}

module.exports = sendMail;
