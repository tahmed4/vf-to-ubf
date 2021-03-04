# What is this?

Take any Voiceflow file and convert it into a universal bot format to make it easier for you to extract and build from a conversation diagram.

# Installation

`npm i vf-to-ubf`

Then...


```
import {voiceflowToBotFormat} from 'vf-to-ubf';
var fs = require('fs');

diagram = fs.readFile("./VoiceflowFile.vf")

universal_format = voiceflowToBotFormat(diagram)

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
            "content":[
               "Do I like this package?"
            ],
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