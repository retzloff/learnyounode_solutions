var net = require('net');
var port = process.argv[2];

var server = net.createServer( function(socket) {
    var date = new Date();
    var year   = date.getFullYear();
    var month  = date.getMonth()+1;
    var day    = date.getDate();
    var hour   = date.getHours();
    var minute = date.getMinutes();
    var timeStamp = [month, day, hour, minute];
      
    timeStamp.forEach( function(item) {
        item = item + (item < 10 ? '0' : '') 
    });
        
    socket.end([year, month, day].join('-') + ' ' + [hour, minute].join(':') + '\n');
});

server.listen(port);