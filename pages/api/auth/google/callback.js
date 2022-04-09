import authRouter from "../../../../middleware/auth";
import passport from "../../../../lib/passport-google-auth";

export default authRouter()
  .get(
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      res.redirect("/");
    }
  );
