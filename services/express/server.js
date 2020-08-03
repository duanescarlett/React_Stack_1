const express = require('express')
const bodyParser = require('body-parser')
const socketio = require('socket.io')
const PORT = 3001
const user = require('./routes/user')
const wallet = require('./routes/wallet')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(user)
app.use(wallet)

const sock = app.listen(PORT, function() {
    console.log("Node Server running on PORT:" + PORT)
})

const socketIO = socketio(sock)

socketIO.on('connection', (socket) => {
    console.log('Socket Is Now Open')
})