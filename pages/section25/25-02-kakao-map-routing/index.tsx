import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KaKaoMapPage(): JSX.Element {
  const router = useRouter();
  const onclickMove = (): void => {
    void router.push("/section25/25-01-kakao-map-routing-moved");
  };

  return (
    <>
      <button onClick={onclickMove}>페이지 이동해라 이놈들아!!!!!</button>

      {/* next에서 제공하는 a태그 이므로, SPA 확용 가능 */}
      <Link href="/section25/25-01-kakao-map-routing-moved">
        페이지 이동하기
      </Link>

      {/* 의미가 잇는 시멘틱 태그의 장점 */}
      <h1>요리</h1>
      <div>요리</div>
      <section>요리</section>
    </>
  );
}
