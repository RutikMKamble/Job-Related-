const express = require('express');

const router = express.Router();

router.post('/', require('./../Controllers/AdmitCard').createAdmitCard);

router.get('/', require('../Controllers/AdmitCard').getAllAdmitCard);

router.get('/:userID', require('../Controllers/AdmitCard').getOneAdmitCard)


module.exports = router;