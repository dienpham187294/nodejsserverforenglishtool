// const googleDictionaryApi = require("google-dictionary-api")
// let n = 0
// loopAA(ARR, n)


function GetLongest(Str) {
    try {
        let arr = Str.split(" ");

        if (arr.length === 1) {
            return arr[0]
        }
        let res = "";
        arr.forEach(e => {
            if (e.length > res.length) {
                res = e;
            }
        });
        return res
    } catch (error) {
        return "1234"
    }

}

function loopAA(WORD, n) {
    if (WORD[n].meanGoogle !== null) {
        n++
        loopAA(WORD, n)
    }
    else {
        googleDictionaryApi.search(GetLongest(WORD[n].word), 'en')
            .then(results => {
                console.log(n)
                ARR[n].meanGoogle = results
                fs.writeFile('./database/Words3000.txt', JSON.stringify(ARR));
                if (n === WORD.length - 1) {

                } else {
                    n++
                    loopAA(WORD, n)
                }

            })
            .catch(error => {
                console.log(n)
                ARR[n].meanGoogle = null
                fs.writeFile('./database/Words3000.txt', JSON.stringify(ARR));
                if (n === WORD.length - 1) {

                } else {
                    n++
                    loopAA(WORD, n)
                }
            })
    }

}