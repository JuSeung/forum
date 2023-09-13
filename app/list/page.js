import Link from "next/link";
import { connectDB } from "../util/database";
import DetailLink from "./DetailLink";


export default async function List() {
    const client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').find().toArray();
    return (
        <div className="list-bg">
         {
            result.map((data, i) => 
                <div className="list-item" key={i}>
                    
                        <Link href={'/detail/'+ data._id}>
                        <h4> {data.title} </h4>
                        </Link>
                        <DetailLink id={data._id}/>
                    
                    <p>{data.content}</p>
                </div>
            )
         }   
        </div>
      )
}
