const port = process.env.PORT || 4000
const express = require('express')
const cors = require('cors');
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const fs = require('file-system');
const router = require("./router")
app.use(cors());
app.use(router);
let i = 0
io.on('connection', client => {
    i++
    console.log("connect_01", client.id, i)
    io.to(client.id).emit("connect_01", client.id + "_" + i)
    client.on('disconnect', () => {
        console.log("disconnected", client.id)
    });
});
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



