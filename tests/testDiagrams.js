function getValidDiagram(){
    return `{
        "project": {
          "_id": "6047b78770cbad001bef024b",
          "name": "test",
          "teamID": "peEqRl9kDw",
          "devVersion": "6047b787d03e580009e467e3",
          "platform": "alexa",
          "platformData": {
            "products": []
          },
          "members": [],
          "image": "",
          "linkType": "STRAIGHT",
          "creatorID": 45143
        },
        "version": {
          "_id": "6047b787d03e580009e467e3",
          "name": "Initial Version",
          "projectID": "6047b78770cbad001bef024b",
          "variables": [
            "sessions",
            "user_id",
            "timestamp",
            "platform",
            "locale"
          ],
          "platformData": {
            "slots": [],
            "intents": [],
            "settings": {
              "events": null,
              "customInterface": false,
              "session": {
                "type": "restart"
              },
              "repeat": "ALL",
              "accountLinking": null,
              "error": null
            },
            "publishing": {
              "summary": "",
              "invocations": [
                "open test",
                "start test",
                "launch test"
              ],
              "smallIcon": "",
              "largeIcon": "",
              "hasAds": false,
              "personal": false,
              "forExport": true,
              "invocationName": "test",
              "hasPurchase": false,
              "forChildren": false,
              "description": "",
              "instructions": "",
              "privacyPolicy": "",
              "termsAndConditions": "",
              "keywords": "",
              "category": "",
              "locales": [
                "en-US"
              ],
              "updatesDescription": null
            },
            "status": {
              "stage": "DEV"
            }
          },
          "rootDiagramID": "6047b787d03e580009e467e4",
          "creatorID": 45143,
          "prototype": {
            "data": {
              "name": "test",
              "locales": [
                "en-US"
              ]
            },
            "model": {
              "intents": [
                {
                  "key": "VF.NO",
                  "name": "VF.NO",
                  "inputs": [
                    {
                      "text": "no"
                    },
                    {
                      "text": "nope"
                    },
                    {
                      "text": "nay"
                    },
                    {
                      "text": "nah"
                    },
                    {
                      "text": "no way"
                    },
                    {
                      "text": "negative"
                    }
                  ]
                },
                {
                  "key": "VF.YES",
                  "name": "VF.YES",
                  "inputs": [
                    {
                      "text": "yes"
                    },
                    {
                      "text": "yea"
                    },
                    {
                      "text": "ok"
                    },
                    {
                      "text": "okay"
                    },
                    {
                      "text": "yup"
                    },
                    {
                      "text": "ya"
                    },
                    {
                      "text": "sure"
                    }
                  ]
                },
                {
                  "key": "VF.STOP",
                  "name": "VF.STOP",
                  "inputs": [
                    {
                      "text": "stop"
                    }
                  ]
                },
                {
                  "key": "VF.HELP",
                  "name": "VF.HELP",
                  "inputs": [
                    {
                      "text": "help"
                    },
                    {
                      "text": "help me"
                    },
                    {
                      "text": "i need help"
                    }
                  ]
                },
                {
                  "key": "VF.CANCEL",
                  "name": "VF.CANCEL",
                  "inputs": [
                    {
                      "text": "cancel"
                    }
                  ]
                }
              ],
              "slots": []
            },
            "context": {
              "stack": [
                {
                  "storage": {},
                  "variables": {},
                  "programID": "6047b787d03e580009e467e4"
                }
              ]
            },
            "settings": {}
          }
        },
        "diagrams": {
          "6047b787d03e580009e467e4": {
            "_id": "6047b787d03e580009e467e4",
            "name": "ROOT",
            "offsetX": 236.2,
            "offsetY": 91.60000000000002,
            "zoom": 80,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6de": {
                "nodeID": "5f9f562f11b31520c2a2a6de",
                "type": "start",
                "coords": [
                  226.25,
                  106.25
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b8ab9bdc55674868041e",
                      "id": "5fde6fac5bc1c56319fad39b"
                    }
                  ],
                  "steps": [
                    "5f9f562f11b31520c2a2a6df",
                    "5f9f562f11b31520c2a2a6e0",
                    "5fde6fb05bc1c56319fad3a0"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6df": {
                "nodeID": "5f9f562f11b31520c2a2a6df",
                "type": "command",
                "data": {
                  "name": "Help",
                  "intent": "AMAZON.HelpIntent",
                  "diagramID": "6047b787d03e580009e467e6",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e0": {
                "nodeID": "5f9f562f11b31520c2a2a6e0",
                "type": "command",
                "data": {
                  "name": "Stop",
                  "intent": "AMAZON.StopIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5fde6fb05bc1c56319fad3a0": {
                "nodeID": "5fde6fb05bc1c56319fad3a0",
                "type": "command",
                "data": {
                  "name": "Cancel",
                  "intent": "AMAZON.CancelIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "6047b78c9bdc556748680285": {
                "nodeID": "6047b78c9bdc556748680285",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": ""
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "chips": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b78c9bdc556748680287"
                    },
                    {
                      "type": "",
                      "target": "6047b7ac9bdc556748680293",
                      "id": "6047b78c9bdc556748680288"
                    },
                    {
                      "type": 2,
                      "target": "6047b7ae9bdc55674868029d",
                      "id": "6047b7939bdc556748680290"
                    }
                  ]
                }
              },
              "6047b78c9bdc556748680289": {
                "nodeID": "6047b78c9bdc556748680289",
                "type": "block",
                "coords": [
                  1027.25,
                  191.49999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b78c9bdc556748680285"
                  ]
                }
              },
              "6047b7ac9bdc556748680293": {
                "nodeID": "6047b7ac9bdc556748680293",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Yes"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ac9bdc556748680295"
                    }
                  ]
                }
              },
              "6047b7ac9bdc556748680296": {
                "nodeID": "6047b7ac9bdc556748680296",
                "type": "block",
                "coords": [
                  1603.4999999999998,
                  118.99999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ac9bdc556748680293"
                  ]
                }
              },
              "6047b7ae9bdc55674868029d": {
                "nodeID": "6047b7ae9bdc55674868029d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "No"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ae9bdc55674868029f"
                    }
                  ]
                }
              },
              "6047b7ae9bdc5567486802a0": {
                "nodeID": "6047b7ae9bdc5567486802a0",
                "type": "block",
                "coords": [
                  1629.7499999999998,
                  370.24999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ae9bdc55674868029d"
                  ]
                }
              },
              "6047b8ab9bdc55674868041b": {
                "nodeID": "6047b8ab9bdc55674868041b",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Hello"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b78c9bdc556748680285",
                      "id": "6047b8ab9bdc55674868041d"
                    }
                  ]
                }
              },
              "6047b8ab9bdc55674868041e": {
                "nodeID": "6047b8ab9bdc55674868041e",
                "type": "block",
                "coords": [
                  625.9999999999999,
                  220.49999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b8ab9bdc55674868041b"
                  ]
                }
              }
            },
            "children": [
              "6047b787d03e580009e467e6",
              "6047b787d03e580009e467e5"
            ],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615313124
          },
          "6047b787d03e580009e467e6": {
            "_id": "6047b787d03e580009e467e6",
            "name": "Help User",
            "offsetX": 196.5723910133667,
            "offsetY": 143.32399142840148,
            "zoom": 76.41405779564307,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e1": {
                "nodeID": "5f9f562f11b31520c2a2a6e1",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e2",
                      "id": "5fde75904a001a20aa671626"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e2": {
                "nodeID": "5f9f562f11b31520c2a2a6e2",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "You said help. Do you want to continue?"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e4",
                      "id": "5fde75904a001a20aa671627"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e3": {
                "nodeID": "5f9f562f11b31520c2a2a6e3",
                "type": "block",
                "coords": [
                  808.6506721313523,
                  121.24568139701532
                ],
                "data": {
                  "name": "Help Message",
                  "color": "standard",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e2",
                    "5f9f562f11b31520c2a2a6e4"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e4": {
                "nodeID": "5f9f562f11b31520c2a2a6e4",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": "Do you want to continue?"
                      },
                      {
                        "voice": "Alexa",
                        "content": "Please say yes or no."
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671628"
                    },
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671629"
                    },
                    {
                      "type": 2,
                      "target": "5f9f562f11b31520c2a2a6e6",
                      "id": "5fde75904a001a20aa67162a"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e5": {
                "nodeID": "5f9f562f11b31520c2a2a6e5",
                "type": "exit",
                "data": {
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e6": {
                "nodeID": "5f9f562f11b31520c2a2a6e6",
                "type": "block",
                "coords": [
                  1295.0066750587603,
                  408.4923354011805
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5fde75c44a001a20aa67166d",
                    "5f9f562f11b31520c2a2a6e5"
                  ]
                }
              },
              "5fde75c44a001a20aa67166d": {
                "nodeID": "5fde75c44a001a20aa67166d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Bye for now."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e5",
                      "id": "5fde75c44a001a20aa671670"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          },
          "6047b787d03e580009e467e5": {
            "_id": "6047b787d03e580009e467e5",
            "name": "End Session",
            "offsetX": 206.51942553425963,
            "offsetY": 119.61838012311347,
            "zoom": 93.10542690398123,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e7": {
                "nodeID": "5f9f562f11b31520c2a2a6e7",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e8",
                      "id": "5fde6fe15bc1c56319fad3b2"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e8": {
                "nodeID": "5f9f562f11b31520c2a2a6e8",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Okay, this session is now ending."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6ea",
                      "id": "5fde6fe15bc1c56319fad3b3"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e9": {
                "nodeID": "5f9f562f11b31520c2a2a6e9",
                "type": "block",
                "coords": [
                  805.9688890631405,
                  120.94792332948695
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e8",
                    "5f9f562f11b31520c2a2a6ea"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6ea": {
                "nodeID": "5f9f562f11b31520c2a2a6ea",
                "type": "exit",
                "data": {
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde6fe15bc1c56319fad3b4"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          }
        }
      }`
}

function getMissingRootNodes(){
    return `{
        "project": {
          "_id": "6047b78770cbad001bef024b",
          "name": "test",
          "teamID": "peEqRl9kDw",
          "devVersion": "6047b787d03e580009e467e3",
          "platform": "alexa",
          "platformData": {
            "products": []
          },
          "members": [],
          "image": "",
          "linkType": "STRAIGHT",
          "creatorID": 45143
        },
        "version": {
          "_id": "6047b787d03e580009e467e3",
          "name": "Initial Version",
          "projectID": "6047b78770cbad001bef024b",
          "variables": [
            "sessions",
            "user_id",
            "timestamp",
            "platform",
            "locale"
          ],
          "platformData": {
            "slots": [],
            "intents": [],
            "settings": {
              "events": null,
              "customInterface": false,
              "session": {
                "type": "restart"
              },
              "repeat": "ALL",
              "accountLinking": null,
              "error": null
            },
            "publishing": {
              "summary": "",
              "invocations": [
                "open test",
                "start test",
                "launch test"
              ],
              "smallIcon": "",
              "largeIcon": "",
              "hasAds": false,
              "personal": false,
              "forExport": true,
              "invocationName": "test",
              "hasPurchase": false,
              "forChildren": false,
              "description": "",
              "instructions": "",
              "privacyPolicy": "",
              "termsAndConditions": "",
              "keywords": "",
              "category": "",
              "locales": [
                "en-US"
              ],
              "updatesDescription": null
            },
            "status": {
              "stage": "DEV"
            }
          },
          "rootDiagramID": "6047b787d03e580009e467e4",
          "creatorID": 45143,
          "prototype": {
            "data": {
              "name": "test",
              "locales": [
                "en-US"
              ]
            },
            "model": {
              "intents": [
                {
                  "key": "VF.NO",
                  "name": "VF.NO",
                  "inputs": [
                    {
                      "text": "no"
                    },
                    {
                      "text": "nope"
                    },
                    {
                      "text": "nay"
                    },
                    {
                      "text": "nah"
                    },
                    {
                      "text": "no way"
                    },
                    {
                      "text": "negative"
                    }
                  ]
                },
                {
                  "key": "VF.YES",
                  "name": "VF.YES",
                  "inputs": [
                    {
                      "text": "yes"
                    },
                    {
                      "text": "yea"
                    },
                    {
                      "text": "ok"
                    },
                    {
                      "text": "okay"
                    },
                    {
                      "text": "yup"
                    },
                    {
                      "text": "ya"
                    },
                    {
                      "text": "sure"
                    }
                  ]
                },
                {
                  "key": "VF.STOP",
                  "name": "VF.STOP",
                  "inputs": [
                    {
                      "text": "stop"
                    }
                  ]
                },
                {
                  "key": "VF.HELP",
                  "name": "VF.HELP",
                  "inputs": [
                    {
                      "text": "help"
                    },
                    {
                      "text": "help me"
                    },
                    {
                      "text": "i need help"
                    }
                  ]
                },
                {
                  "key": "VF.CANCEL",
                  "name": "VF.CANCEL",
                  "inputs": [
                    {
                      "text": "cancel"
                    }
                  ]
                }
              ],
              "slots": []
            },
            "context": {
              "stack": [
                {
                  "storage": {},
                  "variables": {},
                  "programID": "6047b787d03e580009e467e4"
                }
              ]
            },
            "settings": {}
          }
        },
        "diagrams": {
          "6047b787d03e580009e467e4": {
            "_id": "6047b787d03e580009e467e4",
            "name": "ROOT",
            "offsetX": 236.2,
            "offsetY": 91.60000000000002,
            "zoom": 80,
            "variables": [],
            "children": [
              "6047b787d03e580009e467e6",
              "6047b787d03e580009e467e5"
            ],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615313124
          },
          "6047b787d03e580009e467e6": {
            "_id": "6047b787d03e580009e467e6",
            "name": "Help User",
            "offsetX": 196.5723910133667,
            "offsetY": 143.32399142840148,
            "zoom": 76.41405779564307,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e1": {
                "nodeID": "5f9f562f11b31520c2a2a6e1",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e2",
                      "id": "5fde75904a001a20aa671626"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e2": {
                "nodeID": "5f9f562f11b31520c2a2a6e2",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "You said help. Do you want to continue?"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e4",
                      "id": "5fde75904a001a20aa671627"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e3": {
                "nodeID": "5f9f562f11b31520c2a2a6e3",
                "type": "block",
                "coords": [
                  808.6506721313523,
                  121.24568139701532
                ],
                "data": {
                  "name": "Help Message",
                  "color": "standard",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e2",
                    "5f9f562f11b31520c2a2a6e4"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e4": {
                "nodeID": "5f9f562f11b31520c2a2a6e4",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": "Do you want to continue?"
                      },
                      {
                        "voice": "Alexa",
                        "content": "Please say yes or no."
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671628"
                    },
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671629"
                    },
                    {
                      "type": 2,
                      "target": "5f9f562f11b31520c2a2a6e6",
                      "id": "5fde75904a001a20aa67162a"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e5": {
                "nodeID": "5f9f562f11b31520c2a2a6e5",
                "type": "exit",
                "data": {
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e6": {
                "nodeID": "5f9f562f11b31520c2a2a6e6",
                "type": "block",
                "coords": [
                  1295.0066750587603,
                  408.4923354011805
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5fde75c44a001a20aa67166d",
                    "5f9f562f11b31520c2a2a6e5"
                  ]
                }
              },
              "5fde75c44a001a20aa67166d": {
                "nodeID": "5fde75c44a001a20aa67166d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Bye for now."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e5",
                      "id": "5fde75c44a001a20aa671670"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          },
          "6047b787d03e580009e467e5": {
            "_id": "6047b787d03e580009e467e5",
            "name": "End Session",
            "offsetX": 206.51942553425963,
            "offsetY": 119.61838012311347,
            "zoom": 93.10542690398123,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e7": {
                "nodeID": "5f9f562f11b31520c2a2a6e7",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e8",
                      "id": "5fde6fe15bc1c56319fad3b2"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e8": {
                "nodeID": "5f9f562f11b31520c2a2a6e8",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Okay, this session is now ending."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6ea",
                      "id": "5fde6fe15bc1c56319fad3b3"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e9": {
                "nodeID": "5f9f562f11b31520c2a2a6e9",
                "type": "block",
                "coords": [
                  805.9688890631405,
                  120.94792332948695
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e8",
                    "5f9f562f11b31520c2a2a6ea"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6ea": {
                "nodeID": "5f9f562f11b31520c2a2a6ea",
                "type": "exit",
                "data": {
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde6fe15bc1c56319fad3b4"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          }
        }
      }`
}

function getMissingRootNode(){
    return `{
        "project": {
          "_id": "6047b78770cbad001bef024b",
          "name": "test",
          "teamID": "peEqRl9kDw",
          "devVersion": "6047b787d03e580009e467e3",
          "platform": "alexa",
          "platformData": {
            "products": []
          },
          "members": [],
          "image": "",
          "linkType": "STRAIGHT",
          "creatorID": 45143
        },
        "version": {
          "_id": "6047b787d03e580009e467e3",
          "name": "Initial Version",
          "projectID": "6047b78770cbad001bef024b",
          "variables": [
            "sessions",
            "user_id",
            "timestamp",
            "platform",
            "locale"
          ],
          "platformData": {
            "slots": [],
            "intents": [],
            "settings": {
              "events": null,
              "customInterface": false,
              "session": {
                "type": "restart"
              },
              "repeat": "ALL",
              "accountLinking": null,
              "error": null
            },
            "publishing": {
              "summary": "",
              "invocations": [
                "open test",
                "start test",
                "launch test"
              ],
              "smallIcon": "",
              "largeIcon": "",
              "hasAds": false,
              "personal": false,
              "forExport": true,
              "invocationName": "test",
              "hasPurchase": false,
              "forChildren": false,
              "description": "",
              "instructions": "",
              "privacyPolicy": "",
              "termsAndConditions": "",
              "keywords": "",
              "category": "",
              "locales": [
                "en-US"
              ],
              "updatesDescription": null
            },
            "status": {
              "stage": "DEV"
            }
          },
          "creatorID": 45143,
          "prototype": {
            "data": {
              "name": "test",
              "locales": [
                "en-US"
              ]
            },
            "model": {
              "intents": [
                {
                  "key": "VF.NO",
                  "name": "VF.NO",
                  "inputs": [
                    {
                      "text": "no"
                    },
                    {
                      "text": "nope"
                    },
                    {
                      "text": "nay"
                    },
                    {
                      "text": "nah"
                    },
                    {
                      "text": "no way"
                    },
                    {
                      "text": "negative"
                    }
                  ]
                },
                {
                  "key": "VF.YES",
                  "name": "VF.YES",
                  "inputs": [
                    {
                      "text": "yes"
                    },
                    {
                      "text": "yea"
                    },
                    {
                      "text": "ok"
                    },
                    {
                      "text": "okay"
                    },
                    {
                      "text": "yup"
                    },
                    {
                      "text": "ya"
                    },
                    {
                      "text": "sure"
                    }
                  ]
                },
                {
                  "key": "VF.STOP",
                  "name": "VF.STOP",
                  "inputs": [
                    {
                      "text": "stop"
                    }
                  ]
                },
                {
                  "key": "VF.HELP",
                  "name": "VF.HELP",
                  "inputs": [
                    {
                      "text": "help"
                    },
                    {
                      "text": "help me"
                    },
                    {
                      "text": "i need help"
                    }
                  ]
                },
                {
                  "key": "VF.CANCEL",
                  "name": "VF.CANCEL",
                  "inputs": [
                    {
                      "text": "cancel"
                    }
                  ]
                }
              ],
              "slots": []
            },
            "context": {
              "stack": [
                {
                  "storage": {},
                  "variables": {},
                  "programID": "6047b787d03e580009e467e4"
                }
              ]
            },
            "settings": {}
          }
        },
        "diagrams": {
          "6047b787d03e580009e467e4": {
            "_id": "6047b787d03e580009e467e4",
            "name": "ROOT",
            "offsetX": 236.2,
            "offsetY": 91.60000000000002,
            "zoom": 80,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6de": {
                "nodeID": "5f9f562f11b31520c2a2a6de",
                "type": "start",
                "coords": [
                  226.25,
                  106.25
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b8ab9bdc55674868041e",
                      "id": "5fde6fac5bc1c56319fad39b"
                    }
                  ],
                  "steps": [
                    "5f9f562f11b31520c2a2a6df",
                    "5f9f562f11b31520c2a2a6e0",
                    "5fde6fb05bc1c56319fad3a0"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6df": {
                "nodeID": "5f9f562f11b31520c2a2a6df",
                "type": "command",
                "data": {
                  "name": "Help",
                  "intent": "AMAZON.HelpIntent",
                  "diagramID": "6047b787d03e580009e467e6",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e0": {
                "nodeID": "5f9f562f11b31520c2a2a6e0",
                "type": "command",
                "data": {
                  "name": "Stop",
                  "intent": "AMAZON.StopIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5fde6fb05bc1c56319fad3a0": {
                "nodeID": "5fde6fb05bc1c56319fad3a0",
                "type": "command",
                "data": {
                  "name": "Cancel",
                  "intent": "AMAZON.CancelIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "6047b78c9bdc556748680285": {
                "nodeID": "6047b78c9bdc556748680285",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": ""
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "chips": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b78c9bdc556748680287"
                    },
                    {
                      "type": "",
                      "target": "6047b7ac9bdc556748680293",
                      "id": "6047b78c9bdc556748680288"
                    },
                    {
                      "type": 2,
                      "target": "6047b7ae9bdc55674868029d",
                      "id": "6047b7939bdc556748680290"
                    }
                  ]
                }
              },
              "6047b78c9bdc556748680289": {
                "nodeID": "6047b78c9bdc556748680289",
                "type": "block",
                "coords": [
                  1027.25,
                  191.49999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b78c9bdc556748680285"
                  ]
                }
              },
              "6047b7ac9bdc556748680293": {
                "nodeID": "6047b7ac9bdc556748680293",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Yes"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ac9bdc556748680295"
                    }
                  ]
                }
              },
              "6047b7ac9bdc556748680296": {
                "nodeID": "6047b7ac9bdc556748680296",
                "type": "block",
                "coords": [
                  1603.4999999999998,
                  118.99999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ac9bdc556748680293"
                  ]
                }
              },
              "6047b7ae9bdc55674868029d": {
                "nodeID": "6047b7ae9bdc55674868029d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "No"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ae9bdc55674868029f"
                    }
                  ]
                }
              },
              "6047b7ae9bdc5567486802a0": {
                "nodeID": "6047b7ae9bdc5567486802a0",
                "type": "block",
                "coords": [
                  1629.7499999999998,
                  370.24999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ae9bdc55674868029d"
                  ]
                }
              },
              "6047b8ab9bdc55674868041b": {
                "nodeID": "6047b8ab9bdc55674868041b",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Hello"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b78c9bdc556748680285",
                      "id": "6047b8ab9bdc55674868041d"
                    }
                  ]
                }
              },
              "6047b8ab9bdc55674868041e": {
                "nodeID": "6047b8ab9bdc55674868041e",
                "type": "block",
                "coords": [
                  625.9999999999999,
                  220.49999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b8ab9bdc55674868041b"
                  ]
                }
              }
            },
            "children": [
              "6047b787d03e580009e467e6",
              "6047b787d03e580009e467e5"
            ],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615313124
          },
          "6047b787d03e580009e467e6": {
            "_id": "6047b787d03e580009e467e6",
            "name": "Help User",
            "offsetX": 196.5723910133667,
            "offsetY": 143.32399142840148,
            "zoom": 76.41405779564307,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e1": {
                "nodeID": "5f9f562f11b31520c2a2a6e1",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e2",
                      "id": "5fde75904a001a20aa671626"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e2": {
                "nodeID": "5f9f562f11b31520c2a2a6e2",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "You said help. Do you want to continue?"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e4",
                      "id": "5fde75904a001a20aa671627"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e3": {
                "nodeID": "5f9f562f11b31520c2a2a6e3",
                "type": "block",
                "coords": [
                  808.6506721313523,
                  121.24568139701532
                ],
                "data": {
                  "name": "Help Message",
                  "color": "standard",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e2",
                    "5f9f562f11b31520c2a2a6e4"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e4": {
                "nodeID": "5f9f562f11b31520c2a2a6e4",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": "Do you want to continue?"
                      },
                      {
                        "voice": "Alexa",
                        "content": "Please say yes or no."
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671628"
                    },
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671629"
                    },
                    {
                      "type": 2,
                      "target": "5f9f562f11b31520c2a2a6e6",
                      "id": "5fde75904a001a20aa67162a"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e5": {
                "nodeID": "5f9f562f11b31520c2a2a6e5",
                "type": "exit",
                "data": {
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e6": {
                "nodeID": "5f9f562f11b31520c2a2a6e6",
                "type": "block",
                "coords": [
                  1295.0066750587603,
                  408.4923354011805
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5fde75c44a001a20aa67166d",
                    "5f9f562f11b31520c2a2a6e5"
                  ]
                }
              },
              "5fde75c44a001a20aa67166d": {
                "nodeID": "5fde75c44a001a20aa67166d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Bye for now."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e5",
                      "id": "5fde75c44a001a20aa671670"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          },
          "6047b787d03e580009e467e5": {
            "_id": "6047b787d03e580009e467e5",
            "name": "End Session",
            "offsetX": 206.51942553425963,
            "offsetY": 119.61838012311347,
            "zoom": 93.10542690398123,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e7": {
                "nodeID": "5f9f562f11b31520c2a2a6e7",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e8",
                      "id": "5fde6fe15bc1c56319fad3b2"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e8": {
                "nodeID": "5f9f562f11b31520c2a2a6e8",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Okay, this session is now ending."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6ea",
                      "id": "5fde6fe15bc1c56319fad3b3"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e9": {
                "nodeID": "5f9f562f11b31520c2a2a6e9",
                "type": "block",
                "coords": [
                  805.9688890631405,
                  120.94792332948695
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e8",
                    "5f9f562f11b31520c2a2a6ea"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6ea": {
                "nodeID": "5f9f562f11b31520c2a2a6ea",
                "type": "exit",
                "data": {
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde6fe15bc1c56319fad3b4"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          }
        }
      }`
    
}

function getValidDiagramUBF(){
    return `{
        "project":{
           "nodes":{
              "5f9f562f11b31520c2a2a6de":{
                 "type":"start",
                 "next":"6047b8ab9bdc55674868041e"
              },
              "6047b78c9bdc556748680285":{
                 "type":"interaction",
                 "options":[
                    {
                       "type":"yes",
                       "next":"6047b7ac9bdc556748680293"
                    },
                    {
                       "type":"no",
                       "next":"6047b7ae9bdc55674868029d"
                    }
                 ]
              },
              "6047b7ac9bdc556748680293":{
                 "type":"speak",
                 "content":"Yes",
                 "next":null
              },
              "6047b7ae9bdc55674868029d":{
                 "type":"speak",
                 "content":"No",
                 "next":null
              },
              "6047b8ab9bdc55674868041b":{
                 "type":"speak",
                 "content":"Hello",
                 "next":"6047b78c9bdc556748680285"
              }
           },
           "name":"test"
        }
     }`
}

function getUnsupportedType(){
    return `{
        "project": {
          "_id": "6047b78770cbad001bef024b",
          "name": "test",
          "teamID": "peEqRl9kDw",
          "devVersion": "6047b787d03e580009e467e3",
          "platform": "alexa",
          "platformData": {
            "products": []
          },
          "members": [],
          "image": "",
          "linkType": "STRAIGHT",
          "creatorID": 45143
        },
        "version": {
          "_id": "6047b787d03e580009e467e3",
          "name": "Initial Version",
          "projectID": "6047b78770cbad001bef024b",
          "variables": [
            "sessions",
            "user_id",
            "timestamp",
            "platform",
            "locale"
          ],
          "platformData": {
            "slots": [],
            "intents": [],
            "settings": {
              "events": null,
              "customInterface": false,
              "session": {
                "type": "restart"
              },
              "repeat": "ALL",
              "accountLinking": null,
              "error": null
            },
            "publishing": {
              "summary": "",
              "invocations": [
                "open test",
                "start test",
                "launch test"
              ],
              "smallIcon": "",
              "largeIcon": "",
              "hasAds": false,
              "personal": false,
              "forExport": true,
              "invocationName": "test",
              "hasPurchase": false,
              "forChildren": false,
              "description": "",
              "instructions": "",
              "privacyPolicy": "",
              "termsAndConditions": "",
              "keywords": "",
              "category": "",
              "locales": [
                "en-US"
              ],
              "updatesDescription": null
            },
            "status": {
              "stage": "DEV"
            }
          },
          "rootDiagramID": "6047b787d03e580009e467e4",
          "creatorID": 45143,
          "prototype": {
            "data": {
              "name": "test",
              "locales": [
                "en-US"
              ]
            },
            "model": {
              "intents": [
                {
                  "key": "VF.NO",
                  "name": "VF.NO",
                  "inputs": [
                    {
                      "text": "no"
                    },
                    {
                      "text": "nope"
                    },
                    {
                      "text": "nay"
                    },
                    {
                      "text": "nah"
                    },
                    {
                      "text": "no way"
                    },
                    {
                      "text": "negative"
                    }
                  ]
                },
                {
                  "key": "VF.YES",
                  "name": "VF.YES",
                  "inputs": [
                    {
                      "text": "yes"
                    },
                    {
                      "text": "yea"
                    },
                    {
                      "text": "ok"
                    },
                    {
                      "text": "okay"
                    },
                    {
                      "text": "yup"
                    },
                    {
                      "text": "ya"
                    },
                    {
                      "text": "sure"
                    }
                  ]
                },
                {
                  "key": "VF.STOP",
                  "name": "VF.STOP",
                  "inputs": [
                    {
                      "text": "stop"
                    }
                  ]
                },
                {
                  "key": "VF.HELP",
                  "name": "VF.HELP",
                  "inputs": [
                    {
                      "text": "help"
                    },
                    {
                      "text": "help me"
                    },
                    {
                      "text": "i need help"
                    }
                  ]
                },
                {
                  "key": "VF.CANCEL",
                  "name": "VF.CANCEL",
                  "inputs": [
                    {
                      "text": "cancel"
                    }
                  ]
                }
              ],
              "slots": []
            },
            "context": {
              "stack": [
                {
                  "storage": {},
                  "variables": {},
                  "programID": "6047b787d03e580009e467e4"
                }
              ]
            },
            "settings": {}
          }
        },
        "diagrams": {
          "6047b787d03e580009e467e4": {
            "_id": "6047b787d03e580009e467e4",
            "name": "ROOT",
            "offsetX": 236.2,
            "offsetY": 91.60000000000002,
            "zoom": 80,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6de": {
                "nodeID": "5f9f562f11b31520c2a2a6de",
                "type": "start",
                "coords": [
                  226.25,
                  106.25
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b8ab9bdc55674868041e",
                      "id": "5fde6fac5bc1c56319fad39b"
                    }
                  ],
                  "steps": [
                    "5f9f562f11b31520c2a2a6df",
                    "5f9f562f11b31520c2a2a6e0",
                    "5fde6fb05bc1c56319fad3a0"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6df": {
                "nodeID": "5f9f562f11b31520c2a2a6df",
                "type": "command",
                "data": {
                  "name": "Help",
                  "intent": "AMAZON.HelpIntent",
                  "diagramID": "6047b787d03e580009e467e6",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e0": {
                "nodeID": "5f9f562f11b31520c2a2a6e0",
                "type": "command",
                "data": {
                  "name": "Stop",
                  "intent": "AMAZON.StopIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5fde6fb05bc1c56319fad3a0": {
                "nodeID": "5fde6fb05bc1c56319fad3a0",
                "type": "random",
                "data": {
                  "name": "Cancel",
                  "intent": "AMAZON.CancelIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "6047b78c9bdc556748680285": {
                "nodeID": "6047b78c9bdc556748680285",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": ""
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "chips": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b78c9bdc556748680287"
                    },
                    {
                      "type": "",
                      "target": "6047b7ac9bdc556748680293",
                      "id": "6047b78c9bdc556748680288"
                    },
                    {
                      "type": 2,
                      "target": "6047b7ae9bdc55674868029d",
                      "id": "6047b7939bdc556748680290"
                    }
                  ]
                }
              },
              "6047b78c9bdc556748680289": {
                "nodeID": "6047b78c9bdc556748680289",
                "type": "block",
                "coords": [
                  1027.25,
                  191.49999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b78c9bdc556748680285"
                  ]
                }
              },
              "6047b7ac9bdc556748680293": {
                "nodeID": "6047b7ac9bdc556748680293",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Yes"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ac9bdc556748680295"
                    }
                  ]
                }
              },
              "6047b7ac9bdc556748680296": {
                "nodeID": "6047b7ac9bdc556748680296",
                "type": "block",
                "coords": [
                  1603.4999999999998,
                  118.99999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ac9bdc556748680293"
                  ]
                }
              },
              "6047b7ae9bdc55674868029d": {
                "nodeID": "6047b7ae9bdc55674868029d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "No"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ae9bdc55674868029f"
                    }
                  ]
                }
              },
              "6047b7ae9bdc5567486802a0": {
                "nodeID": "6047b7ae9bdc5567486802a0",
                "type": "block",
                "coords": [
                  1629.7499999999998,
                  370.24999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ae9bdc55674868029d"
                  ]
                }
              },
              "6047b8ab9bdc55674868041b": {
                "nodeID": "6047b8ab9bdc55674868041b",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Hello"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b78c9bdc556748680285",
                      "id": "6047b8ab9bdc55674868041d"
                    }
                  ]
                }
              },
              "6047b8ab9bdc55674868041e": {
                "nodeID": "6047b8ab9bdc55674868041e",
                "type": "block",
                "coords": [
                  625.9999999999999,
                  220.49999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b8ab9bdc55674868041b"
                  ]
                }
              }
            },
            "children": [
              "6047b787d03e580009e467e6",
              "6047b787d03e580009e467e5"
            ],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615313124
          },
          "6047b787d03e580009e467e6": {
            "_id": "6047b787d03e580009e467e6",
            "name": "Help User",
            "offsetX": 196.5723910133667,
            "offsetY": 143.32399142840148,
            "zoom": 76.41405779564307,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e1": {
                "nodeID": "5f9f562f11b31520c2a2a6e1",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e2",
                      "id": "5fde75904a001a20aa671626"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e2": {
                "nodeID": "5f9f562f11b31520c2a2a6e2",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "You said help. Do you want to continue?"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e4",
                      "id": "5fde75904a001a20aa671627"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e3": {
                "nodeID": "5f9f562f11b31520c2a2a6e3",
                "type": "block",
                "coords": [
                  808.6506721313523,
                  121.24568139701532
                ],
                "data": {
                  "name": "Help Message",
                  "color": "standard",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e2",
                    "5f9f562f11b31520c2a2a6e4"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e4": {
                "nodeID": "5f9f562f11b31520c2a2a6e4",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": "Do you want to continue?"
                      },
                      {
                        "voice": "Alexa",
                        "content": "Please say yes or no."
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671628"
                    },
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671629"
                    },
                    {
                      "type": 2,
                      "target": "5f9f562f11b31520c2a2a6e6",
                      "id": "5fde75904a001a20aa67162a"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e5": {
                "nodeID": "5f9f562f11b31520c2a2a6e5",
                "type": "exit",
                "data": {
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e6": {
                "nodeID": "5f9f562f11b31520c2a2a6e6",
                "type": "block",
                "coords": [
                  1295.0066750587603,
                  408.4923354011805
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5fde75c44a001a20aa67166d",
                    "5f9f562f11b31520c2a2a6e5"
                  ]
                }
              },
              "5fde75c44a001a20aa67166d": {
                "nodeID": "5fde75c44a001a20aa67166d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Bye for now."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e5",
                      "id": "5fde75c44a001a20aa671670"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          },
          "6047b787d03e580009e467e5": {
            "_id": "6047b787d03e580009e467e5",
            "name": "End Session",
            "offsetX": 206.51942553425963,
            "offsetY": 119.61838012311347,
            "zoom": 93.10542690398123,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e7": {
                "nodeID": "5f9f562f11b31520c2a2a6e7",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e8",
                      "id": "5fde6fe15bc1c56319fad3b2"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e8": {
                "nodeID": "5f9f562f11b31520c2a2a6e8",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Okay, this session is now ending."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6ea",
                      "id": "5fde6fe15bc1c56319fad3b3"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e9": {
                "nodeID": "5f9f562f11b31520c2a2a6e9",
                "type": "block",
                "coords": [
                  805.9688890631405,
                  120.94792332948695
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e8",
                    "5f9f562f11b31520c2a2a6ea"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6ea": {
                "nodeID": "5f9f562f11b31520c2a2a6ea",
                "type": "exit",
                "data": {
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde6fe15bc1c56319fad3b4"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          }
        }
      }`
}

function getMoreThanTwoChoices(){
    return `{
        "project": {
          "_id": "6047b78770cbad001bef024b",
          "name": "test",
          "teamID": "peEqRl9kDw",
          "devVersion": "6047b787d03e580009e467e3",
          "platform": "alexa",
          "platformData": {
            "products": []
          },
          "members": [],
          "image": "",
          "linkType": "STRAIGHT",
          "creatorID": 45143
        },
        "version": {
          "_id": "6047b787d03e580009e467e3",
          "name": "Initial Version",
          "projectID": "6047b78770cbad001bef024b",
          "variables": [
            "sessions",
            "user_id",
            "timestamp",
            "platform",
            "locale"
          ],
          "platformData": {
            "slots": [],
            "intents": [],
            "settings": {
              "events": null,
              "customInterface": false,
              "session": {
                "type": "restart"
              },
              "repeat": "ALL",
              "accountLinking": null,
              "error": null
            },
            "publishing": {
              "summary": "",
              "invocations": [
                "open test",
                "start test",
                "launch test"
              ],
              "smallIcon": "",
              "largeIcon": "",
              "hasAds": false,
              "personal": false,
              "forExport": true,
              "invocationName": "test",
              "hasPurchase": false,
              "forChildren": false,
              "description": "",
              "instructions": "",
              "privacyPolicy": "",
              "termsAndConditions": "",
              "keywords": "",
              "category": "",
              "locales": [
                "en-US"
              ],
              "updatesDescription": null
            },
            "status": {
              "stage": "DEV"
            }
          },
          "rootDiagramID": "6047b787d03e580009e467e4",
          "creatorID": 45143,
          "prototype": {
            "data": {
              "name": "test",
              "locales": [
                "en-US"
              ]
            },
            "model": {
              "intents": [
                {
                  "key": "VF.NO",
                  "name": "VF.NO",
                  "inputs": [
                    {
                      "text": "no"
                    },
                    {
                      "text": "nope"
                    },
                    {
                      "text": "nay"
                    },
                    {
                      "text": "nah"
                    },
                    {
                      "text": "no way"
                    },
                    {
                      "text": "negative"
                    }
                  ]
                },
                {
                  "key": "VF.YES",
                  "name": "VF.YES",
                  "inputs": [
                    {
                      "text": "yes"
                    },
                    {
                      "text": "yea"
                    },
                    {
                      "text": "ok"
                    },
                    {
                      "text": "okay"
                    },
                    {
                      "text": "yup"
                    },
                    {
                      "text": "ya"
                    },
                    {
                      "text": "sure"
                    }
                  ]
                },
                {
                  "key": "VF.STOP",
                  "name": "VF.STOP",
                  "inputs": [
                    {
                      "text": "stop"
                    }
                  ]
                },
                {
                  "key": "VF.HELP",
                  "name": "VF.HELP",
                  "inputs": [
                    {
                      "text": "help"
                    },
                    {
                      "text": "help me"
                    },
                    {
                      "text": "i need help"
                    }
                  ]
                },
                {
                  "key": "VF.CANCEL",
                  "name": "VF.CANCEL",
                  "inputs": [
                    {
                      "text": "cancel"
                    }
                  ]
                }
              ],
              "slots": []
            },
            "context": {
              "stack": [
                {
                  "storage": {},
                  "variables": {},
                  "programID": "6047b787d03e580009e467e4"
                }
              ]
            },
            "settings": {}
          }
        },
        "diagrams": {
          "6047b787d03e580009e467e4": {
            "_id": "6047b787d03e580009e467e4",
            "name": "ROOT",
            "offsetX": 236.2,
            "offsetY": 91.60000000000002,
            "zoom": 80,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6de": {
                "nodeID": "5f9f562f11b31520c2a2a6de",
                "type": "start",
                "coords": [
                  226.25,
                  106.25
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b8ab9bdc55674868041e",
                      "id": "5fde6fac5bc1c56319fad39b"
                    }
                  ],
                  "steps": [
                    "5f9f562f11b31520c2a2a6df",
                    "5f9f562f11b31520c2a2a6e0",
                    "5fde6fb05bc1c56319fad3a0"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6df": {
                "nodeID": "5f9f562f11b31520c2a2a6df",
                "type": "command",
                "data": {
                  "name": "Help",
                  "intent": "AMAZON.HelpIntent",
                  "diagramID": "6047b787d03e580009e467e6",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e0": {
                "nodeID": "5f9f562f11b31520c2a2a6e0",
                "type": "command",
                "data": {
                  "name": "Stop",
                  "intent": "AMAZON.StopIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5fde6fb05bc1c56319fad3a0": {
                "nodeID": "5fde6fb05bc1c56319fad3a0",
                "type": "command",
                "data": {
                  "name": "Cancel",
                  "intent": "AMAZON.CancelIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "6047b78c9bdc556748680285": {
                "nodeID": "6047b78c9bdc556748680285",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": ""
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "chips": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b78c9bdc556748680287"
                    },
                    {
                      "type": "",
                      "target": "6047b7ac9bdc556748680293",
                      "id": "6047b78c9bdc556748680288"
                    },
                    {
                      "type": 2,
                      "target": "6047b7ae9bdc55674868029d",
                      "id": "6047b7939bdc556748680290"
                    },
                    {}
                  ]
                }
              },
              "6047b78c9bdc556748680289": {
                "nodeID": "6047b78c9bdc556748680289",
                "type": "block",
                "coords": [
                  1027.25,
                  191.49999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b78c9bdc556748680285"
                  ]
                }
              },
              "6047b7ac9bdc556748680293": {
                "nodeID": "6047b7ac9bdc556748680293",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Yes"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ac9bdc556748680295"
                    }
                  ]
                }
              },
              "6047b7ac9bdc556748680296": {
                "nodeID": "6047b7ac9bdc556748680296",
                "type": "block",
                "coords": [
                  1603.4999999999998,
                  118.99999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ac9bdc556748680293"
                  ]
                }
              },
              "6047b7ae9bdc55674868029d": {
                "nodeID": "6047b7ae9bdc55674868029d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "No"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ae9bdc55674868029f"
                    }
                  ]
                }
              },
              "6047b7ae9bdc5567486802a0": {
                "nodeID": "6047b7ae9bdc5567486802a0",
                "type": "block",
                "coords": [
                  1629.7499999999998,
                  370.24999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ae9bdc55674868029d"
                  ]
                }
              },
              "6047b8ab9bdc55674868041b": {
                "nodeID": "6047b8ab9bdc55674868041b",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Hello"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b78c9bdc556748680285",
                      "id": "6047b8ab9bdc55674868041d"
                    }
                  ]
                }
              },
              "6047b8ab9bdc55674868041e": {
                "nodeID": "6047b8ab9bdc55674868041e",
                "type": "block",
                "coords": [
                  625.9999999999999,
                  220.49999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b8ab9bdc55674868041b"
                  ]
                }
              }
            },
            "children": [
              "6047b787d03e580009e467e6",
              "6047b787d03e580009e467e5"
            ],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615313124
          },
          "6047b787d03e580009e467e6": {
            "_id": "6047b787d03e580009e467e6",
            "name": "Help User",
            "offsetX": 196.5723910133667,
            "offsetY": 143.32399142840148,
            "zoom": 76.41405779564307,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e1": {
                "nodeID": "5f9f562f11b31520c2a2a6e1",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e2",
                      "id": "5fde75904a001a20aa671626"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e2": {
                "nodeID": "5f9f562f11b31520c2a2a6e2",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "You said help. Do you want to continue?"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e4",
                      "id": "5fde75904a001a20aa671627"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e3": {
                "nodeID": "5f9f562f11b31520c2a2a6e3",
                "type": "block",
                "coords": [
                  808.6506721313523,
                  121.24568139701532
                ],
                "data": {
                  "name": "Help Message",
                  "color": "standard",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e2",
                    "5f9f562f11b31520c2a2a6e4"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e4": {
                "nodeID": "5f9f562f11b31520c2a2a6e4",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": "Do you want to continue?"
                      },
                      {
                        "voice": "Alexa",
                        "content": "Please say yes or no."
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671628"
                    },
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671629"
                    },
                    {
                      "type": 2,
                      "target": "5f9f562f11b31520c2a2a6e6",
                      "id": "5fde75904a001a20aa67162a"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e5": {
                "nodeID": "5f9f562f11b31520c2a2a6e5",
                "type": "exit",
                "data": {
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e6": {
                "nodeID": "5f9f562f11b31520c2a2a6e6",
                "type": "block",
                "coords": [
                  1295.0066750587603,
                  408.4923354011805
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5fde75c44a001a20aa67166d",
                    "5f9f562f11b31520c2a2a6e5"
                  ]
                }
              },
              "5fde75c44a001a20aa67166d": {
                "nodeID": "5fde75c44a001a20aa67166d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Bye for now."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e5",
                      "id": "5fde75c44a001a20aa671670"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          },
          "6047b787d03e580009e467e5": {
            "_id": "6047b787d03e580009e467e5",
            "name": "End Session",
            "offsetX": 206.51942553425963,
            "offsetY": 119.61838012311347,
            "zoom": 93.10542690398123,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e7": {
                "nodeID": "5f9f562f11b31520c2a2a6e7",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e8",
                      "id": "5fde6fe15bc1c56319fad3b2"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e8": {
                "nodeID": "5f9f562f11b31520c2a2a6e8",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Okay, this session is now ending."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6ea",
                      "id": "5fde6fe15bc1c56319fad3b3"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e9": {
                "nodeID": "5f9f562f11b31520c2a2a6e9",
                "type": "block",
                "coords": [
                  805.9688890631405,
                  120.94792332948695
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e8",
                    "5f9f562f11b31520c2a2a6ea"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6ea": {
                "nodeID": "5f9f562f11b31520c2a2a6ea",
                "type": "exit",
                "data": {
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde6fe15bc1c56319fad3b4"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          }
        }
      }`
}

function getLessThanTwoChoices(){
    return `{
        "project": {
          "_id": "6047b78770cbad001bef024b",
          "name": "test",
          "teamID": "peEqRl9kDw",
          "devVersion": "6047b787d03e580009e467e3",
          "platform": "alexa",
          "platformData": {
            "products": []
          },
          "members": [],
          "image": "",
          "linkType": "STRAIGHT",
          "creatorID": 45143
        },
        "version": {
          "_id": "6047b787d03e580009e467e3",
          "name": "Initial Version",
          "projectID": "6047b78770cbad001bef024b",
          "variables": [
            "sessions",
            "user_id",
            "timestamp",
            "platform",
            "locale"
          ],
          "platformData": {
            "slots": [],
            "intents": [],
            "settings": {
              "events": null,
              "customInterface": false,
              "session": {
                "type": "restart"
              },
              "repeat": "ALL",
              "accountLinking": null,
              "error": null
            },
            "publishing": {
              "summary": "",
              "invocations": [
                "open test",
                "start test",
                "launch test"
              ],
              "smallIcon": "",
              "largeIcon": "",
              "hasAds": false,
              "personal": false,
              "forExport": true,
              "invocationName": "test",
              "hasPurchase": false,
              "forChildren": false,
              "description": "",
              "instructions": "",
              "privacyPolicy": "",
              "termsAndConditions": "",
              "keywords": "",
              "category": "",
              "locales": [
                "en-US"
              ],
              "updatesDescription": null
            },
            "status": {
              "stage": "DEV"
            }
          },
          "rootDiagramID": "6047b787d03e580009e467e4",
          "creatorID": 45143,
          "prototype": {
            "data": {
              "name": "test",
              "locales": [
                "en-US"
              ]
            },
            "model": {
              "intents": [
                {
                  "key": "VF.NO",
                  "name": "VF.NO",
                  "inputs": [
                    {
                      "text": "no"
                    },
                    {
                      "text": "nope"
                    },
                    {
                      "text": "nay"
                    },
                    {
                      "text": "nah"
                    },
                    {
                      "text": "no way"
                    },
                    {
                      "text": "negative"
                    }
                  ]
                },
                {
                  "key": "VF.YES",
                  "name": "VF.YES",
                  "inputs": [
                    {
                      "text": "yes"
                    },
                    {
                      "text": "yea"
                    },
                    {
                      "text": "ok"
                    },
                    {
                      "text": "okay"
                    },
                    {
                      "text": "yup"
                    },
                    {
                      "text": "ya"
                    },
                    {
                      "text": "sure"
                    }
                  ]
                },
                {
                  "key": "VF.STOP",
                  "name": "VF.STOP",
                  "inputs": [
                    {
                      "text": "stop"
                    }
                  ]
                },
                {
                  "key": "VF.HELP",
                  "name": "VF.HELP",
                  "inputs": [
                    {
                      "text": "help"
                    },
                    {
                      "text": "help me"
                    },
                    {
                      "text": "i need help"
                    }
                  ]
                },
                {
                  "key": "VF.CANCEL",
                  "name": "VF.CANCEL",
                  "inputs": [
                    {
                      "text": "cancel"
                    }
                  ]
                }
              ],
              "slots": []
            },
            "context": {
              "stack": [
                {
                  "storage": {},
                  "variables": {},
                  "programID": "6047b787d03e580009e467e4"
                }
              ]
            },
            "settings": {}
          }
        },
        "diagrams": {
          "6047b787d03e580009e467e4": {
            "_id": "6047b787d03e580009e467e4",
            "name": "ROOT",
            "offsetX": 236.2,
            "offsetY": 91.60000000000002,
            "zoom": 80,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6de": {
                "nodeID": "5f9f562f11b31520c2a2a6de",
                "type": "start",
                "coords": [
                  226.25,
                  106.25
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b8ab9bdc55674868041e",
                      "id": "5fde6fac5bc1c56319fad39b"
                    }
                  ],
                  "steps": [
                    "5f9f562f11b31520c2a2a6df",
                    "5f9f562f11b31520c2a2a6e0",
                    "5fde6fb05bc1c56319fad3a0"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6df": {
                "nodeID": "5f9f562f11b31520c2a2a6df",
                "type": "command",
                "data": {
                  "name": "Help",
                  "intent": "AMAZON.HelpIntent",
                  "diagramID": "6047b787d03e580009e467e6",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e0": {
                "nodeID": "5f9f562f11b31520c2a2a6e0",
                "type": "command",
                "data": {
                  "name": "Stop",
                  "intent": "AMAZON.StopIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5fde6fb05bc1c56319fad3a0": {
                "nodeID": "5fde6fb05bc1c56319fad3a0",
                "type": "command",
                "data": {
                  "name": "Cancel",
                  "intent": "AMAZON.CancelIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "6047b78c9bdc556748680285": {
                "nodeID": "6047b78c9bdc556748680285",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": ""
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "chips": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b78c9bdc556748680287"
                    },
                    {
                      "type": "",
                      "target": "6047b7ac9bdc556748680293",
                      "id": "6047b78c9bdc556748680288"
                    }
                  ]
                }
              },
              "6047b78c9bdc556748680289": {
                "nodeID": "6047b78c9bdc556748680289",
                "type": "block",
                "coords": [
                  1027.25,
                  191.49999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b78c9bdc556748680285"
                  ]
                }
              },
              "6047b7ac9bdc556748680293": {
                "nodeID": "6047b7ac9bdc556748680293",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Yes"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ac9bdc556748680295"
                    }
                  ]
                }
              },
              "6047b7ac9bdc556748680296": {
                "nodeID": "6047b7ac9bdc556748680296",
                "type": "block",
                "coords": [
                  1603.4999999999998,
                  118.99999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ac9bdc556748680293"
                  ]
                }
              },
              "6047b7ae9bdc55674868029d": {
                "nodeID": "6047b7ae9bdc55674868029d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "No"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ae9bdc55674868029f"
                    }
                  ]
                }
              },
              "6047b7ae9bdc5567486802a0": {
                "nodeID": "6047b7ae9bdc5567486802a0",
                "type": "block",
                "coords": [
                  1629.7499999999998,
                  370.24999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ae9bdc55674868029d"
                  ]
                }
              },
              "6047b8ab9bdc55674868041b": {
                "nodeID": "6047b8ab9bdc55674868041b",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Hello"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b78c9bdc556748680285",
                      "id": "6047b8ab9bdc55674868041d"
                    }
                  ]
                }
              },
              "6047b8ab9bdc55674868041e": {
                "nodeID": "6047b8ab9bdc55674868041e",
                "type": "block",
                "coords": [
                  625.9999999999999,
                  220.49999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b8ab9bdc55674868041b"
                  ]
                }
              }
            },
            "children": [
              "6047b787d03e580009e467e6",
              "6047b787d03e580009e467e5"
            ],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615313124
          },
          "6047b787d03e580009e467e6": {
            "_id": "6047b787d03e580009e467e6",
            "name": "Help User",
            "offsetX": 196.5723910133667,
            "offsetY": 143.32399142840148,
            "zoom": 76.41405779564307,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e1": {
                "nodeID": "5f9f562f11b31520c2a2a6e1",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e2",
                      "id": "5fde75904a001a20aa671626"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e2": {
                "nodeID": "5f9f562f11b31520c2a2a6e2",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "You said help. Do you want to continue?"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e4",
                      "id": "5fde75904a001a20aa671627"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e3": {
                "nodeID": "5f9f562f11b31520c2a2a6e3",
                "type": "block",
                "coords": [
                  808.6506721313523,
                  121.24568139701532
                ],
                "data": {
                  "name": "Help Message",
                  "color": "standard",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e2",
                    "5f9f562f11b31520c2a2a6e4"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e4": {
                "nodeID": "5f9f562f11b31520c2a2a6e4",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": "Do you want to continue?"
                      },
                      {
                        "voice": "Alexa",
                        "content": "Please say yes or no."
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671628"
                    },
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671629"
                    },
                    {
                      "type": 2,
                      "target": "5f9f562f11b31520c2a2a6e6",
                      "id": "5fde75904a001a20aa67162a"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e5": {
                "nodeID": "5f9f562f11b31520c2a2a6e5",
                "type": "exit",
                "data": {
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e6": {
                "nodeID": "5f9f562f11b31520c2a2a6e6",
                "type": "block",
                "coords": [
                  1295.0066750587603,
                  408.4923354011805
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5fde75c44a001a20aa67166d",
                    "5f9f562f11b31520c2a2a6e5"
                  ]
                }
              },
              "5fde75c44a001a20aa67166d": {
                "nodeID": "5fde75c44a001a20aa67166d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Bye for now."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e5",
                      "id": "5fde75c44a001a20aa671670"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          },
          "6047b787d03e580009e467e5": {
            "_id": "6047b787d03e580009e467e5",
            "name": "End Session",
            "offsetX": 206.51942553425963,
            "offsetY": 119.61838012311347,
            "zoom": 93.10542690398123,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e7": {
                "nodeID": "5f9f562f11b31520c2a2a6e7",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e8",
                      "id": "5fde6fe15bc1c56319fad3b2"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e8": {
                "nodeID": "5f9f562f11b31520c2a2a6e8",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Okay, this session is now ending."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6ea",
                      "id": "5fde6fe15bc1c56319fad3b3"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e9": {
                "nodeID": "5f9f562f11b31520c2a2a6e9",
                "type": "block",
                "coords": [
                  805.9688890631405,
                  120.94792332948695
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e8",
                    "5f9f562f11b31520c2a2a6ea"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6ea": {
                "nodeID": "5f9f562f11b31520c2a2a6ea",
                "type": "exit",
                "data": {
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde6fe15bc1c56319fad3b4"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          }
        }
      }`
}

function getMissingPorts(){
    return `{
        "project": {
          "_id": "6047b78770cbad001bef024b",
          "name": "test",
          "teamID": "peEqRl9kDw",
          "devVersion": "6047b787d03e580009e467e3",
          "platform": "alexa",
          "platformData": {
            "products": []
          },
          "members": [],
          "image": "",
          "linkType": "STRAIGHT",
          "creatorID": 45143
        },
        "version": {
          "_id": "6047b787d03e580009e467e3",
          "name": "Initial Version",
          "projectID": "6047b78770cbad001bef024b",
          "variables": [
            "sessions",
            "user_id",
            "timestamp",
            "platform",
            "locale"
          ],
          "platformData": {
            "slots": [],
            "intents": [],
            "settings": {
              "events": null,
              "customInterface": false,
              "session": {
                "type": "restart"
              },
              "repeat": "ALL",
              "accountLinking": null,
              "error": null
            },
            "publishing": {
              "summary": "",
              "invocations": [
                "open test",
                "start test",
                "launch test"
              ],
              "smallIcon": "",
              "largeIcon": "",
              "hasAds": false,
              "personal": false,
              "forExport": true,
              "invocationName": "test",
              "hasPurchase": false,
              "forChildren": false,
              "description": "",
              "instructions": "",
              "privacyPolicy": "",
              "termsAndConditions": "",
              "keywords": "",
              "category": "",
              "locales": [
                "en-US"
              ],
              "updatesDescription": null
            },
            "status": {
              "stage": "DEV"
            }
          },
          "rootDiagramID": "6047b787d03e580009e467e4",
          "creatorID": 45143,
          "prototype": {
            "data": {
              "name": "test",
              "locales": [
                "en-US"
              ]
            },
            "model": {
              "intents": [
                {
                  "key": "VF.NO",
                  "name": "VF.NO",
                  "inputs": [
                    {
                      "text": "no"
                    },
                    {
                      "text": "nope"
                    },
                    {
                      "text": "nay"
                    },
                    {
                      "text": "nah"
                    },
                    {
                      "text": "no way"
                    },
                    {
                      "text": "negative"
                    }
                  ]
                },
                {
                  "key": "VF.YES",
                  "name": "VF.YES",
                  "inputs": [
                    {
                      "text": "yes"
                    },
                    {
                      "text": "yea"
                    },
                    {
                      "text": "ok"
                    },
                    {
                      "text": "okay"
                    },
                    {
                      "text": "yup"
                    },
                    {
                      "text": "ya"
                    },
                    {
                      "text": "sure"
                    }
                  ]
                },
                {
                  "key": "VF.STOP",
                  "name": "VF.STOP",
                  "inputs": [
                    {
                      "text": "stop"
                    }
                  ]
                },
                {
                  "key": "VF.HELP",
                  "name": "VF.HELP",
                  "inputs": [
                    {
                      "text": "help"
                    },
                    {
                      "text": "help me"
                    },
                    {
                      "text": "i need help"
                    }
                  ]
                },
                {
                  "key": "VF.CANCEL",
                  "name": "VF.CANCEL",
                  "inputs": [
                    {
                      "text": "cancel"
                    }
                  ]
                }
              ],
              "slots": []
            },
            "context": {
              "stack": [
                {
                  "storage": {},
                  "variables": {},
                  "programID": "6047b787d03e580009e467e4"
                }
              ]
            },
            "settings": {}
          }
        },
        "diagrams": {
          "6047b787d03e580009e467e4": {
            "_id": "6047b787d03e580009e467e4",
            "name": "ROOT",
            "offsetX": 236.2,
            "offsetY": 91.60000000000002,
            "zoom": 80,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6de": {
                "nodeID": "5f9f562f11b31520c2a2a6de",
                "type": "start",
                "coords": [
                  226.25,
                  106.25
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b8ab9bdc55674868041e",
                      "id": "5fde6fac5bc1c56319fad39b"
                    }
                  ],
                  "steps": [
                    "5f9f562f11b31520c2a2a6df",
                    "5f9f562f11b31520c2a2a6e0",
                    "5fde6fb05bc1c56319fad3a0"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6df": {
                "nodeID": "5f9f562f11b31520c2a2a6df",
                "type": "command",
                "data": {
                  "name": "Help",
                  "intent": "AMAZON.HelpIntent",
                  "diagramID": "6047b787d03e580009e467e6",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e0": {
                "nodeID": "5f9f562f11b31520c2a2a6e0",
                "type": "command",
                "data": {
                  "name": "Stop",
                  "intent": "AMAZON.StopIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5fde6fb05bc1c56319fad3a0": {
                "nodeID": "5fde6fb05bc1c56319fad3a0",
                "type": "command",
                "data": {
                  "name": "Cancel",
                  "intent": "AMAZON.CancelIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "6047b78c9bdc556748680285": {
                "nodeID": "6047b78c9bdc556748680285",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": ""
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "chips": null
                }
              },
              "6047b78c9bdc556748680289": {
                "nodeID": "6047b78c9bdc556748680289",
                "type": "block",
                "coords": [
                  1027.25,
                  191.49999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b78c9bdc556748680285"
                  ]
                }
              },
              "6047b7ac9bdc556748680293": {
                "nodeID": "6047b7ac9bdc556748680293",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Yes"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ac9bdc556748680295"
                    }
                  ]
                }
              },
              "6047b7ac9bdc556748680296": {
                "nodeID": "6047b7ac9bdc556748680296",
                "type": "block",
                "coords": [
                  1603.4999999999998,
                  118.99999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ac9bdc556748680293"
                  ]
                }
              },
              "6047b7ae9bdc55674868029d": {
                "nodeID": "6047b7ae9bdc55674868029d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "No"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ae9bdc55674868029f"
                    }
                  ]
                }
              },
              "6047b7ae9bdc5567486802a0": {
                "nodeID": "6047b7ae9bdc5567486802a0",
                "type": "block",
                "coords": [
                  1629.7499999999998,
                  370.24999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ae9bdc55674868029d"
                  ]
                }
              },
              "6047b8ab9bdc55674868041b": {
                "nodeID": "6047b8ab9bdc55674868041b",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Hello"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b78c9bdc556748680285",
                      "id": "6047b8ab9bdc55674868041d"
                    }
                  ]
                }
              },
              "6047b8ab9bdc55674868041e": {
                "nodeID": "6047b8ab9bdc55674868041e",
                "type": "block",
                "coords": [
                  625.9999999999999,
                  220.49999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b8ab9bdc55674868041b"
                  ]
                }
              }
            },
            "children": [
              "6047b787d03e580009e467e6",
              "6047b787d03e580009e467e5"
            ],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615313124
          },
          "6047b787d03e580009e467e6": {
            "_id": "6047b787d03e580009e467e6",
            "name": "Help User",
            "offsetX": 196.5723910133667,
            "offsetY": 143.32399142840148,
            "zoom": 76.41405779564307,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e1": {
                "nodeID": "5f9f562f11b31520c2a2a6e1",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e2",
                      "id": "5fde75904a001a20aa671626"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e2": {
                "nodeID": "5f9f562f11b31520c2a2a6e2",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "You said help. Do you want to continue?"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e4",
                      "id": "5fde75904a001a20aa671627"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e3": {
                "nodeID": "5f9f562f11b31520c2a2a6e3",
                "type": "block",
                "coords": [
                  808.6506721313523,
                  121.24568139701532
                ],
                "data": {
                  "name": "Help Message",
                  "color": "standard",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e2",
                    "5f9f562f11b31520c2a2a6e4"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e4": {
                "nodeID": "5f9f562f11b31520c2a2a6e4",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": "Do you want to continue?"
                      },
                      {
                        "voice": "Alexa",
                        "content": "Please say yes or no."
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671628"
                    },
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671629"
                    },
                    {
                      "type": 2,
                      "target": "5f9f562f11b31520c2a2a6e6",
                      "id": "5fde75904a001a20aa67162a"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e5": {
                "nodeID": "5f9f562f11b31520c2a2a6e5",
                "type": "exit",
                "data": {
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e6": {
                "nodeID": "5f9f562f11b31520c2a2a6e6",
                "type": "block",
                "coords": [
                  1295.0066750587603,
                  408.4923354011805
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5fde75c44a001a20aa67166d",
                    "5f9f562f11b31520c2a2a6e5"
                  ]
                }
              },
              "5fde75c44a001a20aa67166d": {
                "nodeID": "5fde75c44a001a20aa67166d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Bye for now."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e5",
                      "id": "5fde75c44a001a20aa671670"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          },
          "6047b787d03e580009e467e5": {
            "_id": "6047b787d03e580009e467e5",
            "name": "End Session",
            "offsetX": 206.51942553425963,
            "offsetY": 119.61838012311347,
            "zoom": 93.10542690398123,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e7": {
                "nodeID": "5f9f562f11b31520c2a2a6e7",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e8",
                      "id": "5fde6fe15bc1c56319fad3b2"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e8": {
                "nodeID": "5f9f562f11b31520c2a2a6e8",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Okay, this session is now ending."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6ea",
                      "id": "5fde6fe15bc1c56319fad3b3"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e9": {
                "nodeID": "5f9f562f11b31520c2a2a6e9",
                "type": "block",
                "coords": [
                  805.9688890631405,
                  120.94792332948695
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e8",
                    "5f9f562f11b31520c2a2a6ea"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6ea": {
                "nodeID": "5f9f562f11b31520c2a2a6ea",
                "type": "exit",
                "data": {
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde6fe15bc1c56319fad3b4"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          }
        }
      }`
}

function getValidDiagramExtraNodes(){
    return `{
        "project": {
          "_id": "6047b78770cbad001bef024b",
          "name": "test",
          "teamID": "peEqRl9kDw",
          "devVersion": "6047b787d03e580009e467e3",
          "platform": "alexa",
          "platformData": {
            "products": []
          },
          "members": [],
          "image": "",
          "linkType": "STRAIGHT",
          "creatorID": 45143
        },
        "version": {
          "_id": "6047b787d03e580009e467e3",
          "name": "Initial Version",
          "projectID": "6047b78770cbad001bef024b",
          "variables": [
            "sessions",
            "user_id",
            "timestamp",
            "platform",
            "locale"
          ],
          "platformData": {
            "slots": [],
            "intents": [],
            "settings": {
              "events": null,
              "customInterface": false,
              "session": {
                "type": "restart"
              },
              "repeat": "ALL",
              "accountLinking": null,
              "error": null
            },
            "publishing": {
              "summary": "",
              "invocations": [
                "open test",
                "start test",
                "launch test"
              ],
              "smallIcon": "",
              "largeIcon": "",
              "hasAds": false,
              "personal": false,
              "forExport": true,
              "invocationName": "test",
              "hasPurchase": false,
              "forChildren": false,
              "description": "",
              "instructions": "",
              "privacyPolicy": "https://creator.voiceflow.com/creator/terms?name=Thow&skill=test&children=false",
              "termsAndConditions": "https://creator.voiceflow.com/creator/terms?name=Thow&skill=test&children=false",
              "keywords": "",
              "category": "",
              "locales": [
                "en-US"
              ],
              "updatesDescription": null
            },
            "status": {
              "stage": "DEV"
            }
          },
          "rootDiagramID": "6047b787d03e580009e467e4",
          "creatorID": 45143,
          "prototype": {
            "data": {
              "name": "test",
              "locales": [
                "en-US"
              ]
            },
            "model": {
              "intents": [
                {
                  "key": "VF.NO",
                  "name": "VF.NO",
                  "inputs": [
                    {
                      "text": "no"
                    },
                    {
                      "text": "nope"
                    },
                    {
                      "text": "nay"
                    },
                    {
                      "text": "nah"
                    },
                    {
                      "text": "no way"
                    },
                    {
                      "text": "negative"
                    }
                  ]
                },
                {
                  "key": "VF.YES",
                  "name": "VF.YES",
                  "inputs": [
                    {
                      "text": "yes"
                    },
                    {
                      "text": "yea"
                    },
                    {
                      "text": "ok"
                    },
                    {
                      "text": "okay"
                    },
                    {
                      "text": "yup"
                    },
                    {
                      "text": "ya"
                    },
                    {
                      "text": "sure"
                    }
                  ]
                },
                {
                  "key": "VF.STOP",
                  "name": "VF.STOP",
                  "inputs": [
                    {
                      "text": "stop"
                    }
                  ]
                },
                {
                  "key": "VF.HELP",
                  "name": "VF.HELP",
                  "inputs": [
                    {
                      "text": "help"
                    },
                    {
                      "text": "help me"
                    },
                    {
                      "text": "i need help"
                    }
                  ]
                },
                {
                  "key": "VF.CANCEL",
                  "name": "VF.CANCEL",
                  "inputs": [
                    {
                      "text": "cancel"
                    }
                  ]
                }
              ],
              "slots": []
            },
            "context": {
              "stack": [
                {
                  "storage": {},
                  "variables": {},
                  "programID": "6047b787d03e580009e467e4"
                }
              ]
            },
            "settings": {}
          }
        },
        "diagrams": {
          "6047b787d03e580009e467e4": {
            "_id": "6047b787d03e580009e467e4",
            "name": "ROOT",
            "offsetX": 263.18284900916944,
            "offsetY": -56.55563812481489,
            "zoom": 68.3333333333333,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6de": {
                "nodeID": "5f9f562f11b31520c2a2a6de",
                "type": "start",
                "coords": [
                  -910.8231707317079,
                  -157.1646341463417
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "6047d71d264a0a69f1c8a217",
                      "id": "5fde6fac5bc1c56319fad39b"
                    }
                  ],
                  "steps": [
                    "5f9f562f11b31520c2a2a6df",
                    "5f9f562f11b31520c2a2a6e0",
                    "5fde6fb05bc1c56319fad3a0"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6df": {
                "nodeID": "5f9f562f11b31520c2a2a6df",
                "type": "command",
                "data": {
                  "name": "Help",
                  "intent": "AMAZON.HelpIntent",
                  "diagramID": "6047b787d03e580009e467e6",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e0": {
                "nodeID": "5f9f562f11b31520c2a2a6e0",
                "type": "command",
                "data": {
                  "name": "Stop",
                  "intent": "AMAZON.StopIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5fde6fb05bc1c56319fad3a0": {
                "nodeID": "5fde6fb05bc1c56319fad3a0",
                "type": "command",
                "data": {
                  "name": "Cancel",
                  "intent": "AMAZON.CancelIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "6047d71d264a0a69f1c8a22a": {
                "nodeID": "6047d71d264a0a69f1c8a22a",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": "Sorry I did not hear that.  What did you say?"
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "chips": null,
                  "ports": [
                    {
                      "type": "else",
                      "target": null,
                      "id": "6047d71d264a0a69f1c8a22b"
                    },
                    {
                      "type": "1",
                      "target": "6047d74e264a0a69f1c8a26a",
                      "id": "6047d71d264a0a69f1c8a22c"
                    },
                    {
                      "type": "2",
                      "target": "6047d72b264a0a69f1c8a25d",
                      "id": "6047d71d264a0a69f1c8a22d"
                    }
                  ]
                }
              },
              "6047d71d264a0a69f1c8a225": {
                "nodeID": "6047d71d264a0a69f1c8a225",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": "Sorry I did not hear that.  What did you say?"
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "chips": null,
                  "ports": [
                    {
                      "type": "else",
                      "target": null,
                      "id": "6047d71d264a0a69f1c8a226"
                    },
                    {
                      "type": "1",
                      "target": "6047d74e264a0a69f1c8a26a",
                      "id": "6047d71d264a0a69f1c8a227"
                    },
                    {
                      "type": "2",
                      "target": "6047d72b264a0a69f1c8a25d",
                      "id": "6047d71d264a0a69f1c8a228"
                    }
                  ]
                }
              },
              "6047d71d264a0a69f1c8a222": {
                "nodeID": "6047d71d264a0a69f1c8a222",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "QUESTION 2"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "6047d71d264a0a69f1c8a213",
                      "id": "6047d71d264a0a69f1c8a223"
                    }
                  ]
                }
              },
              "6047d71d264a0a69f1c8a21d": {
                "nodeID": "6047d71d264a0a69f1c8a21d",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": "Sorry I did not hear that.  What did you say?"
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "chips": null,
                  "ports": [
                    {
                      "type": "else",
                      "target": null,
                      "id": "6047d71d264a0a69f1c8a21e"
                    },
                    {
                      "type": "1",
                      "target": "6047d71d264a0a69f1c8a20d",
                      "id": "6047d71d264a0a69f1c8a21f"
                    },
                    {
                      "type": "2",
                      "target": "6047d72b264a0a69f1c8a25a",
                      "id": "6047d71d264a0a69f1c8a220"
                    }
                  ]
                }
              },
              "6047d71d264a0a69f1c8a21a": {
                "nodeID": "6047d71d264a0a69f1c8a21a",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "QUESTION 1"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "6047d71d264a0a69f1c8a22a",
                      "id": "6047d71d264a0a69f1c8a21b"
                    }
                  ]
                }
              },
              "6047d71d264a0a69f1c8a217": {
                "nodeID": "6047d71d264a0a69f1c8a217",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "GREETINGS"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "6047d71d264a0a69f1c8a21d",
                      "id": "6047d71d264a0a69f1c8a218"
                    }
                  ]
                }
              },
              "6047d71d264a0a69f1c8a215": {
                "nodeID": "6047d71d264a0a69f1c8a215",
                "type": "block",
                "coords": [
                  1415.6837781177712,
                  -47.81228568554569
                ],
                "data": {
                  "name": "Yes / No Response",
                  "color": "standard",
                  "steps": [
                    "6047d71d264a0a69f1c8a22a"
                  ]
                }
              },
              "6047d71d264a0a69f1c8a213": {
                "nodeID": "6047d71d264a0a69f1c8a213",
                "type": "block",
                "coords": [
                  1385.138651174837,
                  418.2206788215517
                ],
                "data": {
                  "name": "Yes / No Response",
                  "color": "standard",
                  "steps": [
                    "6047d71d264a0a69f1c8a225"
                  ]
                }
              },
              "6047d71d264a0a69f1c8a211": {
                "nodeID": "6047d71d264a0a69f1c8a211",
                "type": "block",
                "coords": [
                  810.2410342955736,
                  356.3796577340614
                ],
                "data": {
                  "name": "3",
                  "color": "standard",
                  "steps": [
                    "6047d71d264a0a69f1c8a222"
                  ]
                }
              },
              "6047d71d264a0a69f1c8a20f": {
                "nodeID": "6047d71d264a0a69f1c8a20f",
                "type": "block",
                "coords": [
                  -306.9395331672554,
                  439.5654730939626
                ],
                "data": {
                  "name": "Yes / No Response copy",
                  "color": "standard",
                  "steps": [
                    "6047d71d264a0a69f1c8a21d"
                  ]
                }
              },
              "6047d71d264a0a69f1c8a20d": {
                "nodeID": "6047d71d264a0a69f1c8a20d",
                "type": "block",
                "coords": [
                  275.1103198347463,
                  90.55966314851955
                ],
                "data": {
                  "name": "2",
                  "color": "standard",
                  "steps": [
                    "6047d71d264a0a69f1c8a21a"
                  ]
                }
              },
              "6047d71d264a0a69f1c8a20b": {
                "nodeID": "6047d71d264a0a69f1c8a20b",
                "type": "block",
                "coords": [
                  -407.9262630226558,
                  -288.6709224847483
                ],
                "data": {
                  "name": "1",
                  "color": "standard",
                  "steps": [
                    "6047d71d264a0a69f1c8a217"
                  ]
                }
              },
              "6047d72b264a0a69f1c8a25a": {
                "nodeID": "6047d72b264a0a69f1c8a25a",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "FINISHED"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047d72b264a0a69f1c8a25c"
                    }
                  ]
                }
              },
              "6047d72b264a0a69f1c8a25d": {
                "nodeID": "6047d72b264a0a69f1c8a25d",
                "type": "block",
                "coords": [
                  1628.5129038890207,
                  853.9838606704608
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047d72b264a0a69f1c8a25a"
                  ]
                }
              },
              "6047d74e264a0a69f1c8a267": {
                "nodeID": "6047d74e264a0a69f1c8a267",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "YES"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047d74e264a0a69f1c8a269"
                    }
                  ]
                }
              },
              "6047d74e264a0a69f1c8a26a": {
                "nodeID": "6047d74e264a0a69f1c8a26a",
                "type": "block",
                "coords": [
                  2178.756806328046,
                  117.88629969485112
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047d74e264a0a69f1c8a267"
                  ]
                }
              }
            },
            "children": [
              "6047b787d03e580009e467e6",
              "6047b787d03e580009e467e5"
            ],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615320936
          },
          "6047b787d03e580009e467e6": {
            "_id": "6047b787d03e580009e467e6",
            "name": "Help User",
            "offsetX": 196.5723910133667,
            "offsetY": 143.32399142840148,
            "zoom": 76.41405779564307,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e1": {
                "nodeID": "5f9f562f11b31520c2a2a6e1",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e2",
                      "id": "5fde75904a001a20aa671626"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e2": {
                "nodeID": "5f9f562f11b31520c2a2a6e2",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "You said help. Do you want to continue?"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e4",
                      "id": "5fde75904a001a20aa671627"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e3": {
                "nodeID": "5f9f562f11b31520c2a2a6e3",
                "type": "block",
                "coords": [
                  808.6506721313523,
                  121.24568139701532
                ],
                "data": {
                  "name": "Help Message",
                  "color": "standard",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e2",
                    "5f9f562f11b31520c2a2a6e4"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e4": {
                "nodeID": "5f9f562f11b31520c2a2a6e4",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": "Do you want to continue?"
                      },
                      {
                        "voice": "Alexa",
                        "content": "Please say yes or no."
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671628"
                    },
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671629"
                    },
                    {
                      "type": 2,
                      "target": "5f9f562f11b31520c2a2a6e6",
                      "id": "5fde75904a001a20aa67162a"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e5": {
                "nodeID": "5f9f562f11b31520c2a2a6e5",
                "type": "exit",
                "data": {
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e6": {
                "nodeID": "5f9f562f11b31520c2a2a6e6",
                "type": "block",
                "coords": [
                  1295.0066750587603,
                  408.4923354011805
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5fde75c44a001a20aa67166d",
                    "5f9f562f11b31520c2a2a6e5"
                  ]
                }
              },
              "5fde75c44a001a20aa67166d": {
                "nodeID": "5fde75c44a001a20aa67166d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Bye for now."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e5",
                      "id": "5fde75c44a001a20aa671670"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          },
          "6047b787d03e580009e467e5": {
            "_id": "6047b787d03e580009e467e5",
            "name": "End Session",
            "offsetX": 206.51942553425963,
            "offsetY": 119.61838012311347,
            "zoom": 93.10542690398123,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e7": {
                "nodeID": "5f9f562f11b31520c2a2a6e7",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e8",
                      "id": "5fde6fe15bc1c56319fad3b2"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e8": {
                "nodeID": "5f9f562f11b31520c2a2a6e8",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Okay, this session is now ending."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6ea",
                      "id": "5fde6fe15bc1c56319fad3b3"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e9": {
                "nodeID": "5f9f562f11b31520c2a2a6e9",
                "type": "block",
                "coords": [
                  805.9688890631405,
                  120.94792332948695
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e8",
                    "5f9f562f11b31520c2a2a6ea"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6ea": {
                "nodeID": "5f9f562f11b31520c2a2a6ea",
                "type": "exit",
                "data": {
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde6fe15bc1c56319fad3b4"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          }
        }
      }`
}

function getValidDiagramExtraNodesUBF(){
    return `{
        "project": {
          "name": "test",
          "nodes": {
            "5f9f562f11b31520c2a2a6de": {
              "next": "6047d71d264a0a69f1c8a217",
              "type": "start"
            },
            "6047d71d264a0a69f1c8a217": {
              "content": "GREETINGS",
              "next": "6047d71d264a0a69f1c8a21d",
              "type": "speak"
            },
            "6047d71d264a0a69f1c8a21a": {
              "content": "QUESTION 1",
              "next": "6047d71d264a0a69f1c8a22a",
              "type": "speak"
            },
            "6047d71d264a0a69f1c8a21d": {
              "options": [
                {
                  "next": "6047d71d264a0a69f1c8a21a",
                  "type": "yes"
                },
                {
                  "next": "6047d72b264a0a69f1c8a25a",
                  "type": "no"
                }
              ],
              "type": "interaction"
            },
            "6047d71d264a0a69f1c8a222": {
              "content": "QUESTION 2",
              "next": "6047d71d264a0a69f1c8a225",
              "type": "speak"
            },
            "6047d71d264a0a69f1c8a225": {
              "options": [
                {
                  "next": "6047d74e264a0a69f1c8a267",
                  "type": "yes"
                },
                {
                  "next": "6047d72b264a0a69f1c8a25a",
                  "type": "no"
                }
              ],
              "type": "interaction"
            },
            "6047d71d264a0a69f1c8a22a": {
              "options": [
                {
                  "next": "6047d74e264a0a69f1c8a267",
                  "type": "yes"
                },
                {
                  "next": "6047d72b264a0a69f1c8a25a",
                  "type": "no"
                }
              ],
              "type": "interaction"
            },
            "6047d72b264a0a69f1c8a25a": {
              "content": "FINISHED",
              "next": null,
              "type": "speak"
            },
            "6047d74e264a0a69f1c8a267": {
              "content": "YES",
              "next": null,
              "type": "speak"
            }
          }
        }
      }`
}

function getInvalidSpeak(){
    return `{
        "project": {
          "_id": "6047b78770cbad001bef024b",
          "name": "test",
          "teamID": "peEqRl9kDw",
          "devVersion": "6047b787d03e580009e467e3",
          "platform": "alexa",
          "platformData": {
            "products": []
          },
          "members": [],
          "image": "",
          "linkType": "STRAIGHT",
          "creatorID": 45143
        },
        "version": {
          "_id": "6047b787d03e580009e467e3",
          "name": "Initial Version",
          "projectID": "6047b78770cbad001bef024b",
          "variables": [
            "sessions",
            "user_id",
            "timestamp",
            "platform",
            "locale"
          ],
          "platformData": {
            "slots": [],
            "intents": [],
            "settings": {
              "events": null,
              "customInterface": false,
              "session": {
                "type": "restart"
              },
              "repeat": "ALL",
              "accountLinking": null,
              "error": null
            },
            "publishing": {
              "summary": "",
              "invocations": [
                "open test",
                "start test",
                "launch test"
              ],
              "smallIcon": "",
              "largeIcon": "",
              "hasAds": false,
              "personal": false,
              "forExport": true,
              "invocationName": "test",
              "hasPurchase": false,
              "forChildren": false,
              "description": "",
              "instructions": "",
              "privacyPolicy": "",
              "termsAndConditions": "",
              "keywords": "",
              "category": "",
              "locales": [
                "en-US"
              ],
              "updatesDescription": null
            },
            "status": {
              "stage": "DEV"
            }
          },
          "rootDiagramID": "6047b787d03e580009e467e4",
          "creatorID": 45143,
          "prototype": {
            "data": {
              "name": "test",
              "locales": [
                "en-US"
              ]
            },
            "model": {
              "intents": [
                {
                  "key": "VF.NO",
                  "name": "VF.NO",
                  "inputs": [
                    {
                      "text": "no"
                    },
                    {
                      "text": "nope"
                    },
                    {
                      "text": "nay"
                    },
                    {
                      "text": "nah"
                    },
                    {
                      "text": "no way"
                    },
                    {
                      "text": "negative"
                    }
                  ]
                },
                {
                  "key": "VF.YES",
                  "name": "VF.YES",
                  "inputs": [
                    {
                      "text": "yes"
                    },
                    {
                      "text": "yea"
                    },
                    {
                      "text": "ok"
                    },
                    {
                      "text": "okay"
                    },
                    {
                      "text": "yup"
                    },
                    {
                      "text": "ya"
                    },
                    {
                      "text": "sure"
                    }
                  ]
                },
                {
                  "key": "VF.STOP",
                  "name": "VF.STOP",
                  "inputs": [
                    {
                      "text": "stop"
                    }
                  ]
                },
                {
                  "key": "VF.HELP",
                  "name": "VF.HELP",
                  "inputs": [
                    {
                      "text": "help"
                    },
                    {
                      "text": "help me"
                    },
                    {
                      "text": "i need help"
                    }
                  ]
                },
                {
                  "key": "VF.CANCEL",
                  "name": "VF.CANCEL",
                  "inputs": [
                    {
                      "text": "cancel"
                    }
                  ]
                }
              ],
              "slots": []
            },
            "context": {
              "stack": [
                {
                  "storage": {},
                  "variables": {},
                  "programID": "6047b787d03e580009e467e4"
                }
              ]
            },
            "settings": {}
          }
        },
        "diagrams": {
          "6047b787d03e580009e467e4": {
            "_id": "6047b787d03e580009e467e4",
            "name": "ROOT",
            "offsetX": 236.2,
            "offsetY": 91.60000000000002,
            "zoom": 80,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6de": {
                "nodeID": "5f9f562f11b31520c2a2a6de",
                "type": "start",
                "coords": [
                  226.25,
                  106.25
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b8ab9bdc55674868041e",
                      "id": "5fde6fac5bc1c56319fad39b"
                    }
                  ],
                  "steps": [
                    "5f9f562f11b31520c2a2a6df",
                    "5f9f562f11b31520c2a2a6e0",
                    "5fde6fb05bc1c56319fad3a0"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6df": {
                "nodeID": "5f9f562f11b31520c2a2a6df",
                "type": "command",
                "data": {
                  "name": "Help",
                  "intent": "AMAZON.HelpIntent",
                  "diagramID": "6047b787d03e580009e467e6",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e0": {
                "nodeID": "5f9f562f11b31520c2a2a6e0",
                "type": "command",
                "data": {
                  "name": "Stop",
                  "intent": "AMAZON.StopIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5fde6fb05bc1c56319fad3a0": {
                "nodeID": "5fde6fb05bc1c56319fad3a0",
                "type": "command",
                "data": {
                  "name": "Cancel",
                  "intent": "AMAZON.CancelIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "6047b78c9bdc556748680285": {
                "nodeID": "6047b78c9bdc556748680285",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": ""
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "chips": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b78c9bdc556748680287"
                    },
                    {
                      "type": "",
                      "target": "6047b7ac9bdc556748680293",
                      "id": "6047b78c9bdc556748680288"
                    },
                    {
                      "type": 2,
                      "target": "6047b7ae9bdc55674868029d",
                      "id": "6047b7939bdc556748680290"
                    }
                  ]
                }
              },
              "6047b78c9bdc556748680289": {
                "nodeID": "6047b78c9bdc556748680289",
                "type": "block",
                "coords": [
                  1027.25,
                  191.49999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b78c9bdc556748680285"
                  ]
                }
              },
              "6047b7ac9bdc556748680293": {
                "nodeID": "6047b7ac9bdc556748680293",
                "type": "speak"
              },
              "6047b7ac9bdc556748680296": {
                "nodeID": "6047b7ac9bdc556748680296",
                "type": "block",
                "coords": [
                  1603.4999999999998,
                  118.99999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ac9bdc556748680293"
                  ]
                }
              },
              "6047b7ae9bdc55674868029d": {
                "nodeID": "6047b7ae9bdc55674868029d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "No"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ae9bdc55674868029f"
                    }
                  ]
                }
              },
              "6047b7ae9bdc5567486802a0": {
                "nodeID": "6047b7ae9bdc5567486802a0",
                "type": "block",
                "coords": [
                  1629.7499999999998,
                  370.24999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ae9bdc55674868029d"
                  ]
                }
              },
              "6047b8ab9bdc55674868041b": {
                "nodeID": "6047b8ab9bdc55674868041b",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Hello"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b78c9bdc556748680285",
                      "id": "6047b8ab9bdc55674868041d"
                    }
                  ]
                }
              },
              "6047b8ab9bdc55674868041e": {
                "nodeID": "6047b8ab9bdc55674868041e",
                "type": "block",
                "coords": [
                  625.9999999999999,
                  220.49999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b8ab9bdc55674868041b"
                  ]
                }
              }
            },
            "children": [
              "6047b787d03e580009e467e6",
              "6047b787d03e580009e467e5"
            ],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615313124
          },
          "6047b787d03e580009e467e6": {
            "_id": "6047b787d03e580009e467e6",
            "name": "Help User",
            "offsetX": 196.5723910133667,
            "offsetY": 143.32399142840148,
            "zoom": 76.41405779564307,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e1": {
                "nodeID": "5f9f562f11b31520c2a2a6e1",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e2",
                      "id": "5fde75904a001a20aa671626"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e2": {
                "nodeID": "5f9f562f11b31520c2a2a6e2",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "You said help. Do you want to continue?"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e4",
                      "id": "5fde75904a001a20aa671627"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e3": {
                "nodeID": "5f9f562f11b31520c2a2a6e3",
                "type": "block",
                "coords": [
                  808.6506721313523,
                  121.24568139701532
                ],
                "data": {
                  "name": "Help Message",
                  "color": "standard",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e2",
                    "5f9f562f11b31520c2a2a6e4"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e4": {
                "nodeID": "5f9f562f11b31520c2a2a6e4",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": "Do you want to continue?"
                      },
                      {
                        "voice": "Alexa",
                        "content": "Please say yes or no."
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671628"
                    },
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671629"
                    },
                    {
                      "type": 2,
                      "target": "5f9f562f11b31520c2a2a6e6",
                      "id": "5fde75904a001a20aa67162a"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e5": {
                "nodeID": "5f9f562f11b31520c2a2a6e5",
                "type": "exit",
                "data": {
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e6": {
                "nodeID": "5f9f562f11b31520c2a2a6e6",
                "type": "block",
                "coords": [
                  1295.0066750587603,
                  408.4923354011805
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5fde75c44a001a20aa67166d",
                    "5f9f562f11b31520c2a2a6e5"
                  ]
                }
              },
              "5fde75c44a001a20aa67166d": {
                "nodeID": "5fde75c44a001a20aa67166d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Bye for now."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e5",
                      "id": "5fde75c44a001a20aa671670"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          },
          "6047b787d03e580009e467e5": {
            "_id": "6047b787d03e580009e467e5",
            "name": "End Session",
            "offsetX": 206.51942553425963,
            "offsetY": 119.61838012311347,
            "zoom": 93.10542690398123,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e7": {
                "nodeID": "5f9f562f11b31520c2a2a6e7",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e8",
                      "id": "5fde6fe15bc1c56319fad3b2"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e8": {
                "nodeID": "5f9f562f11b31520c2a2a6e8",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6ea",
                      "id": "5fde6fe15bc1c56319fad3b3"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e9": {
                "nodeID": "5f9f562f11b31520c2a2a6e9",
                "type": "block",
                "coords": [
                  805.9688890631405,
                  120.94792332948695
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e8",
                    "5f9f562f11b31520c2a2a6ea"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6ea": {
                "nodeID": "5f9f562f11b31520c2a2a6ea",
                "type": "exit",
                "data": {
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde6fe15bc1c56319fad3b4"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          }
        }
      }`
}

function getInvalidChoice(){
    return `{
        "project": {
          "_id": "6047b78770cbad001bef024b",
          "name": "test",
          "teamID": "peEqRl9kDw",
          "devVersion": "6047b787d03e580009e467e3",
          "platform": "alexa",
          "platformData": {
            "products": []
          },
          "members": [],
          "image": "",
          "linkType": "STRAIGHT",
          "creatorID": 45143
        },
        "version": {
          "_id": "6047b787d03e580009e467e3",
          "name": "Initial Version",
          "projectID": "6047b78770cbad001bef024b",
          "variables": [
            "sessions",
            "user_id",
            "timestamp",
            "platform",
            "locale"
          ],
          "platformData": {
            "slots": [],
            "intents": [],
            "settings": {
              "events": null,
              "customInterface": false,
              "session": {
                "type": "restart"
              },
              "repeat": "ALL",
              "accountLinking": null,
              "error": null
            },
            "publishing": {
              "summary": "",
              "invocations": [
                "open test",
                "start test",
                "launch test"
              ],
              "smallIcon": "",
              "largeIcon": "",
              "hasAds": false,
              "personal": false,
              "forExport": true,
              "invocationName": "test",
              "hasPurchase": false,
              "forChildren": false,
              "description": "",
              "instructions": "",
              "privacyPolicy": "",
              "termsAndConditions": "",
              "keywords": "",
              "category": "",
              "locales": [
                "en-US"
              ],
              "updatesDescription": null
            },
            "status": {
              "stage": "DEV"
            }
          },
          "rootDiagramID": "6047b787d03e580009e467e4",
          "creatorID": 45143,
          "prototype": {
            "data": {
              "name": "test",
              "locales": [
                "en-US"
              ]
            },
            "model": {
              "intents": [
                {
                  "key": "VF.NO",
                  "name": "VF.NO",
                  "inputs": [
                    {
                      "text": "no"
                    },
                    {
                      "text": "nope"
                    },
                    {
                      "text": "nay"
                    },
                    {
                      "text": "nah"
                    },
                    {
                      "text": "no way"
                    },
                    {
                      "text": "negative"
                    }
                  ]
                },
                {
                  "key": "VF.YES",
                  "name": "VF.YES",
                  "inputs": [
                    {
                      "text": "yes"
                    },
                    {
                      "text": "yea"
                    },
                    {
                      "text": "ok"
                    },
                    {
                      "text": "okay"
                    },
                    {
                      "text": "yup"
                    },
                    {
                      "text": "ya"
                    },
                    {
                      "text": "sure"
                    }
                  ]
                },
                {
                  "key": "VF.STOP",
                  "name": "VF.STOP",
                  "inputs": [
                    {
                      "text": "stop"
                    }
                  ]
                },
                {
                  "key": "VF.HELP",
                  "name": "VF.HELP",
                  "inputs": [
                    {
                      "text": "help"
                    },
                    {
                      "text": "help me"
                    },
                    {
                      "text": "i need help"
                    }
                  ]
                },
                {
                  "key": "VF.CANCEL",
                  "name": "VF.CANCEL",
                  "inputs": [
                    {
                      "text": "cancel"
                    }
                  ]
                }
              ],
              "slots": []
            },
            "context": {
              "stack": [
                {
                  "storage": {},
                  "variables": {},
                  "programID": "6047b787d03e580009e467e4"
                }
              ]
            },
            "settings": {}
          }
        },
        "diagrams": {
          "6047b787d03e580009e467e4": {
            "_id": "6047b787d03e580009e467e4",
            "name": "ROOT",
            "offsetX": 236.2,
            "offsetY": 91.60000000000002,
            "zoom": 80,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6de": {
                "nodeID": "5f9f562f11b31520c2a2a6de",
                "type": "start",
                "coords": [
                  226.25,
                  106.25
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b8ab9bdc55674868041e",
                      "id": "5fde6fac5bc1c56319fad39b"
                    }
                  ],
                  "steps": [
                    "5f9f562f11b31520c2a2a6df",
                    "5f9f562f11b31520c2a2a6e0",
                    "5fde6fb05bc1c56319fad3a0"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6df": {
                "nodeID": "5f9f562f11b31520c2a2a6df",
                "type": "command",
                "data": {
                  "name": "Help",
                  "intent": "AMAZON.HelpIntent",
                  "diagramID": "6047b787d03e580009e467e6",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e0": {
                "nodeID": "5f9f562f11b31520c2a2a6e0",
                "type": "command",
                "data": {
                  "name": "Stop",
                  "intent": "AMAZON.StopIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5fde6fb05bc1c56319fad3a0": {
                "nodeID": "5fde6fb05bc1c56319fad3a0",
                "type": "command",
                "data": {
                  "name": "Cancel",
                  "intent": "AMAZON.CancelIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "6047b78c9bdc556748680285": {
                "nodeID": "6047b78c9bdc556748680285",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": ""
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "chips": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b78c9bdc556748680287"
                    },
                    {
                      "type": "",
                      "target": "6047b7ac9bdc556748680293",
                      "id": "6047b78c9bdc556748680288"
                    },
                    {
                      "type": 2,
                      "target": "6047b7ae9bdc55674868029d",
                      "id": "6047b7939bdc556748680290"
                    }
                  ]
                }
              },
              "6047b78c9bdc556748680289": {
                "nodeID": "6047b78c9bdc556748680289",
                "type": "block",
                "coords": [
                  1027.25,
                  191.49999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b78c9bdc556748680285"
                  ]
                }
              },
              "6047b7ac9bdc556748680293": {
                "nodeID": "6047b7ac9bdc556748680293",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Yes"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ac9bdc556748680295"
                    }
                  ]
                }
              },
              "6047b7ac9bdc556748680296": {
                "nodeID": "6047b7ac9bdc556748680296",
                "type": "block",
                "coords": [
                  1603.4999999999998,
                  118.99999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ac9bdc556748680293"
                  ]
                }
              },
              "6047b7ae9bdc55674868029d": {
                "nodeID": "6047b7ae9bdc55674868029d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "No"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ae9bdc55674868029f"
                    }
                  ]
                }
              },
              "6047b7ae9bdc5567486802a0": {
                "nodeID": "6047b7ae9bdc5567486802a0",
                "type": "block",
                "coords": [
                  1629.7499999999998,
                  370.24999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ae9bdc55674868029d"
                  ]
                }
              },
              "6047b8ab9bdc55674868041b": {
                "nodeID": "6047b8ab9bdc55674868041b",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Hello"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b78c9bdc556748680285",
                      "id": "6047b8ab9bdc55674868041d"
                    }
                  ]
                }
              },
              "6047b8ab9bdc55674868041e": {
                "nodeID": "6047b8ab9bdc55674868041e",
                "type": "block",
                "coords": [
                  625.9999999999999,
                  220.49999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b8ab9bdc55674868041b"
                  ]
                }
              }
            },
            "children": [
              "6047b787d03e580009e467e6",
              "6047b787d03e580009e467e5"
            ],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615313124
          },
          "6047b787d03e580009e467e6": {
            "_id": "6047b787d03e580009e467e6",
            "name": "Help User",
            "offsetX": 196.5723910133667,
            "offsetY": 143.32399142840148,
            "zoom": 76.41405779564307,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e1": {
                "nodeID": "5f9f562f11b31520c2a2a6e1",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e2",
                      "id": "5fde75904a001a20aa671626"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e2": {
                "nodeID": "5f9f562f11b31520c2a2a6e2",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "You said help. Do you want to continue?"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e4",
                      "id": "5fde75904a001a20aa671627"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e3": {
                "nodeID": "5f9f562f11b31520c2a2a6e3",
                "type": "block",
                "coords": [
                  808.6506721313523,
                  121.24568139701532
                ],
                "data": {
                  "name": "Help Message",
                  "color": "standard",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e2",
                    "5f9f562f11b31520c2a2a6e4"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e4": {
                "nodeID": "5f9f562f11b31520c2a2a6e4",
                "type": "interaction"
              },
              "5f9f562f11b31520c2a2a6e5": {
                "nodeID": "5f9f562f11b31520c2a2a6e5",
                "type": "exit",
                "data": {
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e6": {
                "nodeID": "5f9f562f11b31520c2a2a6e6",
                "type": "block",
                "coords": [
                  1295.0066750587603,
                  408.4923354011805
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5fde75c44a001a20aa67166d",
                    "5f9f562f11b31520c2a2a6e5"
                  ]
                }
              },
              "5fde75c44a001a20aa67166d": {
                "nodeID": "5fde75c44a001a20aa67166d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Bye for now."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e5",
                      "id": "5fde75c44a001a20aa671670"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          },
          "6047b787d03e580009e467e5": {
            "_id": "6047b787d03e580009e467e5",
            "name": "End Session",
            "offsetX": 206.51942553425963,
            "offsetY": 119.61838012311347,
            "zoom": 93.10542690398123,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e7": {
                "nodeID": "5f9f562f11b31520c2a2a6e7",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e8",
                      "id": "5fde6fe15bc1c56319fad3b2"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e8": {
                "nodeID": "5f9f562f11b31520c2a2a6e8",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Okay, this session is now ending."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6ea",
                      "id": "5fde6fe15bc1c56319fad3b3"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e9": {
                "nodeID": "5f9f562f11b31520c2a2a6e9",
                "type": "block",
                "coords": [
                  805.9688890631405,
                  120.94792332948695
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e8",
                    "5f9f562f11b31520c2a2a6ea"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6ea": {
                "nodeID": "5f9f562f11b31520c2a2a6ea",
                "type": "exit",
                "data": {
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde6fe15bc1c56319fad3b4"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          }
        }
      }`
}

function getInvalidStart(){
    return `{
        "project": {
          "_id": "6047b78770cbad001bef024b",
          "name": "test",
          "teamID": "peEqRl9kDw",
          "devVersion": "6047b787d03e580009e467e3",
          "platform": "alexa",
          "platformData": {
            "products": []
          },
          "members": [],
          "image": "",
          "linkType": "STRAIGHT",
          "creatorID": 45143
        },
        "version": {
          "_id": "6047b787d03e580009e467e3",
          "name": "Initial Version",
          "projectID": "6047b78770cbad001bef024b",
          "variables": [
            "sessions",
            "user_id",
            "timestamp",
            "platform",
            "locale"
          ],
          "platformData": {
            "slots": [],
            "intents": [],
            "settings": {
              "events": null,
              "customInterface": false,
              "session": {
                "type": "restart"
              },
              "repeat": "ALL",
              "accountLinking": null,
              "error": null
            },
            "publishing": {
              "summary": "",
              "invocations": [
                "open test",
                "start test",
                "launch test"
              ],
              "smallIcon": "",
              "largeIcon": "",
              "hasAds": false,
              "personal": false,
              "forExport": true,
              "invocationName": "test",
              "hasPurchase": false,
              "forChildren": false,
              "description": "",
              "instructions": "",
              "privacyPolicy": "",
              "termsAndConditions": "",
              "keywords": "",
              "category": "",
              "locales": [
                "en-US"
              ],
              "updatesDescription": null
            },
            "status": {
              "stage": "DEV"
            }
          },
          "rootDiagramID": "6047b787d03e580009e467e4",
          "creatorID": 45143,
          "prototype": {
            "data": {
              "name": "test",
              "locales": [
                "en-US"
              ]
            },
            "model": {
              "intents": [
                {
                  "key": "VF.NO",
                  "name": "VF.NO",
                  "inputs": [
                    {
                      "text": "no"
                    },
                    {
                      "text": "nope"
                    },
                    {
                      "text": "nay"
                    },
                    {
                      "text": "nah"
                    },
                    {
                      "text": "no way"
                    },
                    {
                      "text": "negative"
                    }
                  ]
                },
                {
                  "key": "VF.YES",
                  "name": "VF.YES",
                  "inputs": [
                    {
                      "text": "yes"
                    },
                    {
                      "text": "yea"
                    },
                    {
                      "text": "ok"
                    },
                    {
                      "text": "okay"
                    },
                    {
                      "text": "yup"
                    },
                    {
                      "text": "ya"
                    },
                    {
                      "text": "sure"
                    }
                  ]
                },
                {
                  "key": "VF.STOP",
                  "name": "VF.STOP",
                  "inputs": [
                    {
                      "text": "stop"
                    }
                  ]
                },
                {
                  "key": "VF.HELP",
                  "name": "VF.HELP",
                  "inputs": [
                    {
                      "text": "help"
                    },
                    {
                      "text": "help me"
                    },
                    {
                      "text": "i need help"
                    }
                  ]
                },
                {
                  "key": "VF.CANCEL",
                  "name": "VF.CANCEL",
                  "inputs": [
                    {
                      "text": "cancel"
                    }
                  ]
                }
              ],
              "slots": []
            },
            "context": {
              "stack": [
                {
                  "storage": {},
                  "variables": {},
                  "programID": "6047b787d03e580009e467e4"
                }
              ]
            },
            "settings": {}
          }
        },
        "diagrams": {
          "6047b787d03e580009e467e4": {
            "_id": "6047b787d03e580009e467e4",
            "name": "ROOT",
            "offsetX": 236.2,
            "offsetY": 91.60000000000002,
            "zoom": 80,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6de": {
                "nodeID": "5f9f562f11b31520c2a2a6de",
                "type": "start",
                "coords": [
                  226.25,
                  106.25
                ]
              },
              "5f9f562f11b31520c2a2a6df": {
                "nodeID": "5f9f562f11b31520c2a2a6df",
                "type": "command",
                "data": {
                  "name": "Help",
                  "intent": "AMAZON.HelpIntent",
                  "diagramID": "6047b787d03e580009e467e6",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e0": {
                "nodeID": "5f9f562f11b31520c2a2a6e0",
                "type": "command",
                "data": {
                  "name": "Stop",
                  "intent": "AMAZON.StopIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "5fde6fb05bc1c56319fad3a0": {
                "nodeID": "5fde6fb05bc1c56319fad3a0",
                "type": "command",
                "data": {
                  "name": "Cancel",
                  "intent": "AMAZON.CancelIntent",
                  "diagramID": "6047b787d03e580009e467e5",
                  "mappings": [],
                  "next": null,
                  "ports": []
                }
              },
              "6047b78c9bdc556748680285": {
                "nodeID": "6047b78c9bdc556748680285",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": ""
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "chips": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b78c9bdc556748680287"
                    },
                    {
                      "type": "",
                      "target": "6047b7ac9bdc556748680293",
                      "id": "6047b78c9bdc556748680288"
                    },
                    {
                      "type": 2,
                      "target": "6047b7ae9bdc55674868029d",
                      "id": "6047b7939bdc556748680290"
                    }
                  ]
                }
              },
              "6047b78c9bdc556748680289": {
                "nodeID": "6047b78c9bdc556748680289",
                "type": "block",
                "coords": [
                  1027.25,
                  191.49999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b78c9bdc556748680285"
                  ]
                }
              },
              "6047b7ac9bdc556748680293": {
                "nodeID": "6047b7ac9bdc556748680293",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Yes"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ac9bdc556748680295"
                    }
                  ]
                }
              },
              "6047b7ac9bdc556748680296": {
                "nodeID": "6047b7ac9bdc556748680296",
                "type": "block",
                "coords": [
                  1603.4999999999998,
                  118.99999999999997
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ac9bdc556748680293"
                  ]
                }
              },
              "6047b7ae9bdc55674868029d": {
                "nodeID": "6047b7ae9bdc55674868029d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "No"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "6047b7ae9bdc55674868029f"
                    }
                  ]
                }
              },
              "6047b7ae9bdc5567486802a0": {
                "nodeID": "6047b7ae9bdc5567486802a0",
                "type": "block",
                "coords": [
                  1629.7499999999998,
                  370.24999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b7ae9bdc55674868029d"
                  ]
                }
              },
              "6047b8ab9bdc55674868041b": {
                "nodeID": "6047b8ab9bdc55674868041b",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Hello"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "6047b78c9bdc556748680285",
                      "id": "6047b8ab9bdc55674868041d"
                    }
                  ]
                }
              },
              "6047b8ab9bdc55674868041e": {
                "nodeID": "6047b8ab9bdc55674868041e",
                "type": "block",
                "coords": [
                  625.9999999999999,
                  220.49999999999994
                ],
                "data": {
                  "name": "Block",
                  "color": "standard",
                  "steps": [
                    "6047b8ab9bdc55674868041b"
                  ]
                }
              }
            },
            "children": [
              "6047b787d03e580009e467e6",
              "6047b787d03e580009e467e5"
            ],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615313124
          },
          "6047b787d03e580009e467e6": {
            "_id": "6047b787d03e580009e467e6",
            "name": "Help User",
            "offsetX": 196.5723910133667,
            "offsetY": 143.32399142840148,
            "zoom": 76.41405779564307,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e1": {
                "nodeID": "5f9f562f11b31520c2a2a6e1",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e2",
                      "id": "5fde75904a001a20aa671626"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e2": {
                "nodeID": "5f9f562f11b31520c2a2a6e2",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "You said help. Do you want to continue?"
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e4",
                      "id": "5fde75904a001a20aa671627"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e3": {
                "nodeID": "5f9f562f11b31520c2a2a6e3",
                "type": "block",
                "coords": [
                  808.6506721313523,
                  121.24568139701532
                ],
                "data": {
                  "name": "Help Message",
                  "color": "standard",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e2",
                    "5f9f562f11b31520c2a2a6e4"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e4": {
                "nodeID": "5f9f562f11b31520c2a2a6e4",
                "type": "interaction",
                "data": {
                  "name": "Choice",
                  "else": {
                    "type": "reprompt",
                    "randomize": false,
                    "reprompts": [
                      {
                        "voice": "Alexa",
                        "content": "Do you want to continue?"
                      },
                      {
                        "voice": "Alexa",
                        "content": "Please say yes or no."
                      }
                    ]
                  },
                  "choices": [
                    {
                      "intent": "AMAZON.YesIntent",
                      "mappings": []
                    },
                    {
                      "intent": "AMAZON.NoIntent",
                      "mappings": []
                    }
                  ],
                  "reprompt": null,
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671628"
                    },
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde75904a001a20aa671629"
                    },
                    {
                      "type": 2,
                      "target": "5f9f562f11b31520c2a2a6e6",
                      "id": "5fde75904a001a20aa67162a"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e5": {
                "nodeID": "5f9f562f11b31520c2a2a6e5",
                "type": "exit",
                "data": {
                  "ports": []
                }
              },
              "5f9f562f11b31520c2a2a6e6": {
                "nodeID": "5f9f562f11b31520c2a2a6e6",
                "type": "block",
                "coords": [
                  1295.0066750587603,
                  408.4923354011805
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5fde75c44a001a20aa67166d",
                    "5f9f562f11b31520c2a2a6e5"
                  ]
                }
              },
              "5fde75c44a001a20aa67166d": {
                "nodeID": "5fde75c44a001a20aa67166d",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Bye for now."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e5",
                      "id": "5fde75c44a001a20aa671670"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          },
          "6047b787d03e580009e467e5": {
            "_id": "6047b787d03e580009e467e5",
            "name": "End Session",
            "offsetX": 206.51942553425963,
            "offsetY": 119.61838012311347,
            "zoom": 93.10542690398123,
            "variables": [],
            "nodes": {
              "5f9f562f11b31520c2a2a6e7": {
                "nodeID": "5f9f562f11b31520c2a2a6e7",
                "type": "start",
                "coords": [
                  360,
                  120
                ],
                "data": {
                  "name": "Start",
                  "color": "standard",
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6e8",
                      "id": "5fde6fe15bc1c56319fad3b2"
                    }
                  ],
                  "steps": []
                }
              },
              "5f9f562f11b31520c2a2a6e8": {
                "nodeID": "5f9f562f11b31520c2a2a6e8",
                "type": "speak",
                "data": {
                  "randomize": false,
                  "dialogs": [
                    {
                      "voice": "Alexa",
                      "content": "Okay, this session is now ending."
                    }
                  ],
                  "ports": [
                    {
                      "type": "",
                      "target": "5f9f562f11b31520c2a2a6ea",
                      "id": "5fde6fe15bc1c56319fad3b3"
                    }
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6e9": {
                "nodeID": "5f9f562f11b31520c2a2a6e9",
                "type": "block",
                "coords": [
                  805.9688890631405,
                  120.94792332948695
                ],
                "data": {
                  "name": "Exit",
                  "color": "red",
                  "steps": [
                    "5f9f562f11b31520c2a2a6e8",
                    "5f9f562f11b31520c2a2a6ea"
                  ]
                }
              },
              "5f9f562f11b31520c2a2a6ea": {
                "nodeID": "5f9f562f11b31520c2a2a6ea",
                "type": "exit",
                "data": {
                  "ports": [
                    {
                      "type": "",
                      "target": null,
                      "id": "5fde6fe15bc1c56319fad3b4"
                    }
                  ]
                }
              }
            },
            "children": [],
            "versionID": "6047b787d03e580009e467e3",
            "creatorID": 45143,
            "modified": 1615312775
          }
        }
      }`
}


module.exports = {getValidDiagram, getValidDiagramUBF, getMissingRootNode, getMissingRootNodes, getUnsupportedType, getMoreThanTwoChoices, getLessThanTwoChoices, getMissingPorts, getValidDiagramExtraNodes, getValidDiagramExtraNodesUBF, getInvalidSpeak, getInvalidChoice, getInvalidStart}