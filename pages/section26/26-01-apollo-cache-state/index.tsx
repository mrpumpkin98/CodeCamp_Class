import { useQuery, gql, useMutation } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generated/types";
import { filter } from "lodash";

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

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function StaticRoutingPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);

  console.log(data);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  interface IPrev {
    __ref: string;
  }

  const onClickDelete = (boardId: string) => () => {
    void deleteBoard({
      variables: { boardId },
      //   refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev: IPrev[], { readField }) => {
              const deletedId = data.deleteBoard; // 삭제 완료된 아이디
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev]; // 삭제된 아이디를 제외한 나머지 9개만 리턴
            },
          },
        });
      },
    });
  };

  const onClickSubmit = (): void => {
    void 나의함수({
      variables: {
        createBoardInput: {
          writer: "익명",
          password: "1234",
          title: "제목",
          contents: "...",
        },
      },
      //   refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
