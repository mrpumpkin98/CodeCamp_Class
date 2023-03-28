import { Modal } from "antd";

export default function ModalAlert() :JSX.Element {



    const onclickSuccess = (): void =>  {
        Modal.success({
            content: '성공'
          });
    }

    const onclickError = (): void  => {
        Modal.error({
            content: '실패'
          });
    }

    return(
        <>        
        <button onClick={onclickSuccess}>성공했을때</button>
        <button onClick={onclickError}>실패했을때</button>
        </>
    )
}