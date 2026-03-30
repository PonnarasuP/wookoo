import { Request, Response } from 'express';
import { authService } from './auth.service.ts';

export const authController = {
  async register(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await authService.createUser(email, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  },
  async verify(req: Request, res: Response) {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) throw new Error('No token provided');
      const decodedToken = await authService.verifyToken(token);
      res.json(decodedToken);
    } catch (error) {
      res.status(401).json({ error: (error as Error).message });
    }
  }
};
