import { Router } from 'express';
import { productsController } from './products.controller.ts';

const router = Router();

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.post('/', productsController.create);

export default router;
