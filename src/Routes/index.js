const express = require('express');

const router = express.Router();

router.use(require('./PublicRoutes'));

module.exports = router;