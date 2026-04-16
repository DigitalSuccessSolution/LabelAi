const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: true, // Use SSL for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  logger: false, // Disable verbose logging
  debug: false,  // Disable SMTP traffic debugging
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  }
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is ready to take our messages');
  }
});

/**
 * Send Career Application Emails
 */
exports.sendCareerEmails = async (applicationData) => {
  const { fullName, email, phone, jobTitle, experienceYears, resumeUrl, coverLetter, linkedinUrl, portfolioUrl } = applicationData;

  // 1. Send details to Owner
  const ownerMailOptions = {
    from: `"LabelzAI System" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFICATION_EMAIL,
    subject: `New Job Application: ${jobTitle} - ${fullName}`,
    html: `
      <h2>New Job Application Received</h2>
      <p><strong>Candidate Name:</strong> ${fullName}</p>
      <p><strong>Applied For:</strong> ${jobTitle}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Experience:</strong> ${experienceYears}</p>
      <p><strong>LinkedIn:</strong> ${linkedinUrl || 'N/A'}</p>
      <p><strong>Portfolio:</strong> ${portfolioUrl || 'N/A'}</p>
      <p><strong>Resume URL:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>
      <p><strong>Cover Letter:</strong></p>
      <p>${coverLetter || 'No cover letter provided.'}</p>
    `,
  };

  // 2. Send Thank You to User
  const userMailOptions = {
    from: `"LabelzAI Careers" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `Thank you for applying to LabelzAI - ${jobTitle}`,
    html: `
      <h3>Hi ${fullName},</h3>
      <p>Thank you for your interest in the <strong>${jobTitle}</strong> position at LabelzAI.</p>
      <p>We have received your application and resume. Our hiring team will review your profile and get back to you if your qualifications match our requirements.</p>
      <p>Best regards,<br>The LabelzAI Team</p>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(userMailOptions),
    ]);
  } catch (err) {
    console.error('Career email sending failed:', err);
  }
};

/**
 * Send Contact Inquiry Emails
 */
exports.sendContactEmails = async (contactData) => {
  const { firstName, lastName, email, service, message } = contactData;
  const fullName = `${firstName} ${lastName}`;

  // 1. Send details to Owner
  const ownerMailOptions = {
    from: `"LabelzAI System" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFICATION_EMAIL,
    subject: `New Contact Inquiry from ${fullName}`,
    html: `
      <h2>New Contact Inquiry Received</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service Interested In:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  // 2. Send Thank You to User
  const userMailOptions = {
    from: `"LabelzAI Team" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `We've received your message - LabelzAI`,
    html: `
      <h3>Hi ${firstName},</h3>
      <p>Thank you for reaching out to LabelzAI!</p>
      <p>We've received your inquiry regarding <strong>${service}</strong>. One of our specialists will review your message and get back to you within 24-48 hours.</p>
      <p>Best regards,<br>The LabelzAI Team</p>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(userMailOptions),
    ]);
  } catch (err) {
    console.error('Contact email sending failed:', err);
  }
};
