import { OAuth2Strategy } from "passport-google-oauth";
import passport from "passport";

passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (_accessToken, _refreshToken, profile, cb) => {
      const { email } = profile._json;
      try {
        return cb(null, email);
      } catch (e) {
        throw new Error(e);
      }
    }
  )
);

passport.serializeUser((data, cb) => {
  cb(null, data);
});

passport.deserializeUser((data, cb) => {
  cb(null, data);
});

export default passport;
