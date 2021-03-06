const express = require('express')
const  { Router } = express
const Message = require('./model')

const router = new Router()

router.get(
    '/message',
    async (req, res, next) => {
        try {
            const messages = await
                Message
                    .findAll()    
            res.send(messages)
        } catch(err) {
            next(err)
        }
    }
);

router.post(
    '/message',
    async (req, res, next) => {
        try {
            const message = await
                Message
                    .create(req.body)
                res.send(message)
        } catch (err) {
            next(err)
        }
    }
);

// router.post(
//     '/message',
//     (req, res, next) => {
//         Message
//             .create(req.body)
//             .then(message => {
//                 res.send(message)
//             })
//             .catch(err => next(err))
//     }
// )
// router.get(
//     '/message',
//     (req, res, next) => {
//         Message
//             .findAll()
//             .then(messages => {
//                 res.send(messages)
//             })
//             .catch(err => next(err))
//     }
// );

module.exports = router