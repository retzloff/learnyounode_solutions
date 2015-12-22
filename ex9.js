var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);
var waiting = urls.length;
var results = new Array(waiting);

urls.forEach( function(url, index) {
    http.get(url, function(response) {
        response.pipe(
            bl( function(err, data){
                if(err)
                    return err;
                results[index] = data.toString();
                waiting--;
                if(waiting === 0)
                    results.forEach( function(result) { console.log(result)});
            })
        );
    })
});