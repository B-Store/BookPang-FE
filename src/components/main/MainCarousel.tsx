"use client";
import {
  getBestsellers,
  getNewBooks,
  getRecommended,
} from "@/api/query/main/carousel";
import { QUERY_KEYS } from "@/api/queryKey/queryKeys";
import styles from "@/styles/pages/main.module.scss";
import {
  NewBooksCarouselType,
  RecommendedCarouselType,
} from "@/types/bookTypes";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import BestCarouselItem from "./BestCarouselItem";
import MainCarouselItem from "./RecommendedCarouselItem";
import NewCarouselItem from "./NewCarouselItem";

const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNewBookSecondPage, setIsNewBookSecondPage] = useState(false);
  const [isBestSellerSecondPage, setIsBestSellerSecondPage] = useState(false);
  // const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  const { data: recommendedData } = useQuery<RecommendedCarouselType[]>({
    queryKey: [QUERY_KEYS.mainRecommendedBooks],
    queryFn: () => getRecommended(),
  });

  const { data: newBooksData } = useQuery<NewBooksCarouselType[]>({
    queryKey: [QUERY_KEYS.mainNewBooks],
    queryFn: () => getNewBooks(),
  });
  console.log("newBooksData", newBooksData);

  const { data: bestsellerData } = useQuery({
    queryKey: [QUERY_KEYS.mainBestBooks],
    queryFn: () => getBestsellers(),
  });

  // console.log("bestsellerData", bestsellerData);

  if (!recommendedData || !newBooksData) {
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
      <MainCarouselItem
        recommendedData={recommendedData}
        currentIndex={currentIndex}
        nextRecommendedHandler={nextRecommendedHandler}
        prevRecommendedHandler={prevRecommendedHandler}
      />

      <NewCarouselItem
        newBooksData={newBooksData}
        isNewBookSecondPage={isNewBookSecondPage}
        newBooksCarouselHandler={newBooksCarouselHandler}
      />

      <BestCarouselItem
        newBooksData={newBooksData}
        isBestSellerSecondPage={isBestSellerSecondPage}
        bestSellerCarouselHandler={bestSellerCarouselHandler}
      />
    </div>
  );
};

export default MainCarousel;
