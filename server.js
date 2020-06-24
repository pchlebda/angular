app.use(express.static('./dist/angular-heroku'));

app.listen(process.env.PORT || 8080);
