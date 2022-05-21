const express = require('express')
const path = require('path');
const { deflateSync } = require('zlib');
const app = express()
const Deal = require('../db/models/deal')

// static middleware
app.use('/dist', express.static(path.join(__dirname, '../dist')))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}); 


app.use('/api', require('../api'))

module.exports = app;

