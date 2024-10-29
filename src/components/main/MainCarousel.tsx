"use client";
import { getNewBooks, getRecommended } from "@/api/query/main/carousel";
import { QUERY_KEYS } from "@/api/queryKey/queryKeys";
import styles from "@/styles/main/mainCarousel.module.scss";
import { MainCarouselItemType, NewBooksCarouselType } from "@/types/bookTypes";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import BastCarouselItem from "./BastCarouselItem";
import MainCarouselItem from "./MaincarouselItem";
import NewCarouselItem from "./NewCarouselItem";

const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  const { data: recommendedData } = useQuery<MainCarouselItemType[]>({
    queryKey: [QUERY_KEYS.mainRecommended],
    queryFn: () => getRecommended(),
  });

  const { data: newBooksData } = useQuery<NewBooksCarouselType[]>({
    queryKey: [QUERY_KEYS.mainNewBooks],
    queryFn: () => getNewBooks(),
  });
  console.log("newBooksData", newBooksData);

  if (!recommendedData) {
    return;
  }

  // 캐러샐 다음 버튼
  const nextItemHandler = () => {
    setCurrentIndex(prev => (prev + 1) % recommendedData.length);
  };

  // 캐러샐 이전 버튼
  const prevItemHandler = () => {
    setCurrentIndex(
      prev => (prev - 1 + recommendedData.length) % recommendedData.length
    );
  };

  const carouselMenu = ["국내도서", "외국도서", "eBook"];

  return (
    <div className={styles["main-carousel-wrap"]}>
      <div className={styles["main-carousel-wrap-title"]}>
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
      </div>
      <MainCarouselItem
        recommendedData={recommendedData}
        currentIndex={currentIndex}
        nextItemHandler={nextItemHandler}
        prevItemHandler={prevItemHandler}
      />
      <BastCarouselItem />
      <NewCarouselItem />
    </div>
  );
};

export default MainCarousel;
