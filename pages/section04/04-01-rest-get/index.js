import axios from "axios"


export default function RestGetPage() {

    function onClickAsync() {
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result)
    }

    // 함수 중복 선언 문제로 화살표함수로 바꾸자!!!!!! :)
    // async function onClickSync() {
    //     const result = await axios.get("https://koreanjson.com/posts/1")
    //     console.log(result) // 제대로된 결과 => {title}
    //     console.log(result.data.title) // 정당의 목적
    //     //axios가 json 파스를 해서 받아와준다. 그래서 문자열이 아닌것으로 보인다.
    //     //json.stringify는 문자열로 바뀐다.
    // }

    const onClickSync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/3")
        console.log(result) // 제대로된 결과 => {title}
        console.log(result.data.title) // 정당의 목적

    }


    return (
        <div>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
        </div>
    )
}