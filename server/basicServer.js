var http = require('http');
var fs=require('fs');
var qs=require('querystring');
var url =require("url");
var path=require("path")
1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
listen for request on port 5555.

var server=http.createServer(handleRequest)
function handleRequest(req,res){
  if(req.url="./"){

    res.end("Welcome TO NodeJs")
  }
};

2. Write script to create a server, send in response the request headers 
and add listener on port 6666.

function handleRequest(req,res){
  res.end(JSON.stringify(req.headers))
}

3. create a server and console request methods and url by doing request 
from postman or web browsers.

function handleRequest(req,res){
  console.log(req.method, req.url)
}
server.listen(6666,()=>console.log("server started successfully"))
4. create a server
  - set response headers as 'text/html' using res.setHeader property.
  - write some HTML content in response
  - listen on port 6000

function handleRequest(req,res){
  res.setHeader("Content-Type","text/html");
  res.end('<h1>Akshay Titar </h1>')
}
  

5. create a server
- create a seperate file index.html and write some html content
- read the html file content and send it in response in createServer method
- don't forget to set header before writing to response

function handleRequest(req,res){
  fs.readFile('./index.html',"utf8",(err,data)=>{
    if(err)throw err;
    res.end(data)  
  })
}


6. create a server
- create 3 diffenrent file ie. indx.html, about.html, contact.html
- inside createServer, handle different urls for serving different html file
- '/' route for index.html file
- "/about" for about.html file
- "/contact" for contact.html file

function handleRequest(req,res){
  if(req.url==="/index.html"){
    fs.readFile("./index.html","utf8",(err,data)=>{
      if(err)throw err;
      res.end(data);
    })
  }
  else if(req.url==="/about.html"){
    fs.readFile("./about.html","utf8",(err,data)=>{
      if(err) throw err;
      res.end(data)
    })
  }
  else if(req.url==="/contact.html"){
    fs.readFile("./contact.html","utf8",(err,data)=>{
      if(err) throw err;
      res.end(data)
    })
  }
  else{
    res.end("Page Not Found")
  }
}

7. create an Server(echoServer)
handle post request for incoming data from postman using req as eventEmitter
send incoming data back in response

var server=http.createServer(echoServer);

function echoServer(req,res){
  var store='';
  req.on("data",(chunk)=>{
    store += chunk;
  })
  req.on("end",()=>{
    res.end(store)
  })
}


8. create a server
handle json data from postman
parse the json data
send json data back in response


var server=http.createServer(handleRequest);
function handleRequest(req,res){
  var store='';
  req.on('data',(chunk)=>{
    store += chunk;
  })
  req.on('end',(err)=>{
    var parseData=JSON.parse(store);
    if(err) console.log(err);
    res.end(JSON.stringify (parseData))
  })
}


9. create a server
handle x-www-urlencoded(form data) coming form postman
parse form-data using querystring module
send data back in response

var server=http.createServer(handleRequest);
function handleRequest(req,res){
  var store='';
  req.on('data',(chunk)=>{
    store += chunk;
  })
  req.on('end',(err)=>{
    var parseData=qs.parse(store);
    if(err) console.log(err);
    res.end(JSON.stringify(parseData))
  })
}

server.listen(6000,()=>console.log("server started successfully"))


10. create a server and add listener on port 7000
  send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
  parse the request url using 'url' core node module
  extract protocol, path and pathname, query from the request
  send path in response


var server=http.createServer(handleRequest);
function handleRequest(req,res){
  var queryUrl=url.parse(req.url)

  var store='';
  req.on('data',(chunk)=>{
    store += chunk;
  })
  req.on('end',()=>{
    console.log("Protocol :" ,queryUrl,"Path :",queryUrl.path,"Pathname :",queryUrl.pathname,"Query :",queryUrl.query)
    res.end(queryUrl.path)
  })

  
}
server.listen(7000,()=>{
  console.log("server Has Started")
})



11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  use path module from core node

  console.log(__dirname)


var absolutePath=__dirname+"/theory.md";
console.log(absolutePath);

var relativePath=path.relative("server","theory.md");
console.log(relativePath)
