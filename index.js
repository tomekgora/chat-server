const express = require('express')
const app = express()
const messageRouter = require('./message/router')

const port = 4000

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
