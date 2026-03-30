import { Request, Response } from 'express';
import { cartService } from './cart.service.ts';

export const cartController = {
  async get(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const cart = await cartService.getByUserId(userId);
      res.json(cart || { items: [] });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const { items } = req.body;
      const cart = await cartService.update(userId, items);
      res.json(cart);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
};
