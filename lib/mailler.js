const nodemailer = require("nodemailer");

const mailTransporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  pool: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendMail = async (to = process.env.EMAIL, subject, html) => {
  const mailDetails = {
    from: process.env.ORGANAZATION_NAME || "ROPE",
    to: to,
    subject,
    html,
  };
  try {
    await mailTransporter.sendMail(mailDetails);
  } catch (e) {
    console.error(e);
    return JSON.stringify({ e, error: "catch exception" });
  }
};

export const sendBulkMail = (mailData = [{}], sender) => {
  mailTransporter.on("idle", function () {
    while (mailTransporter.isIdle() && mailData.length) {
      mailTransporter.sendMail(mailData.shift());
      console.count("Sender : " + sender);
    }
  });
};
module.exports = { sendMail, sendBulkMail };
