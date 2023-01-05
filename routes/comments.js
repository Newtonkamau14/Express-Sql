const express = require('express')
const router = express.Router();
const commentController = require('./../controllers/commentcontroller')

router.route('/').get(commentController.index)











module.exports = router;