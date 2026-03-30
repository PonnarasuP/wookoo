import { Request, Response } from 'express';
import { productsService } from './products.service.ts';

export const productsController = {
  async getAll(req: Request, res: Response) {
    try {
      const products = await productsService.getAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  },
  async getById(req: Request, res: Response) {
    try {
      const product = await productsService.getById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ error: (error as Error).message });
    }
  },
  async create(req: Request, res: Response) {
    try {
      const product = await productsService.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
};
