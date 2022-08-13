#!/usr/bin/env node
let fs = require("fs");
let path = require("path");
let inputArr = process.argv.slice(2);

let fileNameArr = [];
for(let i = 0; i < inputArr.length; i++){
    if(inputArr[i].slice(0, 1) != "-"){
        fileNameArr.push(inputArr[i]);
    }
}

// Edge cases
if(inputArr.includes("-b") && inputArr.includes("-n")){
    console.log("Invalid operation");
    return;
}

for(let i = 0; i < fileNameArr.length; i++){
    if(fs.existsSync(fileNameArr[i]) == false){
        console.log("File doesn't exist");
        return;
    }
}

// console.log(fileNameArr);

let content = ""
for(let i = 0; i < fileNameArr.length; i++){   
    let bufferContent = fs.readFileSync(fileNameArr[i]);
    content += bufferContent + '\r\n';
}
let contentArr = content.split('\r\n');

// -s
if(inputArr.includes("-s")){
    for(let i = 0; i < contentArr.length; i++){
        if(contentArr[i] == '' && contentArr[i - 1] == ''){
            contentArr[i] = null;
        }else if(contentArr[i] == '' && contentArr[i - 1] == null){
            contentArr[i] = null;
        }
    }
    let tempArr = [];
    for(let i = 0; i < contentArr.length; i++){
        if(contentArr[i] != null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
}

// -n
if(inputArr.includes("-n")){
    for(let i = 0; i < contentArr.length; i++){
        contentArr[i] = `${i + 1} ${contentArr[i]}`;
    }
}

let counter = 1;
if(inputArr.includes('-b')){
    for(let i = 0; i < contentArr.length; i++){
        if(contentArr[i] != ''){
            contentArr[i] = `${counter++} ${contentArr[i]}`
        }
    }   
}
// console.log(contentArr);
console.log(contentArr.join('\n'));