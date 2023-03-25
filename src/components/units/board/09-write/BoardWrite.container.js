import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from 'react'
import BoardWriteUI from "./BoardWrite.presenter"
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from './BoardWrite.queries'

// import BoardWriteUI, {apple as qqq } from "./BoardWrite.presenter"
// import * as S from `./BoardWrite.styles`
// S.RedInput
// S.BlueButton

export default function BoardWrite(props) {
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
        router.push(`/section09/09-03-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async () => {
        // 수정하기 뮤테이션 자성해야됨
        const result = await updateBoard({
            variables: {
                number: Number(router.query.number),
                writer: writer,
                title: title,
                contents: contents,
            }
        })
        console.log(result)
        router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`)
    }

    function onChangeWriter(event) {
        setWriter(event.target.value)
    }
    function onChangeTitle(event) {
        setTitle(event.target.value)
    }
    function onChangeContents(event) {
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
            />
            <div>$$$$ 여기는 컨테이너입니다. $$$$</div>
        </div>
    )
}