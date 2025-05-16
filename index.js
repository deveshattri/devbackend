require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.get('/dev',(req,res) => {
    res.send('<h1>yes devesh</h1>')
})
const jsondata={"name": "John Doe", "age": 30, "city": "New York"}

app.get('/github',(req,res)=>{
    res.json(jsondata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
