exports.requests = function(app, path) {

  app.get('/style.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/css/style.css'))
  })

  app.get('/materialize.min.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/../node_modules/materialize-css/dist/css/materialize.min.css'))
  })

  app.get('/materialize.min.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/../node_modules/materialize-css/dist/js/materialize.min.js'))
  })

  app.get('/jquery.min.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/../node_modules/jquery/dist/jquery.min.js'))
  })

  app.get('/fonts/roboto/Roboto-Regular.woff2', function(req, res) {
    res.sendFile(path.join(__dirname + '/../node_modules/materialize-css/dist/fonts/roboto/Roboto-Regular.woff2'))
  })

  app.get('/fonts/roboto/Roboto-Regular.woff', function(req, res) {
    res.sendFile(path.join(__dirname + '/../node_modules/materialize-css/dist/fonts/roboto/Roboto-Regular.woff'))
  })
}
