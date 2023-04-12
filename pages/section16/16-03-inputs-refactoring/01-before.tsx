import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

//게시물 등록을 위해 입력한 값을 api로 보내주는 기능 구현

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeContents(event) {
    setContents(event.target.value);
  }

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
