const nodemailer = require("nodemailer");

class EmailHandler {
  email;
  transporter;
  constructor(email, password) {
    this.email = email;
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmlail.com",
      port: 587,
      secure: false,
      auth: {
        user: email,
        pass: password,
      },
    });
  }
  sendEmail(options) {
    const mailOptions = {
      from: this.email,
      to: options.toEmail,
      subject: options.title,
      html: options.html,
    };
    return new Promise((resolve, reject) => {
      this.transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }
}

module.exports = EmailHandler;
