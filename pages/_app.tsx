import "../../../../../../../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터 메모리에다가 백엔드에서 받아온 데이터 모두 임시로 저장해놓기 => 나중에 알아보기
  });

  return (
    <div>
      <div>===== 여기는 _app.js 컴포넌트 시작부분 입니다. =======</div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
      <div>===== 여기는 _app.js 컴포넌트 마지막부분 입니다. =======</div>
    </div>
  );
}
