import { useCarouselsData } from "@/api/query/mainQuerys";
import { koreaBookList } from "@/utils/temp/bookList";
import Image from "next/image";
import React from "react";

const BookListPage = () => {
  const {
    recommendedData,
    newBooksData,
    bestsellerData,
    isRecommendedLoading,
    isNewBooksLoading,
    isBestsellerLoading,
    isRecommendedError,
    isNewBooksError,
    isBestsellerError,
  } = useCarouselsData();

  if (isRecommendedLoading || isNewBooksLoading || isBestsellerLoading) {
    return <div>로딩중 입니다</div>;
  }

  if (isRecommendedError || isNewBooksError || isBestsellerError) {
    console.error("에러 발생");
    return;
  }

  if (!recommendedData || !newBooksData || !bestsellerData) {
    console.log("데이터가 존재하지 않음");
    return;
  }

  return (
    <div>
      {koreaBookList.map(item => {
        return (
          <div key={item.id}>
            <Image src={item.cover} alt="도서 커버" width={124} height={181} />
            <div>{item.title}</div>
            <div>{item.author}</div>
            <div>{item.publisher}</div>
          </div>
        );
      })}
      ss
    </div>
  );
};

export default BookListPage;
