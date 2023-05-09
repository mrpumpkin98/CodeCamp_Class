import { useAuth } from "../../../src/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage(): JSX.Element {
  useAuth();
  // 1. 왜 HOC 처럼 어렵게 했나? class 컴포넌트는 hooks이 안되므로
  // 2. custom-hooks라고 했는데, 결국 그냥 함수 아닌가? 함수 맞음. 이름도 변경 가능
  // 3. custom-hooks와 함수의 차이는 무엇인가? 커스텀 훅스를 구별하는 이유는 내부에 다른 hooks을 포함하고 있는가

  return <div>프로필 페이지입니다.</div>;
}
