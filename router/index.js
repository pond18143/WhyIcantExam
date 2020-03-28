const express = require('express')
const app = express()
const request = require('../controller/handle');
const logger = require('../util/logger.js');

app.get('/test', (req,res) => {
    res.send('test')
});
app.get('/getAll', async (req, res) => {
    // logger.debug(req.body)
    var result = await new request().getAll()
    res.status(result[0]).json(result);
});
app.post('/getHospital', async (req, res) => {
    logger.debug(req.body)
    var result = await new request().getHospital(req.body)
    res.status(result[0]).json(result[1]);
});
app.get('/top3', async (req, res) => {
    logger.debug(req.body)
    var result = await new request().top3(req.body)
    res.status(result[0]).json(result[1]);
});

module.exports = app