const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createPhishingRequest } = require('../Controllers/PhishingRequestController');
const { checkFileType } = require('../Utils/utils');
const { imagesStore } = require('../Utils/upload');

const upload = multer({
    storage: imagesStore,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
});
  

router.get('/phishing-request', createPhishingRequest);

router.post('/phishing-request/upload/:id',[upload.single('file')], createPhishingRequest);

router.patch('/phishing-request', createPhishingRequest);

router.delete('/phishing-request', createPhishingRequest);

module.exports = router;