import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"

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
    const router = useRouter()

    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {

        try {
            const result = await 나의함수({
                variables: {
                    writer: "신재욱",
                    title: "안녕하시오",
                    contents: "반갑습니다"
                }
            })
            console.log(result)
            console.log(result.data.createBoard.number)
            router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
        } catch (error) {
            alert(error.message)
        }

    }

    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button> //한 줄일 때는 괄호 필요 없음


}