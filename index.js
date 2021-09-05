const port = process.env.PORT || 4000
const server = require('http').createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World At ' + port);
});
const io = require('socket.io')(server);
const express = require('express')
const cors = require('cors');
const app = express()

const { mdAPISocket } = require('./api/mdApiSocket');
const MD = new mdAPISocket(io)
app.use(cors());
let i = 0
io.on('connection', client => {
    i++;
    console.log("connected : " + client.id, ':', i);
    io.emit("WELCOME_FROM_SERVER", client.id)
    client.on('Sendata', (data) => {
        MD.Xuly(data)
    });
    client.on('disconnect', () => {


        
        console.log("disconnected", client.id)
    });
});
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})







// const server = require('http').createServer();
// const io = require('socket.io')(server);
// const express = require('express');
// const cors = require('cors');
// // const router = require('./router');
// const app = express();
// const port = process.env.PORT || 4000
// // const MD = new mdAPISocket(io)
// // const fs = require('file-system');
// app.use(cors());
// // app.use(router);

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// let i = 0
// io.on('connection', client => {
//     i++;
//     console.log("connected : " + client.id, ':', i);
//     // io.emit("WELCOME_FROM_SERVER", client.id)
//     // client.on('Sendata', (data) => {
//     //     MD.Xuly(data)
//     // });
//     // client.on('disconnect', () => {
//     //     console.log("disconnected", client.id)
//     // });
// });
// server.listen(port, () => console.log(`Server has started.` + port));

