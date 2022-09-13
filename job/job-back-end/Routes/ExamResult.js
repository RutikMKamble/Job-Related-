const express = require('express');

const router = express.Router();

router.post('/', require('../Controllers/ExamResult').createResult);

router.get('/', require('../Controllers/ExamResult').getAllResult);

router.get('/:userID', require('../Controllers/ExamResult').getOneResult)


module.exports = router;