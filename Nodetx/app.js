const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '/text');
let textIn ="";
let rows="";
for(let num=1;num<=10;num++){
    let zx=fs.readFileSync(`${dirPath}/tx`+num+`.txt`,'utf-8');
    let arr = zx.split('\r\n');
    for(let i=0;i<num;i++){
        rows+=arr[i]+('\r\n');
    }
    textIn+=rows;
    rows="";
}

const textOut = `${textIn}`;
fs.writeFileSync(`${dirPath}/res.txt`,textOut);
console.log(textOut);

//     const arr = textIn.split('\r\n');
//     for(let i=0;i<num;i++){
//     const line = arr[i].split(' ');
// }
//     console.table(line);
// }
