import { NewBooksCarouselPropsType } from "@/types/bookTypes";
import Image from "next/image";
import React from "react";
import styles from "@/styles/components/mainComponent/newBooks.module.scss";

const NewCarouselItem = ({
  newBooksData,
  isNewBookSecondPage,
  newBooksCarouselHandler,
}: NewBooksCarouselPropsType) => {
  const newBooksItems = isNewBookSecondPage
    ? newBooksData.slice(10)
    : newBooksData.slice(0, 10);

  return (
    <div className={styles["new-books-wrapper"]}>
      <button onClick={newBooksCarouselHandler}>이전</button>
      <div className={styles["new-books-wrapper-box"]}>
        {newBooksItems.map(item => {
          return (
            <div key={item.id} className={styles["new-books-item"]}>
              <Image
                src={item.cover}
                alt="신작 도서 커버"
                width={100}
                height={160}
              />
              <div className={styles["new-books-item-title"]}>{item.title}</div>
              <div className={styles["new-books-item-author"]}>
                {item.author}
              </div>
              <div className={styles["new-books-item-publisher"]}>
                {item.publisher}
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={newBooksCarouselHandler}>다음</button>
    </div>
  );
};

export default NewCarouselItem;
