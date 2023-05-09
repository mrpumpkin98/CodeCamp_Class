import { useState } from "react";

//게시물 등록을 위해 입력한 값을 api로 보내주는 기능 구현

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {};
  function onChangeWriter(event) {
    setWriter(event.target.value);
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeContents(event) {
    setContents(event.target.value);
  }

  console.log("리렌더링");

  return (
    <div>
      작성자 : <input type="text" onChange={onChangeWriter} />
      <br></br>
      제목 : <input type="text" onChange={onChangeTitle} />
      <br></br>
      내용 : <input type="text" onChange={onChangeContents} />
      <br></br>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
