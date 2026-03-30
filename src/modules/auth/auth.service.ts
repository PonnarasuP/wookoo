import admin from 'firebase-admin';

export const authService = {
  async verifyToken(token: string) {
    return await admin.auth().verifyIdToken(token);
  },
  async createUser(email: string, password: string) {
    return await admin.auth().createUser({ email, password });
  }
};
