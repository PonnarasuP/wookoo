import { Request, Response } from 'express';
import { db } from '../../../server.ts';

export const adminController = {
  async getDashboard(req: Request, res: Response) {
    try {
      const orders = await db.collection('orders').get();
      const products = await db.collection('products').get();
      res.json({
        totalOrders: orders.size,
        totalProducts: products.size
      });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
};
