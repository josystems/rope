const db = require("../../../lib/db");
const sql = require("sql-template-strings");
export default async function (req, res) {
  const email = req?.query?.email;
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email && emailValidation.test(email)) {
    const result = await db.sql_query(
      sql`INSERT INTO subscription(email) Value(?)`,
      email
    );
    if (result.error) {
      res.status(403).json(result.error);
    } else res.json(result);
  } else {
    res.json({ error: { mesage: "invalid email" } });
  }
}
