import passport from "../../lib/passport-google-auth";
import nextConnect from "next-connect";
import cookieSession from "cookie-session";
import axios from "axios";

const { GRATZ_URL } = process.env;

export default nextConnect()
  .use(
    cookieSession({
      name: "session",
      keys: ["token"],
    })
  )
  .use(passport.initialize())
  .use(passport.session())
  .get(async (req, res) => {
    const sendbody = {
      message: "Thx!",
      privateMessage: "ooo",
      amount: 1,
      email: "iAn@Ae.sTudio",
    };

    try {
      const result = await axios.post(`${GRATZ_URL}/api/send`, sendbody, {
        headers: {
          "Content-Type": "application/json",
          cookie: req.headers.cookie,
        },
      });
      res.status(200).json(result.data);
    } catch (e) {
      res.status(200).json({ ok: false, error: e.toString() });
    }
  });
