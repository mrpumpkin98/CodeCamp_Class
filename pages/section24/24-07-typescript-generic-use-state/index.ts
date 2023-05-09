export function useState<S>(초기값: S): [S, (변경값: S) => void] {
  const state = 초기값;
  const setState = (변경값: S): void => {
    console.log(
      `${String(state)}에서 ${String(변경값)}"으로 값을 변경하겠습니다.`
    );
    console.log(
      `변경된 ${String(변경값)}을 사용해서 컴포넌트를 리렌더링 하겠습니다.`
    );
  };
  return [state, setState];
}

// 사용자

const [count, setCount] = useState<number>(10);
