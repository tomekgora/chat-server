const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const messageRouter = require('./message/router')

const port = 4000

app.use(bodyParser.json())
app.use(messageRouter)

app.get(
    '/',
    (req,res) => {
        res.send('hello')
    }
)

app.listen(
    port,
    () => {
        console.log(
            `listening on: ${port}`
        )
    }
);
