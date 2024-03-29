const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express();

const PORT = 3000;


app.use(morgan('combined'))
app.use(express.static(path.join(__dirname , 'public')))

app.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname , 'public' , 'index.html'))
})

app.listen(PORT , (req , res) => {
    console.log(`Listening on port ${PORT}`)
})