"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

const PaymentPage = () => {
  const searchParams = useSearchParams();
  const itemsParam = searchParams.get("item"); // 쿼리에서 items 가져오기
  const checkItems = itemsParam
    ? JSON.parse(decodeURIComponent(itemsParam))
    : [];

  console.log("checkItems", checkItems);

  return (
    <div>
      {checkItems.map(item => {
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
      })}
    </div>
  );
};

export default PaymentPage;
