import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "../libraries/getAccessToken";
import { restoreAccessTokenLoadable } from "../stores";
import { useRecoilValueLoadable } from "recoil";

export const 로그인체크 = (컴포넌트: any) => (프롭스: any) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 1. 로그인 체크()
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     alert("로그인 후 이용 가능합니다!!!");
  //     void router.push("/section23/23-05-login-check-hoc");
  //   }
  // }, []);

  // 2. 로그인 체크(refreshToken 이후)
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     if (newAccessToken === undefined) {
  //       alert("로그인 후 이용 가능합니다!!!");
  //       void router.push("/section23/23-05-login-check-hoc");
  //     }
  //   });
  // }, []);

  // 3. 최종방식(함수공유)

  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다!!!");
        void router.push("/section23/23-05-login-check-hoc");
      }
    });
  });

  return <컴포넌트 {...프롭스} />;
};
