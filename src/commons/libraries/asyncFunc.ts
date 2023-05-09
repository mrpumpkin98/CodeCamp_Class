import type { FormEvent } from "react";

// export const wrapAsync =
//   (asyncFunc: (event: ChangeEvent<HTMLInputElement>) => Promise<void>) =>
//   (event: ChangeEvent<HTMLInputElement>) => {
//     void asyncFunc(event);
//   };

// prettier-ignore
export const wrapAsync =
  <E>(asyncFunc: (event: E) => Promise<void>) =>
  (event: E) => {
    void asyncFunc(event);
  };

export const wrapFormAsync =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void asyncFunc();
  };

// preventDefault :

// 1. a 태그를 눌렀을때도 href 링크로 이동하지 않게 할 경우
// 2. form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 (submit은 작동됨)
