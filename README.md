[![NPM](https://nodei.co/npm/vf-to-ubf.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vf-to-ubf/)

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Tests](https://github.com/tahmed4/vf-to-ubf/actions/workflows/test.yml/badge.svg)](https://github.com/tahmed4/vf-to-ubf/actions/workflows/test.yml)

# What is this?

Take any Voiceflow file (.vf) and convert it into a universal bot format to make it easier for you to extract and build from a conversation diagram.

## Documentation

The documentation for the vf-to-ubf can be found [here][apidocs].

## Versions

### Supported Node.js Versions

This package supports the following Node.js implementations:

* Node.js 6
* Node.js 8
* Node.js 10
* Node.js 12
* Node.js 14

# Installation

`npm i vf-to-ubf`

# Sample Usage


```
const voiceflowToBotFormat require('vf-to-ubf');
var fs = require('fs');

diagram = fs.readFileSync("./VoiceflowFile.vf")

universal_format = await voiceflowToBotFormat(diagram)

```

Where `diagram` is your Voiceflow file in JSON format.

# Format Example

A converted diagram would look something like this.

```
console.log(universal_format) 
->
{
   "project":{
      "name":"A Fantastic Project",
      "nodes":{
         "0cc175b9c0f1b6a831c399e269772661":{
            "type":"start",
            "next":"92eb5ffee6ae2fec3ad71c777531578f"
         },
         "92eb5ffee6ae2fec3ad71c777531578f":{
            "type":"speak",
            "content": "Do I like this package?",
            "next":"8277e0910d750195b448797616e091ad"
         },
         "8277e0910d750195b448797616e091ad":{
            "type":"interaction",
            "options":[
               {
                  "type":"yes",
                  "next": null
               },
               {
                  "type":"no",
                  "next": null
               }
            ]
         }
      }
   }
}
```

[apidocs]: https://sms-it.io/docs/vf-to-ubf/