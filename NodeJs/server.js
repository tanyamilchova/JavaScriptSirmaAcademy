// import http from 'http';
// const server=http.createServer(function(req, res){
//     console.log("Request reseived!!");
   
//    console.log(req.url);

//     res.write("<h1>Hello From Node Server</h1>");
//     res.writeHead(200, {
//         'Content -Type':'text/html'
//     })
    
//     res.end();

// });
// server.listen(5000);
// console.log("Server is listening on port 5000");

import http from 'http';
function serverListener(req,res){
    console.log("Request received!!!");
    console.log(req.url);

    
    
    res.writeHead(200, {
        'Content-Type': 'text/html' // Fixed header key
    });
    res.write('<h1>Hello From Node Server</h1>');
    res.end();
}
const server = http.createServer(serverListener) ;
// const server = http.createServer(function(req, res) {
//     console.log("Request received!!!");
//     console.log(req.url);

//     res.write("<h1>Hello From Node Server</h1>");
    // res.writeHead(200, {
    //     'Content-Type': 'text/html' // Fixed header key
//     });

//     res.end();
// });

server.listen(5000);
console.log("Server is listening on http://localport 5000....");