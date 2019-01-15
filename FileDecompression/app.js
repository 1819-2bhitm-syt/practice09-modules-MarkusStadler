const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('compressed.txt'),
    crlfDelay: Infinity
});

let compressedLines = [];

rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', () => {
    for (line of compressedLines){
        console.log(decompress(line));
    }
});

function decompress(line) {
    let zeichenvariable = '';

    let first = line.charAt(0);
    let second = parseInt(line.substring(1, line.length));

    for (let i = 0; i < second; i++) {
        zeichenvariable += first;
    }

    return zeichenvariable;
}