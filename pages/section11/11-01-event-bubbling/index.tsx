import { useQuery, gql } from "@apollo/client"

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

    const onClick = (event) => {
        console.log(event.target.id)
        alert(`${event.currentTarget.id}님이 작성한 글`)
    }

    // const mystyle = {
    //     margin: "10px"
    // }

    return (
        <div>
            {data?.fetchBoards.map((el: any) => (
                <div id={el.writer} onClick={onClick}>
                    <span><input type="checkbox" /></span>
                    <span style={{ margin: "10px" }} >{el.number}</span>
                    <span style={{ margin: "10px" }} id={el.writer}>{el.title}</span>
                    <span style={{ margin: "10px" }} >{el.writer}</span>
                </div>
            ))}
        </div>
    )
}