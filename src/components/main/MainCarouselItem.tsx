import React from "react";
import styles from "@/styles/main/mainCarousel.module.scss";
import Image from "next/image";
import { MainCarouselPropsType } from "@/types/bookTypes";
import { discountRateHandler } from "@/utils/common";

const MainCarouselItem = ({
  recommendedData,
  currentIndex,
  nextItemHandler,
  prevItemHandler,
}: MainCarouselPropsType) => {
  return (
    <div>
      <div className={styles["main-carousel-container"]}>
        <div className={styles["main-carousel-first"]}>
          <Image
            src={recommendedData[currentIndex].cover}
            className="w-full h-80"
            alt="캐러셀 메인 이미지"
            width={160}
            height={190}
          />
          <div className={styles["main-carousel-first-info"]}>
            <div className={styles["first-info-title"]}>
              {/* <span>
                [
                {categoryNameChangeHandler(
                  recommendedData[currentIndex].categoryName
                )}
                ]
              </span> */}
              <span>{recommendedData[currentIndex].title}</span>
            </div>

            <span className={styles["first-info-publisher"]}>
              {recommendedData[currentIndex].publisher}
            </span>
            <div>
              <span className={styles["discount-rate"]}>
                {discountRateHandler(
                  recommendedData[currentIndex].salePrice,
                  recommendedData[currentIndex].regularPrice
                )}
                %
              </span>
              <span className={styles["first-info-price"]}>
                {recommendedData[currentIndex].salePrice}
              </span>
            </div>

            <span className={styles["first-info-description"]}>
              {recommendedData[currentIndex].description}
            </span>
          </div>
        </div>
        <div className={styles["main-carousel-list"]}>
          <button onClick={prevItemHandler} className={styles["carousel-btn"]}>
            이전
          </button>
          {recommendedData
            .filter((_: any, index: number) => index !== currentIndex)
            .map(item => (
              <div key={item.id} className={styles["main-carousel"]}>
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

          <button onClick={nextItemHandler} className={styles["carousel-btn"]}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCarouselItem;
