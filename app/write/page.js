export default function Write() {
    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/write" method="POST">
                <input name="title"></input>
                <input name="content"></input>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}