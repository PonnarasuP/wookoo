import { Router } from 'express';
import { adminController } from './admin.controller.ts';

const router = Router();

router.get('/dashboard', adminController.getDashboard);

export default router;
