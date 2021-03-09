const schemas = require("./schemas.js")
const validate  = require('jsonschema').validate;
/**
 * Performs validation on input diagram checking if types
 * and nodes are supported.
 * 
 * @param {Object} diagram - voiceflow diagram
 * 
 * @returns {boolean} - `true` if passes validation, otherwise `false`
 * 
 */
async function validateDiagram(diagram){
    var supportedBlocks = ["speak", "block", "interaction", "start", "command"]
    var startFound = false

    try{
        var rootDiagram = diagram["version"]["rootDiagramID"]
    } catch(err) {
        return false

    }
    try {
        var nodes = diagram["diagrams"][rootDiagram]["nodes"]
    } catch(err) {
        return false
    }

    for(var node in nodes){
        if(!(supportedBlocks.includes(nodes[node]["type"]))){
            return false
        }

        if(nodes[node]["type"] === "interaction"){
            try{
            if(nodes[node]["data"]["ports"].length > 3){
                return false
            } else if (nodes[node]["data"]["ports"].length < 3){
                return false
            }

            } catch (e) {
                return false
            }
        }
        
        if(nodes[node]["type"] === "start"){
            startFound = true
        }
    }    


    if (!startFound){
        return false
    }

    return true
}

/**
 * Checks against JSON schemas for voiceflow diagram
 * as well as individual nodes to see if diagram is valid.
 * 
 * @param {*} diagram - voiceflow diagram
 * 
 * @returns {boolean} - `true` if diagram is valid, otherwise `false`.
 */
async function validateDiagramWithSchema(diagram){
    let vfSchema = await schemas.getVFSchema();
    vfSchema = JSON.parse(vfSchema)
    var res = validate(diagram, vfSchema);
    if(res.valid === false){
        return false
    }
    
    var nodeSchemas = []
    nodeSchemas.push(await schemas.getSpeakSchema())
    nodeSchemas.push(await schemas.getChoiceSchema())
    nodeSchemas.push(await schemas.getBlockSchema())
    nodeSchemas.push(await schemas.getCommandSchema())
    nodeSchemas.push(await schemas.getStartSchema())
    
    let root_diagram = diagram["version"]["rootDiagramID"]
    var nodes = diagram["diagrams"][root_diagram]["nodes"]

    for(var node in nodes){
        var nodeValid = false
        for(var i in nodeSchemas){
            nodeValid = validate(nodes[node], JSON.parse(nodeSchemas[i])).valid
            if(nodeValid === true){
                break
            }
        }
        if(nodeValid === false){
            return false
        }
    }
    return true
}

module.exports = {validateDiagram, validateDiagramWithSchema}