const cp = require("child_process");

// exec 传入的是shell命令
const ls = cp.exec("ls -l", function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log("Error code: " + error.code);
  }
  console.log("Child Process STDOUT: " + stdout);
});



const child = cp.exec('ls -l');
child.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
});
child.stderr.on('data', function(data) {
  console.log('stdout: ' + data);
});
child.on('close', function(code) {
  console.log('closing code: ' + code);
});
