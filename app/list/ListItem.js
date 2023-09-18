'use client';
import Link from 'next/link';
import DetailLink from './DetailLink';

export default function ListItem(props) {
  //   useEffect(() => {
  // 단점 : 검색노출 어려울 수도 있음 검색엔진 친화적이지 않음
  // 서버에 통해서 DB 게시물 가져옴
  //   }, []);
  let result = props.result;

  return (
    <div>
      {result.map((data, i) => (
        <div className="list-item" key={i}>
          <Link href={'/detail/' + data._id.toString()}>
            <h4> {data.title} </h4>
          </Link>
          <Link href={'/edit/' + data._id.toString()} className="list-btn">
            ✏️
          </Link>
          <span
            onClick={() => {
              deletePost(data._id);
            }}
          >
            🗑️
          </span>
          <DetailLink id={data._id.toString()} />
          <p>{data.content}</p>
        </div>
      ))}
    </div>
  );
}

function deletePost(id) {
  fetch('/api/post/delete', {
    method: 'DELETE',
    body: JSON.stringify({ id }),
  })
    .then((result) => {
      if (result.status == 200) {
        window.location.reload();
      }
      return result.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
