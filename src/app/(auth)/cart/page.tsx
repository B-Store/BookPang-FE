"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export interface bookList {
  title: string;
  link: string;
  author: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  cover: string;
  categoryName: string;
}

const CartPage = () => {
  const books = [
    {
      title:
        "아기 물고기 하양이가 태어난 날 - 아기 물고기 하양이 출간 20주년 특별판",
      link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=347100337&amp;partner=openAPI&amp;start=api",
      author: "히도 반 헤네흐텐 (지은이), 라미파 (옮긴이)",
      itemId: 347100337,
      priceSales: 15300,
      priceStandard: 17000,
      cover:
        "https://image.aladin.co.kr/product/34710/3/coversum/k492933119_1.jpg",
      categoryName: "국내도서>유아>그림책>나라별 그림책>유럽",
    },
    {
      title: "뭉이둥이",
      link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=347099960&amp;partner=openAPI&amp;start=api",
      author: "전성재 (지은이)",
      itemId: 347099960,
      priceSales: 12000,
      priceStandard: 12000,
      cover:
        "https://image.aladin.co.kr/product/34709/99/coversum/9791194112051.jpg",
      categoryName: "국내도서>소설/시/희곡>시>한국시",
    },
    {
      title: "제과제빵 이론",
      link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=347099042&amp;partner=openAPI&amp;start=api",
      author: "류재은 (지은이)",
      itemId: 347099042,
      priceSales: 17000,
      priceStandard: 17000,
      cover:
        "https://image.aladin.co.kr/product/34709/90/coversum/k302933119_1.jpg",
      categoryName:
        "국내도서>수험서/자격증>국가기술자격>제과.제빵>제과/제빵기능사",
    },
    {
      title:
        "알테쉬톡의 공습 - 알리, 테무, 쉬인, 틱톡샵의 실체와 우리의 대응 전략",
      link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=347098947&amp;partner=openAPI&amp;start=api",
      author: "박승찬 (지은이)",
      itemId: 347098947,
      priceSales: 18000,
      priceStandard: 20000,
      cover:
        "https://image.aladin.co.kr/product/34709/89/coversum/k372933119_1.jpg",
      categoryName:
        "국내도서>경제경영>경제학/경제일반>경제사/경제전망>세계 경제사/경제전망",
    },
    {
      title:
        "에스콰이어 Esquire C형 2024.10 (표지 : 스트레이 키즈 현진) - 주요기사 : 스트레이 키즈 현진",
      link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=347098682&amp;partner=openAPI&amp;start=api",
      author: "에스콰이어 편집부 (지은이)",
      itemId: 347098682,
      priceSales: 13300,
      priceStandard: 14000,
      cover:
        "https://image.aladin.co.kr/product/34709/86/coversum/k362933119_2.jpg",
      categoryName: "국내도서>잡지>여성/남성/패션>남성지",
    },
    {
      title: "[큰글자도서] 파과 (리커버)",
      link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=347098533&amp;partner=openAPI&amp;start=api",
      author: "구병모 (지은이)",
      itemId: 347098533,
      priceSales: 34000,
      priceStandard: 34000,
      cover:
        "https://image.aladin.co.kr/product/34709/85/coversum/k242933119_1.jpg",
      categoryName: "국내도서>소설/시/희곡>한국소설>2000년대 이후 한국소설",
    },
  ];

  const [checkItems, setCheckItems] = useState<bookList[]>([]);
  const [productCounts, setProductCounts] = useState<{ [key: number]: number }>(
    {}
  );
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const router = useRouter();

  // 카테고리 이름 자르기 > 을 기준으로 앞부분만 자름
  const categoryNameChangeHandler = (category: string) => {
    return category.split(">", 1);
  };

  // 전체 선택
  const allCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckItems(books);
    } else {
      setCheckItems([]);
    }
  };

  // 개별 선택
  const onCheckedHandler = (
    e: ChangeEvent<HTMLInputElement>,
    item: bookList
  ) => {
    if (e.target.checked) {
      setCheckItems(prev => [...prev, item]);
    } else {
      setCheckItems(prev => prev.filter(book => book.itemId !== item.itemId));
    }
  };

  // 할인율 계산
  const discountRateHandler = (priceSales: number, priceStandard: number) => {
    return ((priceStandard - priceSales) / priceStandard) * 100;
  };

  const plusProduct = (item: number) => {
    setProductCounts(prev => ({
      ...prev,
      [item]: (prev[item] || 1) + 1,
    }));
  };

  const minusProduct = (item: number) => {
    setProductCounts(prev => ({
      ...prev,
      [item]: prev[item] > 1 ? prev[item] - 1 : 1,
    }));
  };

  // 총 결제 금액
  const totalPriceHandler = (
    priceSales: number,
    priceStandard: number,
    item: number
  ) => {
    const count = productCounts[item] || 1; // 해당 상품의 수량을 가져오거나 기본값 1
    return priceStandard - priceSales > 0
      ? priceSales * count
      : priceStandard * count;
  };

  return (
    <div className="cart-container">
      <p>장바구니</p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "50px",
          gap: "20px",
        }}
      >
        <label>
          <input
            type="checkbox"
            onChange={allCheckedHandler}
            checked={checkItems.length === books.length}
          />
          전체 선택
        </label>

        <div>
          <button>주문하기</button>
          <button>삭제하기</button>
        </div>
      </div>

      <div>
        {books.map(item => {
          return (
            <div
              key={item.itemId}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <input
                type="checkbox"
                onChange={e => onCheckedHandler(e, item)}
                checked={checkItems.some(book => book.itemId === item.itemId)}
              />

              <Image
                src={item.cover}
                alt="도서 이미지"
                width={56}
                height={88}
              />
              <div className="cartItem-contents">
                <div>[{categoryNameChangeHandler(item.categoryName)}]</div>
                <div>{item.title}</div>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "30px" }}
                >
                  {item.priceStandard - item.priceSales > 0 && (
                    <>
                      <div>
                        {`${discountRateHandler(
                          item.priceSales,
                          item.priceStandard
                        )}%`}
                      </div>
                      <div> {item.priceSales}</div>
                    </>
                  )}
                  <div
                    style={
                      item.priceStandard - item.priceSales > 0
                        ? { textDecoration: "line-through", color: "#717171" }
                        : {}
                    }
                  >
                    {item.priceStandard}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => minusProduct(item.itemId)}>{"<"}</button>

                <input
                  type="number"
                  min={1}
                  readOnly
                  value={productCounts[item.itemId] || 1}
                />
                <button onClick={() => plusProduct(item.itemId)}>{">"}</button>
              </div>
              <div>
                결제금액
                <div>
                  {totalPriceHandler(
                    item.priceSales,
                    item.priceStandard,
                    item.itemId
                  )}
                  원
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <hr />

      <div>
        <div>
          선택한상품금액
          {checkItems.reduce((total, item) => {
            return total + item.priceStandard;
          }, 0)}
          원
        </div>
        <div>
          할인금액
          {checkItems.reduce((total, item) => {
            return total + (item.priceStandard - item.priceSales);
          }, 0)}
          원
        </div>

        <div>
          주문금액
          {checkItems.reduce((total, item) => {
            return total + item.priceSales;
          }, 0)}
        </div>
        <button>찜하기</button>
        <button>구매하기</button>
      </div>

      <div
        style={{
          backgroundColor: "black",
          height: "200px",
          width: "100%",
          marginTop: "30px",
          color: "white",
        }}
      >
        총{checkItems.length}건 주문금액
        {checkItems.reduce((total, item) => {
          return total + item.priceSales;
        }, 0)}
        원
        <div onClick={() => setIsDetailVisible(true)}>
          결제 상세내역 임시 버튼
        </div>
        {isDetailVisible && (
          <div>
            <div onClick={() => setIsDetailVisible(false)}>닫기</div>
            결제 상세내역
            <div>
              상품 금액
              {checkItems.reduce((total, item) => {
                return total + item.priceStandard;
              }, 0)}
              원
            </div>
            <div>
              할인 금액
              {checkItems.reduce((total, item) => {
                return total + (item.priceStandard - item.priceSales);
              }, 0)}
              원
            </div>
            <hr />
            <div>
              최종 결제 금액
              {checkItems.reduce((total, item) => {
                return total + item.priceSales;
              }, 0)}
              원
            </div>
            <div>
              적립 포인트
              {checkItems.reduce((total, item) => {
                return total + item.priceSales * 0.01;
              }, 0)}
              원
            </div>
          </div>
        )}
        <button
          onClick={() =>
            router.push(
              `/payment?item=${encodeURIComponent(JSON.stringify(checkItems))}`
            )
          }
        >
          구매하기
        </button>
      </div>
    </div>
  );
};

export default CartPage;
