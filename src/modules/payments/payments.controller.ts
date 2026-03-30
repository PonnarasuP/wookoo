import { Request, Response } from 'express';
import { paymentsService } from './payments.service.ts';

export const paymentsController = {
  async createOrder(req: Request, res: Response) {
    try {
      const { amount } = req.body;
      const order = await paymentsService.createOrder(amount);
      res.json(order);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  },
  async createPaymentRecord(req: Request, res: Response) {
    try {
      const payment = await paymentsService.createPaymentRecord(req.body);
      res.status(201).json(payment);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
};
