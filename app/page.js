import { connectDB } from '@/app/util/database';

export default async function Home() {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  console.log('테스트 ' + result);
  let content = '내용';
  if (result != '') {
    content = result[0].content;
  }
  return <div>{content}</div>;
}
