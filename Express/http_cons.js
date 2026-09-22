const http =require("http");

const server = http.createServer((req, res) => {
   // routing
    if(req.method === 'GET' && req.url === '/') { // get request
        res.end("GET REQUEST RECEIVED");
    } else if(req.method === "POST" && req.url === '/') { // get post request
        res.end("POST REQUEST RECEIVED");
    } 
});

server.listen(3000, (req, res)=>{
    console.log("Server is running on port 3000");
});