const express = require('express')
const bodyParser = require('body-parser')
const Sse = require('json-sse')
const messageRouter = require('./message/router')
const Message = require('./message/model')

const app = express()

const port = 4000
// stream.send() will send to all clients at once
// it is a container for all the clients
const stream = new Sse() // a stream is a list of clients


app.use(bodyParser.json())
app.use(messageRouter)

app.get(
    '/stream',
    async (req, res) => {
        try {
            const messages = await Message.findAll()
            stream.updateInit(data) //send data to client right after they connect
            stream.init(req, res)
        } catch (err) {
            next(err)
        }
    }
);

app.get(
    '/',
    (req,res) => {
        stream.send('hi')
        res.send('hello')
    }
);

// app.get(
//     '/stream',
//     (req, res) => {
//         stream.init(req, res)
//     }
// );

app.listen(
    port,
    () => {
        console.log(
            `listening on: ${port}`
        )
    }
);
