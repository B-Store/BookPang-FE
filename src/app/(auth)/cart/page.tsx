'use client';

import Image from 'next/image';

const CartPage = () => {
  const books = [
    {
      title:
        '아기 물고기 하양이가 태어난 날 - 아기 물고기 하양이 출간 20주년 특별판',
      link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=347100337&amp;partner=openAPI&amp;start=api',
      author: '히도 반 헤네흐텐 (지은이), 라미파 (옮긴이)',
      itemId: 347100337,
      priceSales: 15300,
      priceStandard: 17000,
      cover:
        'https://image.aladin.co.kr/product/34710/3/coversum/k492933119_1.jpg',
      categoryName: '국내도서>유아>그림책>나라별 그림책>유럽',
    },
    // {
    //   title: '뭉이둥이',
    //   link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=347099960&amp;partner=openAPI&amp;start=api',
    //   author: '전성재 (지은이)',
    //   itemId: 347099960,
    //   priceSales: 12000,
    //   priceStandard: 12000,
    //   cover:
    //     'https://image.aladin.co.kr/product/34709/99/coversum/9791194112051.jpg',
    //   categoryName: '국내도서>소설/시/희곡>시>한국시',
    // },
    // {
    //   title: '제과제빵 이론',
    //   link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=347099042&amp;partner=openAPI&amp;start=api',
    //   author: '류재은 (지은이)',
    //   itemId: 347099042,
    //   priceSales: 17000,
    //   priceStandard: 17000,
    //   cover:
    //     'https://image.aladin.co.kr/product/34709/90/coversum/k302933119_1.jpg',
    //   categoryName:
    //     '국내도서>수험서/자격증>국가기술자격>제과.제빵>제과/제빵기능사',
    // },
    // {
    //   title:
    //     '알테쉬톡의 공습 - 알리, 테무, 쉬인, 틱톡샵의 실체와 우리의 대응 전략',
    //   link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=347098947&amp;partner=openAPI&amp;start=api',
    //   author: '박승찬 (지은이)',
    //   itemId: 347098947,
    //   priceSales: 18000,
    //   priceStandard: 20000,
    //   cover:
    //     'https://image.aladin.co.kr/product/34709/89/coversum/k372933119_1.jpg',
    //   categoryName:
    //     '국내도서>경제경영>경제학/경제일반>경제사/경제전망>세계 경제사/경제전망',
    // },
    // {
    //   title:
    //     '에스콰이어 Esquire C형 2024.10 (표지 : 스트레이 키즈 현진) - 주요기사 : 스트레이 키즈 현진',
    //   link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=347098682&amp;partner=openAPI&amp;start=api',
    //   author: '에스콰이어 편집부 (지은이)',
    //   itemId: 347098682,
    //   priceSales: 13300,
    //   priceStandard: 14000,
    //   cover:
    //     'https://image.aladin.co.kr/product/34709/86/coversum/k362933119_2.jpg',
    //   categoryName: '국내도서>잡지>여성/남성/패션>남성지',
    // },
    // {
    //   title: '[큰글자도서] 파과 (리커버)',
    //   link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=347098533&amp;partner=openAPI&amp;start=api',
    //   author: '구병모 (지은이)',
    //   itemId: 347098533,
    //   priceSales: 34000,
    //   priceStandard: 34000,
    //   cover:
    //     'https://image.aladin.co.kr/product/34709/85/coversum/k242933119_1.jpg',
    //   categoryName: '국내도서>소설/시/희곡>한국소설>2000년대 이후 한국소설',
    // },
  ];
  return (
    <div>
      <p>장바구니</p>
      <input type="checkbox" /> <p>전체 선택</p>
      <div>
        {books.map(item => {
          return (
            <div key={item.itemId}>
              <Image
                src={item.cover}
                alt="도서 이미지"
                width={56}
                height={88}
              />
              <div>{item.categoryName}</div>
              <div>{item.title}</div>
              <div>{item.priceSales}</div>
              <div>{item.priceStandard}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
