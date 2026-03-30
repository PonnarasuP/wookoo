import { Router } from 'express';
import { authController } from './auth.controller.ts';

const router = Router();

router.post('/register', authController.register);
router.get('/verify', authController.verify);

export default router;
