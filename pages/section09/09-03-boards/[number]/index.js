import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingPage() {
    const router = useRouter()
    console.log(router)

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    })

    console.log(data)

    const onClickUpdate = () => {
        router.push(`/section09/09-03-boards/${router.query.number}/edit`)
    }

    const onClickSubmit = () => {
        router.push(`/section09/09-03-boards/new`)
    }


    return (
        <div>
            <div>2번 게시글 이동이 완료되었습니다.</div>
            <div>작성자: {data && data?.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data ? data?.fetchBoard?.contents : "로딩중입니다!!!"}</div>
            <button onClick={onClickUpdate}>수정하러가기</button>
            <button onClick={onClickSubmit}>등록하러가기</button>
        </div>
    )
}