import { Request, Response } from 'express';
import { ordersService } from './orders.service.ts';

export const ordersController = {
  async get(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const orders = await ordersService.getByUserId(userId);
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  },
  async create(req: Request, res: Response) {
    try {
      const order = await ordersService.create(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
};
