import { Router } from 'express';
import { ordersController } from './orders.controller.ts';

const router = Router();

router.get('/:userId', ordersController.get);
router.post('/', ordersController.create);

export default router;
