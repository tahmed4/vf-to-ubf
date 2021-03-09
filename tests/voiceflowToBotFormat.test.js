const convert = require("../voiceflowToBotFormat")
const largeDiagrams = require("./testDiagrams")

test("Empty String as Input", () => {
    convert("").then(resp => {
        expect(resp).toBeNull()
    })
})


test("Undefined Diagram as Input", () => {
    convert(undefined).then(resp => {
        expect(resp).toBeNull()
    })
})

test("Empty Diagram type as Input", () => {
    diagram = {}
    convert(diagram).then(resp => {
        expect(resp).toBeNull()
    })
})

test("Partial Diagram as Input", () => {
    diagram = {"project": {"name": "test"}}
    convert(diagram).then(resp => {
        expect(resp).toBeNull()
    })
})

test("Valid Diagram as Input", () => {
    diagram = JSON.parse(largeDiagrams.getValidDiagram())
    convert(diagram).then(resp => {
        expect(resp).toStrictEqual(JSON.parse(largeDiagrams.getValidDiagramUBF()))
    })
})

test("Valid Diagram with additional nodes as Input", () => {
    diagram = JSON.parse(largeDiagrams.getValidDiagramExtraNodes())
    convert(diagram).then(resp => {
        expect(resp).toStrictEqual(JSON.parse(largeDiagrams.getValidDiagramExtraNodesUBF()))
    })
})

test("Invalid Diagram as Input", () => {
    diagram = {"project": {"random key": "test"}}
    convert(diagram).then(resp => {
        expect(resp).toBeNull()
    })
})


test("Altered Speak to have missing keys", () => {
    diagram = JSON.parse(largeDiagrams.getInvalidSpeak())
    convert(diagram).then(resp => {
        expect(resp).toBeNull()
    })
})


test("Altered Choice to have missing keys", () => {
    diagram = JSON.parse(largeDiagrams.getInvalidChoice())
    convert(diagram).then(resp => {
        expect(resp).toBeNull()
    })
})

test("Altered Start to have missing keys", () => {
    diagram = JSON.parse(largeDiagrams.getInvalidStart())
    convert(diagram).then(resp => {
        expect(resp).toBeNull()
    })
})


