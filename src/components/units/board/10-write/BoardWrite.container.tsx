import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { ChangeEvent, useState, } from 'react'
import BoardWriteUI from "./BoardWrite.presenter"
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from './BoardWrite.queries'
import { IBoardWriteProps, IVariables } from "./BoardWrite.types"

// import BoardWriteUI, {apple as qqq } from "./BoardWrite.presenter"
// import * as S from `./BoardWrite.styles`
// S.RedInput
// S.BlueButton



export default function BoardWrite(props: IBoardWriteProps) {
    const router = useRouter()

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(나의그래프큐엘셋팅)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result) //입력된 데이터 확인
        router.push(`/section10/10-02-typscript-boards/${result.data.createBoard.number}`)
    }



    const onClickUpdate = async () => {
        const myVariables: IVariables = { number: Number(router.query.number) }
        if (writer !== "") { myVariables.writer = writer }
        if (title !== "") { myVariables.title = title }
        if (contents !== "") { myVariables.contents = contents }

        // 수정하기 뮤테이션 자성해야됨
        const result = await updateBoard({
            variables: myVariables
        })
        console.log(result)
        router.push(`/section10/10-02-typscript-boards/${result.data.updateBoard.number}`)
    }

    function onChangeWriter(event: ChangeEvent<HTMLInputElement>): void {
        setWriter(event.target.value)
    }
    function onChangeTitle(event: ChangeEvent<HTMLInputElement>): void {
        setTitle(event.target.value)
    }
    function onChangeContents(event: ChangeEvent<HTMLInputElement>): void { //onClick시 MouseEvent<HTMLInputElement> 사용
        setContents(event.target.value)
    }

    return (
        <div>
            <div>$$$$ 여기는 컨테이너입니다. $$$$</div>
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onClickUpdate={onClickUpdate}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isEdit={props.isEdit}
                data={props.data} // undefined 이거나, data 이거나
            />
            <div>$$$$ 여기는 컨테이너입니다. $$$$</div>
        </div>
    )
}