const mysql   = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin123',
  database : 'my_db'
});
// 链接数据库
db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + db.threadId);
  });
// 查询数据
const sql = 'SELECT * FROM Users';
db.query(sql,(err,result,fields)=>{
    if (err) throw err;
    console.log('查询结果',result)
})

//插入数据
const user = {
    name: 'Joy11',
    password:'24324543'
}
// const insert = `
// INSERT INTO Users (name,password) VALUES (?,?)
// `
// db.query(insert,[user.name,user.password],(err,result,fields)=>{
//     if(result.affectedRows === 1){
//       console.log('插入数据成功',result)
//     }
// })
const insert = `
INSERT INTO Users set ?
`
// const insert = `
// INSERT INTO Users set name=?, password=?
// `
db.query(insert,user,(err,result,fields)=>{
      console.log('插入数据成功',result)
})

 
db.end();