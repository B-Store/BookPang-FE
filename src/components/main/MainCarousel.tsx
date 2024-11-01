"use client";
import { useCarouselsData } from "@/api/query/mainQueries";
import styles from "@/styles/pages/main.module.scss";
import { useState } from "react";
import BestBookCarouselItem from "./BestBookCarouselItem";
import NewBookCarouselItem from "./NewBookCarouselItem";
import RecommendedBookCarouselItem from "./RecommendedBookCarouselItem";

const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNewBookSecondPage, setIsNewBookSecondPage] = useState(false);
  const [isBestSellerSecondPage, setIsBestSellerSecondPage] = useState(false);
  // const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

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

  // 편집장의 선택 캐러셀 버튼
  const nextRecommendedHandler = () => {
    setCurrentIndex(prev => (prev + 1) % recommendedData.length);
  };

  const prevRecommendedHandler = () => {
    setCurrentIndex(
      prev => (prev - 1 + recommendedData.length) % recommendedData.length
    );
  };

  // 신작도서 캐러셀 버튼
  const newBooksCarouselHandler = () => {
    setIsNewBookSecondPage(prev => !prev);
  };

  // 베스트셀러 캐러셀 버튼
  const bestSellerCarouselHandler = () => {
    setIsBestSellerSecondPage(prev => !prev);
  };

  // const carouselMenu = ["국내도서", "외국도서", "eBook"];

  return (
    <div className={styles["main-carousel-wrap"]}>
      {/* <div className={styles["main-carousel-wrap-title"]}>
        <p className={styles["main-carousel-title"]}>
          북팡에서 꾸준히 사랑받는 책
        </p>
        <ul className={styles["main-carousel-menu-btn"]}>
          {carouselMenu.map((item, idx) => {
            return (
              <li
                key={idx}
                onClick={() => setSelectedMenuIndex(idx)}
                className={selectedMenuIndex === idx ? styles["active"] : ""}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <span>더보기 +</span>
      </div> */}
      <RecommendedBookCarouselItem
        recommendedData={recommendedData}
        currentIndex={currentIndex}
        nextRecommendedHandler={nextRecommendedHandler}
        prevRecommendedHandler={prevRecommendedHandler}
      />

      <NewBookCarouselItem
        newBooksData={newBooksData}
        isNewBookSecondPage={isNewBookSecondPage}
        newBooksCarouselHandler={newBooksCarouselHandler}
      />

      <BestBookCarouselItem
        bestsellerData={bestsellerData}
        isBestSellerSecondPage={isBestSellerSecondPage}
        bestSellerCarouselHandler={bestSellerCarouselHandler}
      />
    </div>
  );
};

export default MainCarousel;
