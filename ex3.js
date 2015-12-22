var fs = require('fs')

var str = fs.readFileSync(process.argv[2], 'utf8')

var lines = str.split('\n')

console.log(lines.length-1)
