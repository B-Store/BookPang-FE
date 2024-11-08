import styles from "@/styles/components/carousel/newBooks.module.scss";
import { NewBookCarouselPropsTypes } from "@/types/carouselTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NewBookCarouselItem = ({
  newBooksData,
  isNewBookSecondPage,
  newBooksCarouselHandler,
}: NewBookCarouselPropsTypes) => {
  const newBooksItems = isNewBookSecondPage
    ? newBooksData.slice(10)
    : newBooksData.slice(0, 10);

  const router = useRouter();

  return (
    <div className={styles["new-books-wrapper"]}>
      <p onClick={() => router.push("/bookList?data=newBook")}>새로나온 책</p>
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

export default NewBookCarouselItem;
