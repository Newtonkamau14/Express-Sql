import { Router } from "express";
const router = Router();
import personController from "../controllers/personcontroller";


router.route('/').get(personController.index);

router.route('/add')
            .get(personController.getAddPage)
            .post(personController.add);


router.route('/edit/:id').get(personController.getEditPage);

router.route('/edit').put(personController.edit);

router.route('/delete/:id').get(personController.deletePerson);

router.route('/search').get(personController.search)

export default router;