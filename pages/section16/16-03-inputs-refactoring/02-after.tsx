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
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
  };

  function onChangeInputs(event) {
    setInputs({
      ...inputs,

      [event.target.id]: event.target.value,
    });
  }

  return (
    <div>
      작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
      <br></br>
      제목 : <input type="text" id="title" onChange={onChangeInputs} />
      <br></br>
      내용 : <input type="text" id="contents" onChange={onChangeInputs} />
      <br></br>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
