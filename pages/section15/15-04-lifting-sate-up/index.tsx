import { useState } from "react";
import Child1 from "../../../src/components/units/15-lifting-state-up/Child1";
import Child2 from "../../../src/components/units/15-lifting-state-up/Child2";

export default function CounterStatePage(): JSX.Element {
  // let count = 0 // let은 리액트 전용 html에서 변경을 감지하지 못함(따라서, state 써야됨)
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child1 count={count} setCount={setCount} />
      <div>===========================</div>
      <Child2 count={count} setCount={setCount} />
    </div>
  );
}
