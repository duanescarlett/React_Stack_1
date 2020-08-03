const crypto = require('crypto')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bitcore = require('bitcoinjs-lib')
const redis = require('../db/redis')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/api/users', function(req, res) {
    res.json([
        "Welcome to Bitgames"
    ])
})

router.post('/api/test', (req, res) => {
    // redis_con.client.flushall()
    redis_con.client.hmset('dog:1', ['name', 'gizmo', 'age', '5'])
    redis_con.client.hmset('dog:2', ['name', 'dexter', 'age', '6'])
    redis_con.client.hmset('dog:3', ['name', 'fido', 'age', '5'])

    redis_con.client.set('dog:name:gizmo', 'dog:1')
    redis_con.client.set('dog:name:dexter', 'dog:2')
    redis_con.client.set('dog:name:fido', 'dog:3')

    redis_con.client.lpush('dog:age:5', ['dog:1', 'dog:3'])
    redis_con.client.lpush('dog:age:6', 'dog:2')
    res.json({status: "Authorized"})
})

module.exports = router