import { useCategoryData } from "@/api/query/commonQuerys";
import styles from "@/styles/components/toggleMenu/toggleMenu.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";
const ToggleMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("국내도서");

  const { categoryData, isCategoryLoading, isCategoryError } =
    useCategoryData(selectedCategory);

  const router = useRouter();

  if (isCategoryLoading) {
    return <div>로딩중 입니다</div>;
  }

  if (isCategoryError) {
    console.error("에러발생");
    return;
  }

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
          return <div key={idx}>{<div>{item.depth1}</div>}</div>;
        })}
      </div>
    </div>
  );
};

export default ToggleMenu;
