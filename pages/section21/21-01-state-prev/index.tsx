import { useState } from "react";

export default function CounterStatePage(): JSX.Element {
  // let count = 0 // let은 리액트 전용 html에서 변경을 감지하지 못함(따라서, state 써야됨)
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    // 1.화살표 함수
    // setCount((prev) => prev + 1);

    // 2. 함수선언식
    // setCount(function (prev) {
    //   // 로직 추가 가능

    //   return prev + 1;
    // });

    // 3. 매개변수 바꾸기
    setCount((qqqq) => qqqq + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </div>
  );
}
