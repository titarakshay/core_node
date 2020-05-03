//1. this is how most of javascript codes are executed which are present 
// in a file or in entire project.
console.log('hello World');

//4. Read file(theory.md) here using fs module and console the results of operation.
var fs=require('fs');
fs.readFile("./theory.md","utf8",(err,data)=>{
  if(err)throw err;
  console.log(data)
})

6. Blocking code
 Run it first and observe the output
 var file = fs.readFileSync('./theory.md',"utf8");
 console.log(file);
 console.log('run me first');
 
 // change it to run it in non-blocking manner.
 // Observe the difference in blocking and non-blocking code.
 
 var file = fs.readFile('./theory.md',"utf8",(err,data)=>{
   if(err)throw err;
   console.log(data);
 });
//  console.log(file);
 console.log('run me first'); 

10. require math.js
  console const pie and add and multiply function.

 var math= require("./math.js");
 console.log(math.pie)
 console.log(math.sum(5,5));
 console.log(math.multiply(5,5));
