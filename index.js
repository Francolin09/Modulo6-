const http = require("http");
http.createServer(function(req,res){
    res.write("hola pianolas");
    res.end()
}).listen(8081)
console.log("Servidor creado")