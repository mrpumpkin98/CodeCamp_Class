import axios from "axios";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import { useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 게시글 등록하기 버튼이라고 가정
  const onClickSync = async (): Promise<void> => {
    setIsSubmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/3");
    console.log(result); // 제대로된 결과 => {title}
    console.log(result.data.title); // 정당의 목적

    setIsSubmitting(false);
  };

  return (
    <div>
      <button onClick={wrapAsync(onClickSync)} disabled={isSubmitting}>
        REST-API(동기) 요청하기
      </button>
    </div>
  );
}
