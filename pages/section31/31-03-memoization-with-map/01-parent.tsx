import { useState } from "react";
import Word from "./02-child";
import { v4 as uuidv4 } from "uuid";

export default function MemoizationWithMapParentPage(): JSX.Element {
  const [data, setData] = useState("찰스는 오늘 런치를 맛있게 냠냠했지비");

  const onClickChange = (): void => {
    setData("영자는 오늘 디너를 낫딜리셔스하게 냠냠했지비.");
  };

  return (
    <>
      {data.split(" ").map((el, index) => (
        <Word key={uuidv4()} el={el} /> // memo를 해도 key 자체가 매번 변경되어 props로 넘어가므로, 5개 모두 리렌더링 됨
      ))}
      <button onClick={onClickChange}>체인지</button>
    </>
  );
}
