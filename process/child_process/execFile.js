var cp = require("child_process");

cp.execFile("ping",["www.baidu.com"],function(err,stdout,stderr){
    if(err){
        console.error(err);
    }
    console.log("stdout:",stdout)
    console.log("stderr:",stderr);
});



var path = ".";
cp.execFile('/bin/ls', ['-l', path], function (err, result) {
    console.log(result)
});


cp.execFile("echo", ["hello", "world"], function(err, stdout) {
    console.log(stdout);
  });