import { getCategories } from "@/api/booksApi/books";
import { BOOKS_QUERY_KEY } from "@/api/queryKey/queryKeys";
import styles from "@/styles/components/toggleMenu/toggleMenu.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
const ToggleMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("국내도서");

  const router = useRouter();

  const { data: categoryData } = useQuery<string[]>({
    queryKey: [BOOKS_QUERY_KEY.headerCategories, selectedCategory],
    queryFn: () => getCategories(selectedCategory),
  });

  const categoryKey = ["국내도서", "외국도서", "eBook"];

  const categoryClickHandler = (category: string) => {
    setSelectedCategory(category === "eBook" ? "전자책" : category);
  };

  return (
    <div className={styles["menu-warp"]}>
      <div className={styles["category-wrap"]}>
        {categoryKey.map((item, idx) => {
          return (
            <div key={idx} onClick={() => categoryClickHandler(item)}>
              <div>{item}</div>
            </div>
          );
        })}
      </div>

      <div
        className={styles["category-list-wrap"]}
        onClick={() => router.push("/bookList")}
      >
        <div>국내도서 전체</div>
        {categoryData?.map((item, idx) => {
          return (
            <div key={idx}>
              <div>{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToggleMenu;
