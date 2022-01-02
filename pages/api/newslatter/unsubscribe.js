const db = require("../../../lib/db");
const sql = require("sql-template-strings");

export default async function (req, res) {
  const email = req?.query?.email;
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const result = await db.sql_query(
    sql`UPDATE subscription SET active = 0 where email=?`,
    email
  );
  res.json(result);
}
