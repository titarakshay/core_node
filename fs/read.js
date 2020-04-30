var fs = require('fs');

Use fs module for all operatins below.


1. Write script to read file theory.md and console the output buffer.


fs.readFile("./theory.md",(err,data)=>{
  if(err) throw err;
  console.log(data);
})


output 
{/* <Buffer 23 23 20 46 69 6c 65 20 53 79 73 74 65 6d 0a 54 68 65 20 66 73 20 6d 6f 64 75 6c 65 20 70 72 6f 76 69 64 65 73 20 61 6e 20 41 50 49 20 66 6f 72 20 69 ... 3154 more bytes> */}


2. Write script to read file theory.md and convert resulted buffer using toString
  method and console the result.
 
  fs.readFile("./theory.md","utf8",(err,data)=>{
  if(err) throw err;
  console.log(data);
})

3. Write script to read file Synchronously and console the output.
console.log(fs.readFileSync("./theory.md","utf8"))


4. Write script to create a file 'write.js' and write content of read.js in there.

fs.readFile("./read.js","utf8",(err,data)=>{
  if(err) throw err;
  var store=data;
  fs.writeFile("./write.js",store,(err)=>{
    if(err) throw err;
    console.log("File created successfully")
  })
})

5. Write script to update content of write.js. Update it with content of theory.md
  Steps are
  - open the file(write.js) using fs.open
  - remove earlier content using fs.ftruncate
  - add new content using fs.writeFile
  - close the file at last using fs.close
     
  
  fs.open("./write.js","r+",(err,fd)=>{
        if(err) throw err;
        fs.ftruncate(fd,()=>{
          console.log(fd,"deleted item successfully")
        })
        fs.writeFile("./write.js","Hello Akshay",(err)=>{
          if(err) throw err;
          console.log("file updated successsfully")
        })
      })

6. Delete the content of write.js using fs.unlink or unlinkSync method

fs.unlink("./write.js",()=>{
  console.log("File deleted Successfully")
})