import { Modal } from "antd";
import Password from "antd/es/input/Password";
import { useState } from "react";

export default function ModalAlert() :JSX.Element {

    const [isOpen, setIsModalOpen] = useState(false);

    const showModal = (): void => {
      setIsModalOpen(true);
    };
  
    const Ok = (): void => {
      setIsModalOpen(false);
    };
  
    const Cancel = (): void => {
      setIsModalOpen(false);
    };

    return(
        <>        
        <button onClick={showModal}>모달창 열기</button>
        <Modal title="Basic Modal" 
        open={isOpen} 
        onOk={Ok} 
        onCancel={Cancel}
        >
        비밀번호 입력 : <input type = "password" />
      </Modal>
        </>
    )
}