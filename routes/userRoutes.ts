import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/userController';

const router = Router();

router.post('/usuarios/registro', registerUser);
router.post('/usuarios/login', loginUser);

export default router;
