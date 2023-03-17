import { useState } from "react"

export default function CounterStatePage() {
    const [count, setCount] = useState(0)

    function onClickCountUp() {
        setCount(count + 1)

    }

    function onClickCountX() {
        setCount(count * 2)

    }

    function onClickCountN() {
        setCount(count / 2)

    }

    function onClickCountDown() {
        setCount(count - 1)
    }

    function onClickCountSet() {
        setCount(0)
    }


    return (
        <div>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기</button>
            <button onClick={onClickCountDown}>카운트 내리기</button>
            <button onClick={onClickCountSet}>카운트 초기화</button>
            <button onClick={onClickCountX}>카운트 곱</button>
            <button onClick={onClickCountN}>카운트 나눔</button>
        </div>

    )
}