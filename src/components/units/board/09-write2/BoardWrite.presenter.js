import { RedInput, BlueButton } from "./BoardWrite.styles"

export default function BoardWriteUI(props) {

    return (
        <div>
            <div>@@@@ 여기는 프리젠터입니다. @@@@</div>
            <div>
                작성자 : <RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer} />
                <br></br>
                제목 : <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title} />
                <br></br>
                내용 : <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents} />
                <br></br>
                <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
                    {props.isEdit ? "수정" : "등록"}
                </BlueButton>
            </div>
            <div>@@@@ 여기는 프리젠터입니다. @@@@</div>
        </div>
    )
}                                                                                         