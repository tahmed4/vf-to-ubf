const validate = require("./lib/validate.js")

/**
 * Returns all the nodes found under the root diagram id.
 * 
 * @param {Object} diagram - The Voiceflow (.vf) diagram
 * 
 * @returns {Object} - All nodes found in root diagram.
 */
function readNodes(diagram){
    let root_diagram = diagram["version"]["rootDiagramID"]
    return diagram["diagrams"][root_diagram]["nodes"]
}

/**
 * Takes a node and looks for the next connected
 * speak node from it.
 * 
 * @param {string} node - Current node being checked.
 * @param {Object} allNodes - All root diagram nodes.
 */
async function nextSpeakNode(node, allNodes){
    var nodeInfo = allNodes[node]

    if(nodeInfo["type"] === "start"){
        return nodeInfo["data"]["ports"][0]["target"]
    }

    if(nodeInfo["type"] === "speak"){
        var nextNode = nodeInfo["data"]["ports"][0]["target"]

        if(nextNode === null){
            return null
        }

        var nextNodeInfo = allNodes[nextNode]

        if(nextNodeInfo["type"] === "speak" || nextNodeInfo["type"] === "interaction"){
            return nextNode
        } else if(nextNodeInfo["type"] === "block"){
            return nextNodeInfo["data"]["steps"][0]
        }
    }
    
    if(nodeInfo["type"] === "interaction"){
        var yesPath = nodeInfo["data"]["ports"][1]["target"]
        var yesPathInfo = allNodes[yesPath]

        var output = []
        
        if(yesPathInfo["type"] === "speak"){
            output.unshift(yesPath)
        } else {
            output.unshift(yesPathInfo["data"]["steps"][0])
        }

        var noPath =  nodeInfo["data"]["ports"][2]["target"]
        var noPathInfo = allNodes[noPath]
        
        if(noPathInfo["type"] === "speak"){
            output.push(noPath)
        } else {
            output.push(noPathInfo["data"]["steps"][0])
        }
            
        return output
    }

}

/**
 * Goes through each node from voiceflow diagram
 * and converts it to the unified bot format.
 * 
 * @param {Object} - Voiceflow diagram. `null` on error
 */
async function voiceflowToBotFormat(diagram){
    try{
      if ((await validate.validateDiagram(diagram)) === false){
          return null
      } 

      if ((await validate.validateDiagramWithSchema(diagram)) === false){
          return null
      }
    } catch (e){
      return null
    }

    var botFormat = {"project": {"nodes": {}}}
    botFormat["project"]["name"] = diagram["project"]["name"] 
    
    var nodes = await readNodes(diagram)

    if(Object.keys(nodes).length <= 2){
        return null
    }

    for(var node in nodes){
        var nodeInfo = nodes[node]
        var type = nodeInfo["type"]
        
        if(type === "speak" || type === "start" || type === "interaction"){
            var nextSpeakNodeVal = await nextSpeakNode(node, nodes)
        }
        if(type === "speak"){
            botFormat["project"]["nodes"][node] = {"type": type, "content": nodeInfo["data"]["dialogs"][0]["content"] , "next": nextSpeakNodeVal}
        } else if (type === "start"){
            botFormat["project"]["nodes"][node] = {"type": type, "next": nextSpeakNodeVal}
        } else if (type === "interaction"){
            botFormat["project"]["nodes"][node] = {"type": type, "options":[{"type": "yes", "next":nextSpeakNodeVal[0]}, {"type": "no", "next":nextSpeakNodeVal[1]}]}
        }
    }
    return botFormat
}

module.exports = voiceflowToBotFormat
