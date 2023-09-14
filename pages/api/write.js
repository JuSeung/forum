import { connectDB } from "../../app/util/database";
export default async function Write(request, response) {
    const client = await connectDB;
    const db = client.db('forum');
    // console.log(request.body);
    // console.log(request.body.title);
    // console.log(request.body.content);
    let params =  {title: request.body.title , content: request.body.content}
    let a = await db.post.insert(params);
    console.log(a);
    return response.status(200).json('저장');
}