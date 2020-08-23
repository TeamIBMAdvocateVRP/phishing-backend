const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createPhishingRequest, readAllPR } = require('../Controllers/PhishingRequestController');
const { checkFileType } = require('../Utils/utils');
const { imagesStore } = require('../Utils/upload');

const upload = multer({
    storage: imagesStore,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
});
  

router.get('/phishing-request', readAllPR);

router.post('/phishing-request/upload/:id',[upload.single('file')], createPhishingRequest);


module.exports = router;