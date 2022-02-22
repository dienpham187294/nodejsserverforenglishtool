function combineLesson(ArrIn1, ArrIn2) {
    let Output = [
        []
    ]
    let finalN = 0
    ArrIn1.forEach((e, i) => {
        Output[i + 1] = Output[i].concat(e[1].coerdataoflession.slice(0, ArrIn2[i]))
        finalN = i + 1
    });

    return Output[finalN]
}
module.exports = combineLesson 