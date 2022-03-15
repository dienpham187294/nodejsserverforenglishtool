const port = process.env.PORT || 4000
const express = require('express')
const cors = require('cors');
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const fs = require('file-system');
const router = require("./router")
const { mdAPISocket } = require('./api/mdApiSocket');
const MD = new mdAPISocket(io)
// const i_DATA_ScoreStatistical = require("./api/Data_SCoreStatistical")
app.use(cors());
app.use(router);
let i = 0


// console.log(i_DATA_ScoreStatistical)
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://ericpham:ericpham@ericphamdatabase.9ymht.mongodb.net/ericpham?retryWrites=true&w=majority', { useNewUrlParser: true, useNewUrlParser: true, useUnifiedTopology: true });
// var db = mongoose.connection;
// //Bắt sự kiện error
// db.on('error', function (err) {
//     if (err) console.log(err)
// });
// //Bắt sự kiện open
// db.once('open', function () {
//     TEST(db)
//     console.log("Kết nối thành công !");
// });


io.on('connection', client => {
    i++
    console.log("connect_01", client.id, i)
    io.to(client.id).emit("connect_01", client.id + "_" + i)
    client.on('disconnect', () => {
        console.log("disconnected", client.id)
    });

    client.on('emit_RES_Client_FirstTime', (data) => {
        MD.MD_ScoreStatistical_FirstTime(data.id)
    });
    client.on('emit_RES_Client', (data) => {
        MD.MD_W_ScoreStatistical(data)
        io.emit("emit_RES_Server", data)
    });
});
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


