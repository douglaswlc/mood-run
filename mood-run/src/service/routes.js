app.get("/auth/strava", passport.authenticate("oauth2"));

app.get(
  "/auth/callback",
  passport.authenticate("oauth2", { failureRedirect: "/" }),
  (req, res) => {
    // Redirecione ou manipule o sucesso da autenticação.
    res.redirect("/");
  }
);
