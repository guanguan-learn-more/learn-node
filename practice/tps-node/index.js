const TPS = require('@ali/tps-node');
const request = require('request');
const fs = require('fs');
const path = require('path')

// const tps = new TPS({
//   accesstoken: 'xxxxx',
//   autoUpload: false
// });


// 简单上传
// tps.upload(filename, {empId: 88888, nick: '花名'}, callback);
// tps.upload(stream, {empId: 88888, nick: '花名'}).then();
// tps.on('progress')

// 队列上传
// tps.on('progress')
// tps.on('complete')
// tps.on('success')
// tps.on('error')
// tps.add(filename, {}, callback);
// tps.add(filename, {}).then();
// tps.



const tps = new TPS({
  accesstoken: '4104c321-de36-4092-ad41-795cac95a42d',
  daily: true,
  autoUpload: false
});
tps.on('progress', (d) => console.log(d));
// tps.emit('aaaa');
// tps.upload(request.get('http://gw.daily.taobaocdn.net/tps/TB1y9ueXow7LKJjyzdKXXaShXXa-764-854.png'), {
//   empId: 118545,
//   nick: '缇欧',
//   filename: 'aaaaa.png'
// }, (err, body) => console.log(err, body))
// tps.compress(request.get('http://gw.daily.taobaocdn.net/tps/TB1y9ueXow7LKJjyzdKXXaShXXa-764-854.png'), {
//   empId: 118545,
//   nick: '缇欧',
//   filename: 'aaaaa.png'
// }, (err, body) => {
//   if (err) {
//     console.error(err);
//   } else {
//     fs.writeFileSync('./output.png', body);
//   }
// })
tps.uploads([path.join(__dirname,'../image/hat.jpg'), path.join(__dirname,'../image/photo.jpg')], {
  empId: 368780,
  nick: '禾汐',
  filename: 'test.png'
}, (err, body) =>{
    if(err){
        console.log('upload error',err)
        return
    }
    console.log('upload ====>',body)
})
