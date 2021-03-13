const largeDiagrams = require("../testDiagrams")
const rewire = require("rewire")

const vftoubf = rewire("../../voiceflowToBotFormat")

const read = vftoubf.__get__("readNodes")
const nextSpeakNode = vftoubf.__get__("nextSpeakNode")

test("Check if right root diagram node is returned", () => {
    diagram = JSON.parse(largeDiagrams.getValidDiagram())
    resp = read(diagram)
    expect(resp).toEqual(JSON.parse(largeDiagrams.validRootDiagram()))
})

test("Check Speak to interaction to Speak", async () => {
    nodes = JSON.parse(largeDiagrams.validRootDiagram())
    resp = await nextSpeakNode("6047b8ab9bdc55674868041b",nodes)
    expect(resp).toBe("6047b78c9bdc556748680285")
})

test("Check Speak to Speak", async () => {
    nodes = JSON.parse(largeDiagrams.validRootDiagram())
    resp = await nextSpeakNode("6047b7ac9bdc556748680293",nodes)
    expect(resp).toBe(null)
})


