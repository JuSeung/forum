import { connectDB } from '@/app/util/database';
export default async function handler(request, response) {
  if (request.method === 'POST') {
    const { id, password } = request.body;

    if (id == '') {
      return response.status(500).json('no Id');
    }
    if (password == '') {
      return response.status(500).json('no password');
    }
    try {
      const client = await connectDB;
      const db = client.db('forum');
      const collection = db.collection('member');
      await collection.insertOne({
        id,
        password,
      });
      return response.redirect(302, '/');
    } catch (error) {
      console.error('system error');
      return response.status(500).end();
    }
  }
  return response.status(405).end();
}
