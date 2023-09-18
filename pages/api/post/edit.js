import { connectDB } from '@/app/util/database';
import { ObjectId } from 'mongodb';
export default async function handler(request, response) {
  if (request.method === 'POST') {
    const { id, title, content } = request.body;
    console.log(`id : ${id} title : ${title} content : ${content}`);
    if (title == '') {
      return response.status(500).json('no title');
    }
    if (content == '') {
      return response.status(500).json('no content');
    }
    try {
      const client = await connectDB;
      const db = client.db('forum');
      const collection = db.collection('post');

      await collection.updateOne({ _id: new ObjectId(id) }, { $set: { title: title, content: content } });

      return response.redirect(302, '/list');
    } catch (error) {
      console.error('system error');
      return response.status(500).end();
    }
  }
  return response.status(405).end();
}
