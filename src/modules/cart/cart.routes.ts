import { Router } from 'express';
import { cartController } from './cart.controller.ts';

const router = Router();

router.get('/:userId', cartController.get);
router.put('/:userId', cartController.update);

export default router;
