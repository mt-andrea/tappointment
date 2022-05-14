const express = require("express")
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const fs=require('fs')
const cors = require('cors');
app.use(cors());


app.post('/save',(req,res)=>{
    fs.writeFile('save.txt',req.body,(err)=>{
        if (err) res.send(err)
        console.log('Saved!')
      })
})

app.get('/read',(req,res)=>{
    fs.readFile('save.txt',(err,result)=>{
        if (!err) {
            res.send(result)
        }else res.send(err)
    })
})

app.listen(4000, () => {
    console.log("Server started on port 4000...")
})