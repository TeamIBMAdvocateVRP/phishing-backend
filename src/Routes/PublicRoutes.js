const express = require('express');

const router = express.Router();

const { createPhishingR } = require('../Services/PhishingRequestService');

router.get('/phishing-request',(req, res) => {

    res.send('Hello World desde el get Phishing!');
});

router.post('/phishing-request', (req, res) => {
    createPhishingR(req.body)
    .then( pr => res.send(pr))
    .catch(()=>res.send('Hubo un error'));
});

router.patch('/phishing-request',(req, res) => {
    res.send('Hello World desde el post!');
});

router.delete('/phishing-request',(req, res) => {
    res.send('Hello World desde el post!');
});

module.exports = router;