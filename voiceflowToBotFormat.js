/**
 * Returns all the nodes found under the root diagram id.
 * 
 * @param {Object} diagram 
 * 
 * @returns {Object} - all nodes.
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
 * @param {Object} diagram - Voiceflow diagram.
 */
async function voiceflowToBotFormat(diagram){
    var botFormat = {"project": {"nodes": {}}}
    botFormat["project"]["name"] = diagram["project"]["name"] 
    
    var nodes = await readNodes(diagram)

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

export default {voiceflowToBotFormat}