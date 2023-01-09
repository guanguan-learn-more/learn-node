const fs = require('fs')
const path  = require('path');

const styleReg =/<style>[\s\S]*<\/style>/ ;
const scriptReg =/<script>[\s\S]*<\/script>/ 


fs.readFile(path.join(__dirname,'/index.html'),'utf8',(err,content)=>{
    console.log(content)
    handleStyleFile(content)
    handleScriptFile(content)
    handleHTMLFile(content)
})

function handleStyleFile(content){
    const styleRes = styleReg.exec(content)
    const styleContent = styleRes[0].replace(/<style/,'').replace(/<\/style>/,'')
    fs.writeFile(path.join(__dirname,'/clock/index.css'),styleContent,(err)=>{
        console.log('写入style成功啦！')
    })
}
function handleScriptFile(content){
    const scriptRes = scriptReg.exec(content)
    const scriptContent = scriptRes[0].replace(/<script>/,'').replace(/<\/script>/,'')
    fs.writeFile(path.join(__dirname,'/clock/index.js'),scriptContent,(err)=>{
        console.log('写入Script成功啦！')
    })
}
// 将 style内联替换成link，将script内联替换成src形式
function handleHTMLFile(content){
    const newHTML = content.replace(styleReg,"<link rel='stylesheet' href='./index.css' />").replace(scriptReg,'<script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname,'/clock/index.html'),newHTML,(err)=>{
        console.log('写入html文件成功')
    })
}