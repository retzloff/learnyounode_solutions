var http = require('http')
var url = require('url')

var server = http.createServer( function(req, res) {
    var reqUrl = url.parse(req.url, true)
    var date
    var response
     
    if(req.method == 'GET') {
        date = new Date(reqUrl.query.iso)
        
        switch(reqUrl.pathname){
            case '/api/parsetime':
                response = {
                   hour: date.getHours(),
                   minute: date.getMinutes(),
                   second: date.getSeconds()
                }
            break
            
            case '/api/unixtime':
                response = { unixtime: date.getTime() }
                break
        }
        res.writeHead(200, { 'Content-Type': 'application/json'})
        res.end(JSON.stringify(response))
    } 
})

server.listen(process.argv[2])
