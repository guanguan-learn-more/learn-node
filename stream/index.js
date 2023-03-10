const fs = require('fs')
const path = require('path');
const http = require('http');

const bigFilePath = path.join(__dirname, './bigFile1.txt')
// const readStream = fs.createWriteStream(bigFilePath);
// for (let i = 0; i < 1000000; i++) {
//     readStream.write(`line ${i}\n`);
// }
// readStream.end()
// console.log('done')

// fs.readFile(bigFilePath, 'utf-8', (err, content) => {
//     process.stdout.write(content);
// })

// fs.createReadStream(bigFilePath).pipe(process.stdout)


// const server = http.createServer()
// server.on('request', (request, response) => {
//   fs.readFile(bigFilePath, (error, data) => {
//     if (error) throw error
//     response.end(data)
//     console.log('done')
//   })
// })
// server.on('request', (request, response) => {
// 	const stream = fs.createReadStream(bigFilePath)
// 	stream.pipe(response)
// })
// server.listen(8889)
// console.log(8889)





