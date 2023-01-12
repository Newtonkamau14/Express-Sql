const express = require('express')
const router = express.Router();
const personController = require('../controllers/personcontroller')

router.route('/').get(personController.index);

router.route('/add')
            .get(personController.getAddPage)
            .post(personController.add);


router.route('/edit/:id').get(personController.getEditPage);

router.route('/edit').put(personController.edit);

router.route('/delete/:id').get(personController.delete);

module.exports = router;