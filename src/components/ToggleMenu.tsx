import { useCategoryData } from "@/api/query/commonQueries";
import styles from "@/styles/components/toggleMenu/toggleMenu.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
const ToggleMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("국내도서");

  const {
    categoryData,
    newSpecialData,
    isCategoryLoading,
    isNewSpecialLoading,
    isNewSpecialError,
    isCategoryError,
  } = useCategoryData(selectedCategory);

  const router = useRouter();

  if (isCategoryLoading || isNewSpecialLoading) {
    return <div>로딩중 입니다</div>;
  }

  if (isCategoryError || isNewSpecialError) {
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
      <div>
        {newSpecialData?.map(item => {
          return (
            <div key={item.id}>
              <Image
                src={item.cover}
                alt="주목할 신작 도서 커버"
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToggleMenu;
