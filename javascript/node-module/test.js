console.log("app started");

const fs =require('fs');


const os =require('os');
var user =os.userInfo();

fs.appendFile('s09.txt','hello js ${user.username}!');

const app =require('./app.js');
var res = app.add(9,10);
console.log(res);
