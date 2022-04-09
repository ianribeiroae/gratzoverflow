import passport from "../../lib/passport-google-auth";
import authRouter from "../../middleware/auth";

export default authRouter()
  .get(
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/plus.login",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    })
  );
