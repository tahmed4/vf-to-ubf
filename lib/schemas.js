/**
 * Contains all JSON schemas used to verify Voiceflow diagram
 */

/**
 * General Voiceflow Structure JSON Schema
 */
function getVFSchema(){
    return `{
      "$schema":"http://json-schema.org/schema#",
      "type":"object",
      "properties":{
         "project":{
            "type":"object",
            "properties":{
               "_id":{
                  "type":"string"
               },
               "name":{
                  "type":"string"
               },
               "creatorID":{
                  "type":"integer"
               },
               "teamID":{
                  "type":"string"
               },
               "platformData":{
                  "type":"object"
               },
               "members":{
                  "type":"array"
               },
               "devVersion":{
                  "type":"string"
               },
               "privacy":{
                  "type":"string"
               },
               "platform":{
                  "type":"string"
               }
            },
            "required":[
               "_id",
               "creatorID",
               "devVersion",
               "members",
               "name",
               "platform",
               "platformData",
               "privacy",
               "teamID"
            ],
        "additionalProperties": false
         },
         "version":{
            "type":"object",
            "properties":{
               "_id":{
                  "type":"string"
               },
               "projectID":{
                  "type":"string"
               },
               "creatorID":{
                  "type":"integer"
               },
               "name":{
                  "type":"string"
               },
               "variables":{
                  "type":"array",
                  "items":{
                     "type":"string"
                  }
               },
               "platformData":{
                  "type":"object"
               },
               "prototype":{
                 "type": "object"
               },
               "rootDiagramID":{
                  "type":"string"
               }
            },
            "required":[
               "_id",
               "creatorID",
               "name",
               "platformData",
               "projectID",
               "rootDiagramID",
               "variables"
            ],
        "additionalProperties": false
         },
         "diagrams":{
            "type":"object"
         }
      },
      "required":[
         "diagrams",
         "project",
         "version"
      ],
      "additionalProperties": false
    }`
}

/**
 * JSON Schema for type "block" node
 */
function getBlockSchema(){
    return `{
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "nodeID": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": ["block"]
          },
          "coords": {
            "type": "array",
            "items": [
              {
                "type": "number"
              },
              {
                "type": "number"
              }
            ]
          },
          "data": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "color": {
                "type": "string"
              },
              "steps": {
                "type": "array",
                "items": [
                  {
                    "type": "string"
                  }
                ]
              }
            },
            "required": [
              "name",
              "color",
              "steps"
            ],
            "additionalProperties": false
          }
        },
        "required": [
          "nodeID",
          "type",
          "coords",
          "data"
        ],
        "additionalProperties": false
      }`
}

/**
 * JSON Schema for type "command" node
 */
function getCommandSchema(){
    return `{
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "nodeID": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": ["command"]
          },
          "data": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "intent": {
                "type": "string"
              },
              "diagramID": {
                "type": "string"
              },
              "mappings": {
                "type": "array",
                "items": {}
              },
              "next": {
                "type": "null"
              },
              "ports": {
                "type": "array",
                "items": {}
              }
            },
            "required": [
              "name",
              "intent",
              "diagramID",
              "mappings",
              "next",
              "ports"
            ],
            "additionalProperties": false
          }
        },
        "required": [
          "nodeID",
          "type",
          "data"
        ],
        "additionalProperties": false
      }`
}

/**
 * JSON Schema for type "speak" node
 */
function getSpeakSchema(){
    return `{
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "nodeID": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": ["speak"]
          },
          "data": {
            "type": "object",
            "properties": {
              "randomize": {
                "type": "boolean"
              },
              "dialogs": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "voice": {
                        "type": "string"
                      },
                      "content": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "voice",
                      "content"
                    ],
                    "additionalProperties": false
                  }
                ]
              },
              "ports": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "string"
                      },
                      "target": {
                        "type": ["string","null"]
                      },
                      "id": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "type",
                      "target",
                      "id"
                    ],
                    "additionalProperties": false
                  }
                ]
              }
            },
            "required": [
              "randomize",
              "dialogs",
              "ports"
            ],
            "additionalProperties": false
          }
        },
        "required": [
          "nodeID",
          "type",
          "data"
        ],
        "additionalProperties": false
      }`
}

/**
 * JSON Schema for type "interaction" node
 */
function getChoiceSchema(){
    return `{
      "$schema": "http://json-schema.org/draft-04/schema#",
      "type": "object",
      "properties": {
        "nodeID": {
          "type": "string"
        },
        "type": {
          "type": "string",
          "enum": [
            "interaction"
          ]
        },
        "data": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "else": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string"
                },
                "randomize": {
                  "type": "boolean"
                },
                "reprompts": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "voice": {
                          "type": "string"
                        },
                        "content": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "voice",
                        "content"
                      ]
                    }
                  ]
                }
              },
              "required": [
                "type",
                "randomize",
                "reprompts"
              ]
            },
            "choices": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "intent": {
                      "type": "string"
                    },
                    "mappings": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "intent",
                    "mappings"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "intent": {
                      "type": "string"
                    },
                    "mappings": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "intent",
                    "mappings"
                  ]
                }
              ]
            },
            "reprompt": {
              "type": "null"
            },
            "ports": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": [
                        "null",
                        "string"
                      ],
                      "enum": [
                        "else"
                      ]
                    },
                    "target": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "id": {
                      "type": [
                        "null",
                        "string"
                      ]
                    }
                  },
                  "required": [
                    "type",
                    "target",
                    "id"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": [
                        "null",
                        "string"
                      ],
                      "enum": [
                        "1"
                      ]
                    },
                    "target": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "id": {
                      "type": [
                        "null",
                        "string"
                      ]
                    }
                  },
                  "required": [
                    "type",
                    "target",
                    "id"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": [
                        "null",
                        "string"
                      ],
                      "enum": [
                        "2"
                      ]
                    },
                    "target": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "id": {
                      "type": [
                        "null",
                        "string"
                      ]
                    }
                  },
                  "required": [
                    "type",
                    "target",
                    "id"
                  ]
                }
              ],
              "minItems": 3,
              "maxItems": 3,
              "uniqueItems": true
            }
          },
          "required": [
            "name",
            "else",
            "choices",
            "reprompt",
            "ports"
          ]
        }
      },
      "required": [
        "nodeID",
        "type",
        "data"
      ]
    }`
}

/**
 * JSON Schema for type "start" node
 */
function getStartSchema(){
    return `{
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "nodeID": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": ["start"]
          },
          "coords": {
            "type": "array",
            "items": [
              {
                "type": "number"
              },
              {
                "type": "number"
              }
            ]
          },
          "data": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "color": {
                "type": "string"
              },
              "ports": {
                "type": "array"
              },
              "steps": {
                "type": "array"
              }
            },
            "required": [
              "name",
              "color",
              "ports",
              "steps"
            ],
            "additionalProperties": false
          }
        },
        "required": [
          "nodeID",
          "type",
          "coords",
          "data"
        ],
        "additionalProperties": false
      }`
}

module.exports = {getVFSchema, getBlockSchema, getCommandSchema, getSpeakSchema, getChoiceSchema, getStartSchema}