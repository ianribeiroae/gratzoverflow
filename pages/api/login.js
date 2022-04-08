import passport from "../../lib/passport-google-auth";
import nextConnect from "next-connect";
import cookieSession from "cookie-session";

export default nextConnect()
  .use(
    cookieSession({
      name: "session",
      keys: ["token"],
    })
  )
  .use(passport.initialize())
  .use(passport.session())
  .get(
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/plus.login",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    })
  );
