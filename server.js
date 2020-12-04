const http = require('http');
const app = require('./app');

const fs  = require('fs');
const port = process.env.PORT || 5000;



fs.readFile('./timer.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(port);
});



//const server = http.createServer(app);

//server.listen(port);
