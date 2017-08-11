let express = require('express'), path = require('path')
let app = express()
let server = require('http').Server(app)
let io = require('socket.io')(server)



server.listen(8080, function(){
  console.log('listening on port 8080')
})

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/' + 'index.html')
})

app.get('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/css/style.css'))
})

app.get('/materialize.min.css', function(req, res) {
  res.sendFile(path.join(__dirname + '/node_modules/materialize-css/dist/css/materialize.min.css'))
})

app.get('/materialize.min.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/node_modules/materialize-css/dist/js/materialize.min.js'))
})

app.get('/jquery.min.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/node_modules/jquery/dist/jquery.min.js'))
})

app.get('/fonts/roboto/Roboto-Regular.woff2', function(req, res) {
  res.sendFile(path.join(__dirname + '/node_modules/materialize-css/dist/fonts/roboto/Roboto-Regular.woff2'))
})

app.get('/fonts/roboto/Roboto-Regular.woff', function(req, res) {
  res.sendFile(path.join(__dirname + '/node_modules/materialize-css/dist/fonts/roboto/Roboto-Regular.woff'))
})

io.on('connection', function(socket) {
  socket.emit('news', {hello : 'world'})
  socket.on('my other event', function(data) {
    console.log(data);
  })
})
