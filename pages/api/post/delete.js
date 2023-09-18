import { connectDB } from '@/app/util/database';
import { ObjectId } from 'mongodb';
export default async function handler(request, response) {
  if (request.method === 'DELETE') {
    const { id } = JSON.parse(request.body);
    if (id == '') {
      return response.status(500).json('no id');
    }
    try {
      const client = await connectDB;
      const db = client.db('forum');
      const collection = db.collection('post');

      const result = await collection.deleteOne({
        _id: new ObjectId(id),
      });
      if (result.deletedCount == 1) {
        return response.status(200).json('post deleted successfully');
      } else {
        return response.status(500).json('post not found');
      }
    } catch (error) {
      console.error('system error');
      return response.status(500).end();
    }
  }
  return response.status(405).end();
}
