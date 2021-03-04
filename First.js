/*
var http = require("http");  

const os = require('os');
console.log('Server running at http://127.0.0.1:8081/');  
console.log(__dirname);
console.log(__filename);
const os=require('os');  
console.log("os.freemem(): \n",os.freemem());  
console.log("os.homedir(): \n",os.homedir());  
console.log("os.hostname(): \n",os.hostname());  
console.log("os.endianness(): \n",os.endianness());  
console.log("os.loadavg(): \n",os.loadavg());  
console.log("os.platform(): \n",os.platform());  
console.log("os.release(): \n",os.release());  
console.log("os.tmpdir(): \n",os.tmpdir());  
console.log("os.totalmem(): \n",os.totalmem());  
console.log("os.type(): \n",os.type());  
console.log("os.uptime(): \n",os.uptime());  
console.log("os.cpus(): \n",os.cpus());  
console.log("os.arch(): \n",os.arch());  
console.log("os.networkInterfaces(): \n",os.networkInterfaces());   

setInterval(function()
{
	console.log("Yo Reiner, it's been a while");
}, 1000);

setTimeout(function()
{
	console.log("Boom Attack on the Marley land....hahahaha");
}, 1000);
function time()
{
	console.log("Yo Eren, it's reiner");
}
function inter()
{
	console.log("Eren, come back");
}

var id1 = setTimeout(time, 1000);
var id2 = setInterval(inter, 1000);
clearInterval(id2);

*/

const http = require('http')
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 8081;

module.exports.age = 21;

module.exports.addFun = function (value1, value2)  {
  console.log('The function is called addFun()');
  var sum = value1 + value2;
  console.log(sum);
  return sum;
}

var fetch = () => {
  try {
    var save = fs.readFileSync('Data.json');
    return JSON.parse(save);
  } catch(e) {
      return [];
  }

};

var save = (notes) => {
  fs.writeFileSync('Data.json', JSON.stringify(notes));

};

var add = (title, body) => {
  console.log('Adding...')
  var notes = fetch();
  var note = {
    title,
    body
  }; 
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    save(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting All....');
  return fetch();
};

var read = (title) => {
  console.log('Reading..', title);
  var notes = fetch();
  var filt = notes.filter((note) => note.title === title);
  return filt[0];
};

var remove = (title, body) => {
  console.log('Removing body..\n',title);
  var notes = fetch();
  var dup = notes.filter((note) => note.title !== title);
  save(dup);
  return notes.length != dup.length;
};

module.exports = {
  add,
  getAll,
  read,
  remove
};


/*

const server = http.createServer((req, res) => 
{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://127.0.0.1/ port = 8080');
});

*/