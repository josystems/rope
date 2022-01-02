const db = require("../../../lib/db");
const sql = require("sql-template-strings");
export default async function (req, res) {
  const result = await db.sql_query(sql`SELECT * FROM subscription`);
  res.json(result);
}
