const express = require('express')
const router = express.Router();
const personController = require('../controllers/personcontroller')

router.route('/').get(personController.index)

router.route('/add')
            .get(personController.add)








module.exports = router;