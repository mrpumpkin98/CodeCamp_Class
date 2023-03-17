import { useMutation, gql } from "@apollo/client"

//상품 등록을 위해 입력한 값을 api로 보내주는 기능 구현

const CREATE_PRODUCT = gql`
        mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: "철수",
                createProductInput: {
                    name: "마우스",
                    detail: "좋은 마우스",
                    price: 2000
                }
            }
        })
        console.log(result)
    }

    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button> //한 줄일 때는 괄호 필요 없음


}