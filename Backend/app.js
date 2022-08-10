const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./router')

app.engine('html',require('express-art-template'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public/', express.static('../Frontend/public'));
app.set('views','../Frontend/')
app.use(router)
app.listen(3000,function(){
    console.log('running 3000');
})
