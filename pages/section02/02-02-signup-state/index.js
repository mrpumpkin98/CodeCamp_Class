import { useState } from "react"

export default function SignupStatePage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")



    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onChangeSignup() {
        console.log(email) // 진짜 포장이 잘 됐는지 확인해보기
        console.log(password) // 진짜 포장이 잘 됐는지 확인해보기

        // 1. 검증하기

        if (email.includes("@") === false) {
            //document.getElementById("myerror").innerText = "이메일이 올바르지 않습니다. @가 없음"
            //alert("이메일이 올바르지 않습니다. @가 없음")
            setEmailError("이메일이 올바르지 않습니다. @가 없음")
        } else {
            // 2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수, 즉, API) => 나중에 할 것

            // 3. 성공 알람 보여주기
            alert("회원가입을 축하합니다!!")
        }
    }

    return (
        <div>
            이메일 : <input type="text" onChange={onChangeEmail} />
            {/* <div id="myEmail"></div> */}
            <div>{emailError}</div>
            비밀번호 : <input type="password" onChange={onChangePassword} />
            <div></div>
            <button onClick={onChangeSignup}>회원가입</button>
        </div>
    )
}