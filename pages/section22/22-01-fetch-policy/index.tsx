import { useQuery, gql } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingPage(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);

  console.log(data);

  const onClickMove = (): void => {
    void router.push("/section22/22-01-fetch-policy-moved");
  };

  return (
    <div>
      <button onClick={onClickMove}>나는 팀버튼 - 페이지 이동</button>
    </div>
  );
}
