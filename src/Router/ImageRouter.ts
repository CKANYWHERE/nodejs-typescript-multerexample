import {Router} from 'express'
import upload from "../Middleware/ImageConfig";
import * as imageController from '../Controller/ImageController';
const router = Router();

router.get('/get/:id',imageController.getImage);
router.post('/post',upload.fields([{name:'image'}]),imageController.postImage);

export default router