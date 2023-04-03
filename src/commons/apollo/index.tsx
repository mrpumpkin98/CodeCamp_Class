import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const GLOBAL_STATE = new InMemoryCache(); // 컴퓨터 메모리에다가 백엔드에서 받아온 데이터 모두 임시로 저장해놓기 => 나중에 알아보기

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: GLOBAL_STATE,
  });

  return (
    <>
      <div>난 영희</div>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
      <div>난 영희</div>
    </>
  );
}
