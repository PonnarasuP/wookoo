import { db } from '../../../server.ts';

export const cartService = {
  async getByUserId(userId: string) {
    const snapshot = await db.collection('carts').where('userId', '==', userId).get();
    if (snapshot.empty) return null;
    return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
  },
  async update(userId: string, items: any[]) {
    const cart = await this.getByUserId(userId);
    if (cart) {
      await db.collection('carts').doc(cart.id).update({ items });
      return { id: cart.id, userId, items };
    } else {
      const newCart = await db.collection('carts').add({ userId, items });
      return { id: newCart.id, userId, items };
    }
  }
};
