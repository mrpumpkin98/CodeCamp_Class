import { useMutation } from "@apollo/client"
import { useState } from 'react'
import BoardWriteUI from "./BoardWrite.presenter"
import { 나의그래프큐엘셋팅 } from './BoardWrite.queries'

// import BoardWriteUI, {apple as qqq } from "./BoardWrite.presenter"
// import * as S from `./BoardWrite.styles`
// S.RedInput
// S.BlueButton

export default function BoardWrite(props) {
    const [isActive, setIsActive] = useState(false)

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result) //입력된 데이터 확인
    }
    function onChangeWriter(event) {
        setWriter(event.target.value)
        if (event.target.value && title && contents) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }

    }
    function onChangeTitle(event) {
        setTitle(event.target.value)
        if (writer && event.target.value && contents) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    function onChangeContents(event) {
        setContents(event.target.value)
        if (writer && title && event.target.value) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    return (
        <div>
            <div>$$$$ 여기는 컨테이너입니다. $$$$</div>
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isActive={isActive}
            />
            <div>$$$$ 여기는 컨테이너입니다. $$$$</div>
        </div>
    )
}