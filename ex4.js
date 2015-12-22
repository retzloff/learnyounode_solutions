var fs = require('fs')

var lines = '';

fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if (!err) {
    lines = data.split('\n');
    console.log(lines.length-1);
  }
})
