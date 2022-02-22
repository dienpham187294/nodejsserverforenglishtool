function shuffleArr(arr) {
    let n = arr.length

    let output = []


    for (let i = 0; i < n / 2; i++) {

        if (i === n - i - 1) {
            output.push(arr[i])
        } else {
            output.push(arr[i])
            output.push(arr[n - i - 1])
        }


    }

    return output.sort(() => 0.5 - Math.random()).sort(() => 0.5 - Math.random())
}


module.exports = shuffleArr