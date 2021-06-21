

module.exports = function sortCategoriesForInsert(inputJson) {
    let properJsonOutput = []
    if (Array.isArray(inputJson)) {
        const roots = inputJson.filter(input => !input.parent_id)
        properJsonOutput = properJsonOutput.concat(roots)
        properJsonOutput = properJsonOutput.concat(getChildren(roots, inputJson))


    }
    return properJsonOutput
}

function getChildren(roots, inputJson) {
    let jsonOutput = []
    for (const data of roots) {
        const children = inputJson.filter(input => input.parent_id === data.id).sort((lhs, rhs) => lhs.id - rhs.id)
        jsonOutput = jsonOutput.concat(children)
        jsonOutput = jsonOutput.concat(getChildren(children, inputJson))

    }
    return jsonOutput
}
