var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response){
    response.pipe( 
        bl( handleResults )
    );
});

function handleResults(err, data) {
    if(err)
        return err;

    console.log(data.length);
    console.log(data.toString()); 
}