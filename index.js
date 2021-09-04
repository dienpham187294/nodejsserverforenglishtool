
const server = require('http').createServer();
const io = require('socket.io')(server);
const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();
const MD = new mdAPISocket(io)
const fs = require('file-system');
// const fnAdmin = require("./api/admin/admin");
// const fnChess = require("./api/chess/chess");
// const fnSaveFile = require("./api/saveFile/saveFile");
// const fnLogin = require("./api/login/login");
app.use(cors());
app.use(router);


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

server.listen(process.env.PORT || 4444, () => console.log(`Server has started.`));


function mdAPISocket(io) {
    this.io = io
}

mdAPISocket.prototype.WriteFileToDataGame = function (Input) {
    fs.writeFile('./database/DataGame.txt', JSON.stringify(Input))
}
mdAPISocket.prototype.Xuly = async function (Input) {
    if (Input.status === "CreateNew") {
        await fs.readFile('./database/RoomList.txt', 'utf8', (err, jsonFile) => {
            let ArrCreateRoom = [];
            if (!err) {
                try {
                    ArrCreateRoom = JSON.parse(JSON.stringify(arrayRemove(JSON.parse(jsonFile), Input.data.id)).split(`"` + Input.data.id + `",`).join("").split(`,"` + Input.data.id + `"`).join(""));
                } catch (error) {
                    console.log(error)
                }
            }

            ArrCreateRoom.push(
                {
                    "id": Input.data.id,
                    "arrId": [Input.data.id]
                }
            )
            fs.writeFile('./database/RoomList.txt', JSON.stringify(ArrCreateRoom));
            this.io.emit("dataGame", { "status": "CreateRoom", "data": ArrCreateRoom })
        })
    }

    if (Input.status === "JionRoom") {
        await fs.readFile('./database/RoomList.txt', 'utf8', (err, jsonFile) => {
            let ArrCreateRoom = [];
            if (!err) {
                try {
                    ArrCreateRoom = arrayRemove(JSON.parse(jsonFile), Input.data.id);

                    ArrCreateRoom.forEach(e => {
                        if (e.id === Input.data.idR) {
                            let arrR = arrayRemove2(e.arrId, Input.data.id)
                            arrR.push(Input.data.id)
                            e.arrId = arrR
                        }
                    });


                } catch (error) {
                    console.log(error)
                }
            }
            fs.writeFile('./database/RoomList.txt', JSON.stringify(ArrCreateRoom));
            this.io.emit("dataGame", { "status": "CreateRoom", "data": ArrCreateRoom })

        })
    }

    if (Input.status === "chat") {
        console.log(Input)
        this.io.emit("dataGame", { "status": "chat", "data": Input })
    }
}

function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele.id != value;
    });
}

function arrayRemove2(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}