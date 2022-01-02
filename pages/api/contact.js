const { sendMail } = require("../../lib/mailler");
export default async function (req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req?.body;
    if (email && name && message) {
      try {
        await sendMail(
          process.env.EMAIL,
          `@Message from ${name}`,
          `<b>Name : ${name}<br/>Email : ${email}</b><br/><hr/>\n\n\n${message}`
        );
        res.json({ error: null });
      } catch (e) {
        res.status(401).json({ e: e, error: true });
      }
    } else {
      res.status(400).json({ error: "bad data" });
    }
  } else {
    res.status(400).json({ error: "POST method only allowed" });
  }
}
