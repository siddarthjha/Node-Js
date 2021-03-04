try 
{  
  const a = 1;  
  const c = a;  
} 
catch (err) 
{  
  console.log(err);  
} 

const fs = require('fs');  
function nodeStyleCallback(err, data) 
{  
 if (err) 
 {  
   console.error('There was an error', err);  
   return;  
 }  
 console.log(data);  
}  
fs.readFile('E:/JAVASCRIPT/Cookie.html', 'utf8',  nodeStyleCallback);  
//fs.readFile('/some/file/that/does-exist', nodeStyleCallback);  