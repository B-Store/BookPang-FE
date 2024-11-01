import styles from "@/styles/components/mainComponent/bestBooks.module.scss";
import { BestSellerCarouselPropsTypes } from "@/types/bookTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BestBookCarouselItem = ({
  bestsellerData,
  isBestSellerSecondPage,
  bestSellerCarouselHandler,
}: BestSellerCarouselPropsTypes) => {
  // 캐러셀 페이지 나누기
  const bestsellerItems = isBestSellerSecondPage
    ? bestsellerData.slice(12)
    : bestsellerData.slice(0, 12);

  // 도서 순위(임시)
  const bookItem = 12;
  const currentPage = isBestSellerSecondPage ? 2 : 1;

  const router = useRouter();

  return (
    <div className={styles["bestseller-wrapper"]}>
      <p onClick={() => router.push("/bookList?data=bestseller")}>베스트셀러</p>
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

export default BestBookCarouselItem;
