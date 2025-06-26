import { Router } from 'express';
import { signup, login } from '../controllers/User.controllers.js';


const router = Router();

router.post('/register', signup);
router.post('/login', login);


export default router;