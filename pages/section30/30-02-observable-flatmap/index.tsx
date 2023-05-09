// import { Observable } from '@apollo/client'
import { from } from "zen-observable";

import { Observable } from "@apollo/client";
import { reject } from "lodash";
import { resolve } from "path";

export default function ObservableFlatmapPage(): JSX.Element {
  const onCLickButton = (): void => {
    // new Promise((resolve, reject) => {})
    // new Observable((observer) => {})

    from(["1번 유즈쿼리", "2번 유즈쿼리", "3번 유즈쿼리"]) // fromPromis
      .flatMap((el: string) =>
        from([`${el} 결과에 qqq 적용`, `${el}결과에 zzz 적용`])
      )
      .subscribe((el) => {
        console.log(el);
      });
  };

  return <button onClick={onCLickButton}>클릭</button>;
}
