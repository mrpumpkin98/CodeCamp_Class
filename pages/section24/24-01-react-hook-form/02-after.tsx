import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";

interface IFormFData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit } = useForm();

  const onClickSubmit = (data: IFormFData): void => {
    console.log(data);
  };

  console.log("리렌더링");

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자 : <input type="text" {...register("writer")} />
      <br></br>
      제목 : <input type="text" {...register("title")} />
      <br></br>
      내용 : <input type="text" {...register("contents")} />
      <br></br>
      주소 : <input type="text" {...register("boardAddress.addressDetail")} />
      <br></br>
      <button>GRAPHQL-API 요청하기</button>
    </form>
  );
}

/*
<form onSubmit={나의함수}>
  <button>아무것도</button> 
  <button type="submit">실행해줘</button> // 나의 함수 실행
  <button type="reset">실행해줘</button> // 비우기
  <button type="button" onClick={장바구니담기함수}>실행해줘</button> // 장바구니 함수 실행
</form>; 
*/
