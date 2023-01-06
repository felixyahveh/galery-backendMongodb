import { Router } from "express";
import controller from '../contollers/imageContoller.js';

const router = Router();

router.get('/', controller.getImages);
//router.get('/2', controller.getImages2);
router.post('/', controller.postImage);
router.delete('/:id', controller.deleteImage);

export default router;