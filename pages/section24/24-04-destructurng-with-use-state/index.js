import { useState } from "react";

export default function CounterStatePage() {
  const result = useState(0);

  function onClickCountDown() {
    result[1](result[0] + 1);
  }
  function onClickCountSet() {
    result[1](result[0] - 1);
  }

  return (
    <div>
      <div>{result[0]}</div>
      <button onClick={onClickCountDown}>카운트 올리기</button>
      <button onClick={onClickCountSet}>카운트 내리기</button>
    </div>
  );
}
