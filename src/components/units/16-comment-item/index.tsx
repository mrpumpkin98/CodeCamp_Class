import { useState } from "react";

export default function CommentItem(props: any): JSX.Element {
  const [isEdit, setisEdit] = useState(false);

  const onClickEdit = (): void => {
    setisEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <div>
          <span style={{ margin: "10px" }}>{props.el.title}</span>
          <span style={{ margin: "10px" }}>{props.el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input type="text" />
      )}
    </div>
  );
}

// 댓글을 이방법으로 불러온다.
// 이 안에서 수정버튼을 또 만든다.
