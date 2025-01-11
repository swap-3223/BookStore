import express from 'express';
import {Signup,login} from '../controller/userController.js';


const router = express.Router();

router.post('/signup', Signup);
router.post('/login', login);

export default router;