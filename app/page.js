import { connectDB } from "@/app/util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  return <div>{result[0].content}</div>;
}
