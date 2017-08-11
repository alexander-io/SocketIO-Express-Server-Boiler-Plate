let express = require('express'), path = require('path'), dependencies = require(__dirname + '/scripts/dependencies.js'), ss = require('socket.io-stream')
let app = express()
let server = require('http').Server(app)
let io = require('socket.io')(server)

server.listen(8080, function(){
  console.log('listening on port 8080')
})

dependencies.requests(app, path)

io.on('connection', function(socket) {
  socket.emit('news', {hello : 'world'})
  socket.on('my other event', function(data) {
    console.log(data);
  })
})
