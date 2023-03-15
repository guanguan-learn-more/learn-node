const express = require('express')

const route = express.Router();

route.get('/user/list',(req,res)=>{
    console.log('get')
    res.send('get list'+req.startTime)
})

route.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  })

route.post('/user/add',(req,res)=>{
    console.log('post success')
})

module.exports = route