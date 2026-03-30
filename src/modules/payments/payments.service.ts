import { db } from '../../../server.ts';
import Razorpay from 'razorpay';

let razorpayClient: Razorpay | null = null;

function getRazorpay(): Razorpay {
  if (!razorpayClient) {
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    
    if (!key_id || !key_secret) {
      throw new Error('RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET environment variables are required');
    }
    
    razorpayClient = new Razorpay({
      key_id,
      key_secret,
    });
  }
  return razorpayClient;
}

export const paymentsService = {
  async createOrder(amount: number) {
    return await getRazorpay().orders.create({ amount, currency: 'INR' });
  },
  async createPaymentRecord(data: any) {
    return await db.collection('payments').add(data);
  }
};
