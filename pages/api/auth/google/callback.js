import cookieSession from "cookie-session";
import nextConnect from "next-connect";
import passport from "../../../../lib/passport-google-auth";

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
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      res.redirect("/");
    }
  );
