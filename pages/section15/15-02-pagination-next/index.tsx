import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import type { IQuery } from "../../../src/commons/types/generated/types";
import type { MouseEvent } from "react";

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
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);

  console.log(data);

  const onClickPage = (event): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onclickPrevPage = (): void => {
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onclickNextPage = (): void => {
    setStartPage(startPage + 10);
    void refetch({ page: startPage + 10 });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      <span onClick={onclickPrevPage}> 이전페이지 </span>
      {new Array(10).fill("1").map((_, index) => (
        <span
          key={index + startPage}
          id={String(index + startPage)}
          onClick={onClickPage}
        >
          {"   "}
          {index + startPage}
          {"   "}
        </span>
      ))}
      <span onClick={onclickNextPage}> 다음페이지 </span>

      {/* {[1, 2, 3, 4, 5, 6].map((el, index) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}

      {/* <span id="1" onClick={onClickPage}>
        1
      </span>
      <span id="2" onClick={onClickPage}>
        2
      </span>
      <span id="3" onClick={onClickPage}>
        3
      </span> */}
    </div>
  );
}
