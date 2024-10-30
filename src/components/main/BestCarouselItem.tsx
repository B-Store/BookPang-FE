import { BestSellerCarouselPropsType } from "@/types/bookTypes";
import React from "react";
import styles from "@/styles/components/mainComponent/bestBooks.module.scss";
import Image from "next/image";
import Link from "next/link";

const BestCarouselItem = ({
  bestsellerData,
  isBestSellerSecondPage,
  bestSellerCarouselHandler,
}: BestSellerCarouselPropsType) => {
  const bestsellerItems = isBestSellerSecondPage
    ? bestsellerData.slice(12)
    : bestsellerData.slice(0, 12);

  const bookItem = 12;
  const currentPage = isBestSellerSecondPage ? 2 : 1;

  return (
    <div className={styles["bestseller-wrapper"]}>
      <Link href={"/bookList"}>베스트셀러</Link>
      <button onClick={bestSellerCarouselHandler}>이전</button>
      <div className={styles["bestseller-wrapper-box"]}>
        {bestsellerItems.map((item, idx) => {
          const booksNumber = (currentPage - 1) * bookItem + idx + 1;
          return (
            <div key={item.id} className={styles["bestseller-item"]}>
              <Image
                src={item.cover}
                alt="베스트셀러 도서 커버"
                width={100}
                height={160}
              />
              <div className={styles["bestseller-item-info"]}>
                <div className={styles["item-title-box"]}>
                  <span>{booksNumber}</span>
                  <span className={styles["bestseller-item-title"]}>
                    {item.title}
                  </span>
                </div>
                <div className={styles["item-author-box"]}>
                  <span className={styles["bestseller-item-author"]}>
                    {item.author}
                  </span>
                  <span className={styles["bestseller-item-publisher"]}>
                    {item.publisher}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={bestSellerCarouselHandler}>다음</button>
    </div>
  );
};

export default BestCarouselItem;
