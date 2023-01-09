const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const { url } = req;
    console.log('url', url)
    let filePath = '';
    if (url == '/') {
        filePath = path.join(__dirname, `../clock/index.html`);
    } else {
        filePath = path.join(__dirname, `../clock/${url}`);
    }
    console.log('filePath', filePath)
    fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
            console.log(err)
            return
        }
        res.end(content)
    })
})

server.listen(1337, "127.0.0.1", () => {
    console.log("Server running at http://127.0.0.1:1337/");
})