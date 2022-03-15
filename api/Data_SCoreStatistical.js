const fs = require('file-system');

let i_DATA_ScoreStatistical = SUB_ReadScoreStatistical()

module.exports = i_DATA_ScoreStatistical

async function SUB_ReadScoreStatistical() {
    await fs.readFile('./database/DATA_ScoreStatistical.txt', 'utf8', (err, jsonFile) => {
        if (!err) {
            try {
                return JSON.parse(jsonFile)
            } catch (error) {
                console.log(error)
                return []
            }
        }
    })
}

