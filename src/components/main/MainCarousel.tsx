"use client";
import { MainCarouselItem } from "@/types/bookType";
import { mainItem } from "@/utils/temp";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/styles/main/mainCarousel.module.scss";
import { categoryNameChangeHandler, discountRateHandler } from "@/utils/common";

const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  // 캐러샐 다음 버튼
  const nextItemHandler = () => {
    setCurrentIndex(prev => (prev + 1) % mainItem.length);
  };

  // 캐러샐 이전 버튼
  const prevItemHandler = () => {
    setCurrentIndex(prev => (prev - 1 + mainItem.length) % mainItem.length);
  };

  // 캐러샐 책 종류 버튼
  const CarouselMenuBtnHandler = (index: number) => {
    setSelectedMenuIndex(index);
  };

  return (
    <div className={styles["main-carousel-wrap"]}>
      <div className={styles["main-carousel-title-wrap"]}>
        <p className={styles["main-carousel-title"]}>
          북팡에서 꾸준히 사랑받는 책
        </p>
        <ul className={styles["main-carousel-menu-btn"]}>
          {["전체", "국내도서", "외국도서", "eBook"].map((item, index) => (
            <li
              key={index}
              onClick={() => CarouselMenuBtnHandler(index)}
              className={selectedMenuIndex === index ? styles["active"] : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles["main-carousel-container"]}>
        <div className={styles["main-carousel-first"]}>
          <Image
            src={mainItem[currentIndex].cover}
            className="w-full h-80"
            alt="캐러셀 메인 이미지"
            width={183}
            height={295}
          />
          <div className={styles["main-carousel-first-info"]}>
            <div className={styles["first-info-title"]}>
              <span>
                [
                {categoryNameChangeHandler(mainItem[currentIndex].categoryName)}
                ]
              </span>
              <span>{mainItem[currentIndex].title}</span>
            </div>

            <span className={styles["first-info-publisher"]}>
              {mainItem[currentIndex].publisher}
            </span>
            <div>
              <span className={styles["discount-rate"]}>
                {discountRateHandler(
                  mainItem[currentIndex].priceSales,
                  mainItem[currentIndex].priceStandard
                )}
                %
              </span>
              <span className={styles["first-info-price"]}>
                {mainItem[currentIndex].priceSales}
              </span>
            </div>

            <span className={styles["first-info-description"]}>
              {mainItem[currentIndex].description}
            </span>
          </div>
        </div>
        <div className={styles["main-carousel-list"]}>
          <button onClick={prevItemHandler} className={styles["carousel-btn"]}>
            이전
          </button>
          {/* <div className={styles["main-carousel-container"]}> */}
          {mainItem
            .filter((_, index) => index !== currentIndex)
            .map((item: MainCarouselItem) => (
              <div key={item.itemId} className={styles["main-carousel"]}>
                <Image
                  src={item.cover}
                  className="w-full h-80"
                  alt="캐러셀 리스트 이미지"
                  width={145}
                  height={184}
                />
                <div className={styles["main-carousel-info"]}>{item.title}</div>
              </div>
            ))}
          {/* </div> */}

          <button onClick={nextItemHandler} className={styles["carousel-btn"]}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
