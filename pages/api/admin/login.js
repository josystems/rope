import { parseBody } from "next/dist/server/api-utils";
import { verifyAuth, setUserCookie } from "../../../lib/auth";
const user = {
  email: "admin@gmail.com",
  password: "admin",
};
export default async function (req, res) {
    const { email, password, remember } = req?.body;
    const token = req.cookies[USER_TOKEN];
  const usera = { email, password };
  if (usera === user) {
    setUserCookie(usera, res);
  } else {
    res
      .status(403)
      .json({ error: { msg: "incorrect user passwored or email ",user,usera,remember } });
  }
}
