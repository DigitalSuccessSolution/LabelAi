const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  logger: true,
  debug: true,
  tls: {
    rejectUnauthorized: false
  }
});

console.log('Testing SMTP with:', {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER
});

transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.NOTIFICATION_EMAIL,
  subject: 'Test Email',
  text: 'If you receive this, the SMTP config is correct.'
}, (err, info) => {
  if (err) {
    console.error('Test Email Failed:', err);
  } else {
    console.log('Test Email Sent:', info.response);
  }
});
