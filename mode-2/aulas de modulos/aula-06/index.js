import http from "http";

http.createServer((req, res)=>{
    res.write("Hello W");
    res.statusCode = 200;
    res.end()
}).listen(8080)