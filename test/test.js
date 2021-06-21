const chai = require('chai')
const mocha = require('mocha')
const expect = chai.expect
const testData = require('../index.js')

const multipleData = [
    {"name": "Accessories", "id": 1, "parent_id": 20},
    {"name": "Watches", "id": 57, "parent_id": 1},
    {"name": "Men", "id": 20, "parent_id": null},
    {"name": "Women", "id": 2, "parent_id": null},
    {"name": "Ethinics", "id": 39, "parent_id": 2},
    {"name": "Saree", "id": 3, "parent_id": 39},
    {"name": "Belts", "id": 4, "parent_id": 1},
    {"name": "Kids", "id": 5, "parent_id": null},
    {"name": "SmartWatches", "id": 6, "parent_id": 57},
    {"name": "Western", "id": 66, "parent_id": 2}
]

const originalProblemData = [
    {"name": "Accessories", "id": 1, "parent_id": 20},
    {"name": "Watches", "id": 57, "parent_id": 1},
    {"name": "Men", "id": 20, "parent_id": null},
]

describe('Test Data', () => {
    it('Test with extended data', () => {

        const outputData = testData(multipleData)

        expect(outputData).to.have.deep.ordered.members([
            {"name": "Men", "id": 20, "parent_id": null},
            {"name": "Women", "id": 2, "parent_id": null},
            {"name": "Kids", "id": 5, "parent_id": null},
            {"name": "Accessories", "id": 1, "parent_id": 20},
            {"name": "Belts", "id": 4, "parent_id": 1},
            {"name": "Watches", "id": 57, "parent_id": 1},
            {"name": "SmartWatches", "id": 6, "parent_id": 57},
            {"name": "Ethinics", "id": 39, "parent_id": 2},
            {"name": "Western", "id": 66, "parent_id": 2},
            {"name": "Saree", "id": 3, "parent_id": 39},
        ])
    })
    it('Test with own data', () => {
        const outputData = testData(originalProblemData)
        expect(outputData).to.have.deep.ordered.members([
            {"name": "Men", "id": 20, "parent_id": null},
            {"name": "Accessories", "id": 1, "parent_id": 20},
            {"name": "Watches", "id": 57, "parent_id": 1},
        ])
    })

    it('When input is not array, it returns the object wrapped in array', () => {
        const outputData = testData({"name": "Men", "id": 20, "parent_id": null})
        expect(outputData).to.have.deep.ordered.members([{"name": "Men", "id": 20, "parent_id": null}])
    })

    it('When primitives, return a blank array', () => {
        const outputData = testData("Blank Array")
        expect(outputData).to.be.empty
    })
})