import { sql_query } from "../../../lib/db";
import sql from "sql-template-strings";

export default async function (req, res) {
  const postId = req?.query?.id;
  if (!postId) res.json({ status: "error", message: "invalid post id" });
  else
    try {
      const result = await sql_query(
        sql`SELECT * FROM posts WHERE id=?`,
        postId
      );
      res.json(result?.[0]);
    } catch (e) {
      res.json({ status: "error", message: e });
    }
}
