"use client";

import { usePathname, useRouter } from "next/navigation";

export default function DetailLink(props) {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/detail/" + props.id);
      }}
    >
      버튼
    </button>
  );

  // router.push  페이지이동이 가능합니다.
  // router.back() 실행하면 뒤로가기해줍니다.
  // router.forward() 실행하면 앞으로가기해줍니다.
  // router.refresh() 실행하면 새로고침해줍니다.
  // router.prefetch('/url') '/url/의 내용을 미리로드 해줍니다.

  // server component에서도 저런 기능을 사용할 수 있는데
  // <Link href={'/어쩌구'}> 쓰면 <Link>태그가 화면에 보이는 순간
  // '/어쩌구' 페이지를 자동으로 미리 로드해줍니다.
  //자동으로 미리 로드하는게 싫으면 prefetch 속성을 false로 바꿔줍시다.
  // 링크가 많은 게시판의 경우 모든 링크를 다 읽을게 아닌데 굳이 모든걸 미리 로드하는건 자원낭비입니다.

  // usePathname() 쓰면 현재 URL 출력해주고
  // useSearchParams() 쓰면 search parameter (query string) 출력해주고
  // useParams() 쓰면 [dynamic route]에 입력한내용 (URL 파라미터) 을 출력해줍니다.
}
