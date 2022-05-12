const express = require("express")
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const fs=require('fs')

app.post('/save',(req,res)=>{
    fs.writeFile('save.txt',[req.params.num],(err)=>{
        if (err) throw err
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