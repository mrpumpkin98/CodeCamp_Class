import { useMutation, gql } from "@apollo/client"

const 나의그래프큐엘셋팅 = gql`
        mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {
                writer: "신재욱",
                title: "안녕하시오",
                contents: "반갑습니다"
            }
        })
        console.log(result)
    }

    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button> //한 줄일 때는 괄호 필요 없음


}