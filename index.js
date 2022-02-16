const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/index.html')
})


//salut moi
app.get('/salut', (req, res)=>{
    res.send("salut")
})

//insulte moi
app.get('/insulte', (req, res)=>{
    res.send("chien")
})


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("listening");
})