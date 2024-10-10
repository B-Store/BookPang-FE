"use client";

import Modal from "@/components/common/Modal";
import "@/styles/modal.scss";
import { BookList } from "@/types/bookType";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const PaymentPage = () => {
  // const searchParams = useSearchParams();
  // const itemsParam = searchParams.get("item");
  // const checkItems: BookList[] = itemsParam
  //   ? JSON.parse(decodeURIComponent(itemsParam))
  //   : [];

  const [isAddressModal, setIsAddressModal] = useState(false);

  // const themeObj = {
  //   bgColor: "#ECECEC", // 바탕 배경색
  //   searchBgColor: "", // 검색창 배경색
  //   contentBgColor: "", // 본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
  //   pageBgColor: "", // 페이지 배경색
  //   textColor: "", // 기본 글자색
  //   queryTextColor: "", // 검색창 글자색
  //   postcodeTextColor: "", // 우편번호 글자색
  //   emphTextColor: "", // 강조 글자색
  //   outlineColor: "", // 테두리
  // };

  return (
    <div>
      <div>결제하기</div>
      <div>
        <div>배송주소</div>
        <div>배송 받을 주소를 등록해 주세요</div>
        <button
          onClick={() => {
            setIsAddressModal(true);
          }}
        >
          주소 등록하기
        </button>

        {isAddressModal && (
          <Modal>{/* <DaumPostcode theme={themeObj} /> */}</Modal>
        )}
      </div>
      {/* {checkItems.map(item => {
        return (
          <div
            key={item.itemId}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image src={item.cover} alt="도서 이미지" width={56} height={88} />
            <div className="cartItem-contents">
              <div>[{item.categoryName}]</div>
              <div>{item.title}</div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "30px" }}
              >
                <div> {item.priceSales}</div>
              </div>
            </div>

            <div>
              결제금액
              <div>원</div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default PaymentPage;
