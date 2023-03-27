import { useQuery, gql } from "@apollo/client"
import Checkbox from "./checkbox"

const FETCH_BOARDS = gql`
    query {
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`



export default function StaticRoutingPage() {
    const { data } = useQuery(FETCH_BOARDS)

    console.log(data)

    const qqq1 = (event) => {
        alert("1번 클릭")
    }

    // const qqq2 = (event) => {
    //     event.stopPropagation()
    //     alert("2번 클릭")
    // }

    // const qqq3 = (event) => {
    //     alert("3번 클릭")
    // }


    const qqq4 = (event) => {
        event.stopPropagation()
        alert("4번 클릭")
    }


    return (
        <div>
            {data?.fetchBoards.map((el: any) => (
                <div id={el.writer} onClick={qqq1}>
                    <Checkbox />
                    <span style={{ margin: "10px" }} onClick={qqq4}>{el.number}</span>
                    <span style={{ margin: "10px" }} id={el.writer}>{el.title}</span>
                    <span style={{ margin: "10px" }} >{el.writer}</span>
                </div>
            ))}
        </div>
    )
}