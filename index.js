const { urlencoded } = require('express');
const express = require('express')
const port = 9999
const api = express();
const db = require('./config/mongoose')

api.use(urlencoded())

api.use('/', require('./route/Admin'))

api.listen(port, (err) => {
    if(err)
    {
        console.log('Server Is Not Working')
        return false;
    }
    console.log('Server IS Running On', port)
})