const express = require('express')
const router = express.Router();
const personController = require('../controllers/personcontroller')

router.route('/').get(personController.index)











module.exports = router;