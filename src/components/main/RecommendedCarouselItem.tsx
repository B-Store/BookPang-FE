import React from "react";
import styles from "@/styles/components/mainComponent/recommendedBooks.module.scss";
import Image from "next/image";
import { RecommendedCarouselPropsType } from "@/types/bookTypes";
import { discountRateHandler } from "@/utils/common";
import Link from "next/link";
import { useCustomRouter } from "@/hooks/useCustomRouter";

const RecommendedCarouselItem = ({
  recommendedData,
  currentIndex,
  nextRecommendedHandler,
  prevRecommendedHandler,
}: RecommendedCarouselPropsType) => {
  // const {navigateParam}=useCustomRouter()

  // const bookListNavigateHandler=()=>{

  // }

  return (
    <div>
      <p>편집장 PICK</p>
      <div className={styles["main-carousel-container"]}>
        <div className={styles["main-carousel-first"]}>
          <Image
            src={recommendedData[currentIndex].cover}
            alt="추천 도서 첫번째 커버"
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
                {recommendedData[currentIndex].salePrice.toLocaleString()}원
              </span>
            </div>

            <span className={styles["first-info-description"]}>
              {recommendedData[currentIndex].description}
            </span>
          </div>
        </div>
        <div className={styles["main-carousel-list"]}>
          <button
            onClick={prevRecommendedHandler}
            className={styles["carousel-btn"]}
          >
            이전
          </button>
          {recommendedData
            .filter((_, index: number) => index !== currentIndex)
            .map(item => (
              <div key={item.id} className={styles["main-carousel"]}>
                <Image
                  src={item.cover}
                  className="w-full h-80"
                  alt="추천도서 리스트 커버"
                  width={145}
                  height={184}
                />
                <div className={styles["main-carousel-info"]}>{item.title}</div>
              </div>
            ))}

          <button
            onClick={nextRecommendedHandler}
            className={styles["carousel-btn"]}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCarouselItem;
