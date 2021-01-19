var express = require('express');
var app = express();
var PORT = process.env.PORT || 443;
var Http = require('http').Server(app).listen(PORT);
console.log(PORT)
var socket = require('socket.io')(Http);
// DATA of a USER
var online = 0



// Connection & send/recive DATA
socket.on('connection',user=>{
console.log('connected')
online = online + 1;

user.on("msg",(msg)=>{
user.broadcast.emit("msg",msg)
})
socket.emit("online",online)

user.on('disconnect',()=>{online = online - 1})
})