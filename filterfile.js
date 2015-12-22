module.exports = function(dirname, extension, callback) {

  var fs = require('fs');
  var path = require('path');

  var results = [];

  fs.readdir( dirname, function(err, list) {
    if(err)
      callback(err);
    else {
      results = list.filter( function(file) {
        return path.extname(file) === '.' + extension;
      });
      callback(null, results);
    };
  });
}
