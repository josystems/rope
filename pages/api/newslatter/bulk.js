const { sendMail, sendBulkMail } = require("../../../lib/mailler");

export default async function (req, res) {
  const title = req?.query?.name;
  const d = {
    to: "yosefworku18@gmail.com",
    from: "yosephworku123@gmail.com",
    subject: "SYNC BULK From " + title,
    text: "Hello this is bulk mail",
  };
  const maillist = Array(25).fill(d, 0, 25);
  await sendBulkMail(maillist, title);
  res.json(title);
}
