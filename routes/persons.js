const express = require('express')
const router = express.Router();
const personController = require('../controllers/personcontroller')

router.route('/').get(personController.index)

router.route('/add')
            .get(personController.getAddPage)
            .post(personController.add)


router.route('/edit/:Personid').get(personController.getEditPage);

//router.route('/edit').post(personController.edit);

//router.route('/delete').delete(personController.delete)



module.exports = router;