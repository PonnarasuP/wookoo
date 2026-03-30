import { Router } from 'express';
import { paymentsController } from './payments.controller.ts';

const router = Router();

router.post('/order', paymentsController.createOrder);
router.post('/record', paymentsController.createPaymentRecord);

export default router;
