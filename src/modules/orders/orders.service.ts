import { db } from '../../../server.ts';

export const ordersService = {
  async getByUserId(userId: string) {
    const snapshot = await db.collection('orders').where('userId', '==', userId).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  async create(data: any) {
    return await db.collection('orders').add({ ...data, status: 'pending' });
  }
};
