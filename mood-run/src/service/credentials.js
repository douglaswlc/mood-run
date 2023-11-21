import * as passport from "passport";
import * as OAuth2Strategy from "passport-oauth2";
import App from "../App";

App.get("/auth/strava", passport.authenticate("oauth2"));

App.get(
  "/auth/callback",
  passport.authenticate("oauth2", { failureRedirect: "/" }),
  (req, res) => {
    // Redirecione ou manipule o sucesso da autenticação.
    res.redirect("/");
  }
);

passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: "https://www.strava.com/oauth/authorize",
      tokenURL: "https://www.strava.com/oauth/token",
      clientID: "117131",
      clientSecret: "dee3fac54b2e0024a897ad3a6ce38805a376cc46",
      callbackURL: "http://localhost:3000/auth/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Aqui, você pode salvar os tokens de acesso em seu banco de dados ou realizar outras ações após a autenticação.
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
