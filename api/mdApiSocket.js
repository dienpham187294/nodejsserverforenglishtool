const fs = require('file-system');
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
                    ArrCreateRoom = JSON.parse(JSON.stringify(arrayRemove(JSON.parse(jsonFile), Input.data.id)).split(`"` + Input.data.id + `",`).join("").split(`,"` + Input.data.id + `"`).join(""));

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

    if (Input.status === "StartRoom") {

        console.log(Input)
        await fs.readFile('./database/RoomList.txt', 'utf8', (err, jsonFile) => {
            let ArrCreateRoom = [];
            if (!err) {
                try {
                    ArrCreateRoom = JSON.parse(jsonFile)
                    ArrCreateRoom.forEach(e => {
                        if (e.id === Input.data.id) {
                            e.startAlready = true;
                            e.arrId.forEach(ee => {
                                this.io.to(ee).emit("dataGame", { "status": "StartRoom", "data": e.arrId })
                            })
                        }
                    });
                } catch (error) {
                    console.log(error)
                }
            }
            fs.writeFile('./database/RoomList.txt', JSON.stringify(ArrCreateRoom));
            this.io.emit("dataGame", { "status": "CreateRoom", "data": ArrCreateRoom })
        })

        // this.io.emit("StartRoom", { "status": "StartRoom", "data": Input })
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


module.exports = { mdAPISocket }