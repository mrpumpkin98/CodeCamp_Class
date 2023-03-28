import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
import { useState } from "react";

export default function ModalAlert(): JSX.Element {
  const [isOpen, setIsModalOpen] = useState(false);

  const onToggleModal = (): void => {
    setIsModalOpen((prev) => !false);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창 열기</button>
      {/* 모달 종료 방식 -1. 모달 숨기는 방법(ex, 이력서 등) */}
      {/* <Modal title="Basic Modal" open={isOpen} onOk={Ok} onCancel={Cancel} >
        <DaumPostcodeEmbed onComplete={handleComplete}/>
      </Modal> */}

      {/* 모달 종료 방식 -2. 모달 삭제하는 방법(ex, 신용카드, 비밀번호 등) */}
      {isOpen && (
        <Modal
          title="Basic Modal"
          open={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
