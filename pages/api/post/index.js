import { sql_query } from "../../../lib/db";
import sql from "sql-template-strings";

export default async function (req, res) {
  const page = parseInt(req?.query?.page) || 0;
  const limit = parseInt(req?.query?.limit) || 6;
  const skip = page * limit;
  try {
    const result = await sql_query(
      sql`SELECT * FROM posts ORDER BY createdAt DESC LIMIT ?,?`,
      [skip, limit]
    );
    res.json(result);
  } catch (e) {
    res.json({ status: "error", message: e });
  }
}
