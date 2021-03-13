const validate = require("../../lib/validate")
const largeDiagrams = require("../testDiagrams")


test("Empty String as Input", () => {
    validate.validateDiagram("").then(resp => {
        expect(resp).toBe(false)
    })
})

test("Missing Root Diagram", () => {
    diagram = JSON.parse(largeDiagrams.getMissingRootNode())
    validate.validateDiagram(diagram).then(resp => {
        expect(resp).toBe(false)
    })
})

test("Missing Root Nodes Diagram", () => {
    diagram = JSON.parse(largeDiagrams.getMissingRootNodes())
    validate.validateDiagram(diagram).then(resp => {
        expect(resp).toBe(false)
    })
})

test("Voiceflow Diagram contains unsupported type", () => {
    diagram = JSON.parse(largeDiagrams.getUnsupportedType())
    validate.validateDiagram(diagram).then(resp => {
        expect(resp).toBe(false)
    })
})

test("Interaction block has more than two choices", () => {
    diagram = JSON.parse(largeDiagrams.getMoreThanTwoChoices())
    validate.validateDiagram(diagram).then(resp => {
        expect(resp).toBe(false)
    })
})

test("Interaction block has less than two choices", () => {
    diagram = JSON.parse(largeDiagrams.getLessThanTwoChoices())
    validate.validateDiagram(diagram).then(resp => {
        expect(resp).toBe(false)
    })
})

test("Interaction block with missing ports", () => {
    diagram = JSON.parse(largeDiagrams.getMissingPorts())
    validate.validateDiagram(diagram).then(resp => {
        expect(resp).toBe(false)
    })
})


test("Invalid Diagram as Input", () => {
    diagram = {"project": {"random key": "test"}}
    validate.validateDiagramWithSchema(diagram).then(resp => {
        expect(resp).toBe(false)
    })
})