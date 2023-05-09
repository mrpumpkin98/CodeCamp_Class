declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage(): JSX.Element {
  const onclickPayment = (): void => {
    const IMP = window.IMP; // 생략 가능
    console.log(IMP);
    IMP.init("imp49910675"); // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/section28/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);
          // 백엔드에 결제관련 데이터 넘겨주기 => 즉 뮤테이션 실행하기
          // createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <>
      {/* 아임포트 라이브러리 */}
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <button onClick={onclickPayment}>결제하기</button>
    </>
  );
}
