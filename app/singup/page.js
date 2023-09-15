export default function SingUp() {
  return (
    <div className="p-20">
      <form action="/api/singup/new" method="POST">
        <input type="text" name="id" placeholder="아이디" />
        <input type="password" name="password" placeholder="비밀번호" />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
