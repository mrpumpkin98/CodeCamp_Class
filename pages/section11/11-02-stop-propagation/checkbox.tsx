export default function Checkbox() {

    const qqq2 = (event) => {
        event.stopPropagation()
        alert("2번 클릭")
    }

    const qqq3 = (event) => {
        alert("3번 클릭")
    }

    return (
        <span onClick={qqq2}>
            <input type="checkbox" onClick={qqq3} />
        </span>
    )
}