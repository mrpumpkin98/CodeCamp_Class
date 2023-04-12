import { collection, getFirestore, addDoc, getDocs } from "firebase/firestore";
import { firebaseApp } from "../../../src/commons/libraries/firebase";

export default function FirebasePage(): JSX.Element {
  const onClickSubmit = (): void => {
    const board = collection(getFirestore(firebaseApp), "board");
    void addDoc(board, {
      writer: "재욱",
      title: "안녕하세요",
      contents: "반갑습니다.",
      number: 1,
    });
  };

  const onClickFetch = async (): Promise<void> => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록</button>
      <button onClick={onClickFetch}>조회</button>
    </>
  );
}
