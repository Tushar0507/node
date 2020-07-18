const http =require('http')



// cosnt obj = {
//  a:10,
//  b:true,
//  c:3
// }
const server = http.createServer(function(req,res){
   
res.writeHead(200, {'content-type': 'text/html'})
res.write('<h1>Hello World<h1>')
res.end()

}

)
server.listen(3000)