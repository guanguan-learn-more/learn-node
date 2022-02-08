const  cp = require('child_process')


// const ls = cp.spawn('ls', ['-al']); //相当于执行 ls -al
// ls.stdout.on('data', function(data){
//     console.log('data from child: ' +'\n'+ data);
// });
// ls.stderr.on('data', function(data){
//     console.log('error from child: ' + data);
// });
// ls.on('close', function(code){
//     console.log('child exists with code: ' + code);
// });



const ls = cp.spawn('bash',['-c', 'echo "hello nodejs" | wc'], {
    stdio: 'inherit',
    shell: true
});

ls.on('close', function(code){
    console.log('child exists with code: ' + code);
});