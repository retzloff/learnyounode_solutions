var fs = require('fs');
var path = require('path');

var filterPath = process.argv[2];
var filterExt  = '.' + process.argv[3];

fs.readdir( filterPath, function(err, list) {
  list.forEach( function(file) {
    if (path.extname(file) === filterExt)
        console.log(file);
  })
});
