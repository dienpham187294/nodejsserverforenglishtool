function getElementsToDataTable(ArrInput, elementsName, option) {
    let ArrOutput = []

    ArrInput.forEach(e => {
        ArrOutput.push(e[elementsName])
        if (option !== undefined) {
            ArrOutput.push(option)
        }
    });

    return ArrOutput
}
module.exports = getElementsToDataTable 