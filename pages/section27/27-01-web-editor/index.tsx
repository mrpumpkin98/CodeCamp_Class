// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
// import { Modal } from "antd";
import { wrap } from "module";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { promises } from "dns";
import { useEffect } from "react";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  //   useEffect(() => {
  //     const aaa = async () => {
  //       const { Modal } = await import("antd");
  //       MyModal = Modal
  //     };
  //   }, []);

  const onclickSubmit = async (): promise<void> => {
    const { Modal } = await import("antd"); // 코드스플릿팅
    Modal.success({ content: "게시글 등록 성공" });
  };

  const onChangeContents = (value: string): void => {
    console.log(value);
  };

  return (
    <form onSubmit={wrapFormAsync(onclickSubmit)}>
      작성자 : <input type="text" />
      <br></br>
      비밀번호 : <input type="password" />
      <br></br>
      제목 : <input type="text" />
      <br></br>
      내용 : <ReactQuill onChange={onChangeContents} />
      <br></br>
      <button>등록하기</button>
    </form>
  );
}
