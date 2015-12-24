var net = require('net');
var port = process.argv[2];

var server = net.createServer( function(socket) {
    var date = new Date();
    var year   = pad(date.getFullYear())
    var month  = pad(date.getMonth()+1)
    var day    = pad(date.getDate())
    var hour   = pad(date.getHours())
    var minute = pad(date.getMinutes())
      
    socket.end([year, month, day].join('-') + ' ' + hour + ':' + minute + '\n');
});

server.listen(port);

function pad(value) {
    var result = value.toString()
    if (result.length < 2)
        result = '0' + result
    return result
}