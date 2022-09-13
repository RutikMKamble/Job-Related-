const express = require('express');

const router = express.Router();

router.post('/', require('./../Controllers/Job').createJob);

router.get('/', require('../Controllers/Job').getAllJobs);

router.get('/:userID', require('../Controllers/Job').getOneJob)


module.exports = router;