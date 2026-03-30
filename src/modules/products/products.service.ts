import { db } from '../../../server.ts';

export const productsService = {
  async getAll() {
    const snapshot = await db.collection('products').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  async getById(id: string) {
    const doc = await db.collection('products').doc(id).get();
    if (!doc.exists) throw new Error('Product not found');
    return { id: doc.id, ...doc.data() };
  },
  async create(data: any) {
    return await db.collection('products').add(data);
  }
};
