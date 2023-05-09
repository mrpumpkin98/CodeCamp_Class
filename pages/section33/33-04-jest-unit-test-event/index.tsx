import { useState } from "react";

export default function JestUnitTestPage(): JSX.Element {
  const [count, setCount] = useState(0);

  const onclickCountUp = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div role="count">{count}</div>
      <button role="count-button" onClick={onclickCountUp}>
        카운트 올리기_호로로로로로로로로로롤
      </button>
    </>
  );
}
