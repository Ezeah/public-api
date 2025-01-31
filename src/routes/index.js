const express = require('express');
const infoController = require('../controllers/infoController');

const router = express.Router();

router.get('/', infoController.getInfo);

module.exports = router;