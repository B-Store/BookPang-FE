import magnifier from "@/../public/assets/icons/magnifier.svg";
import searchBarLine from "@/../public/assets/icons/searchBarLine.svg";
import { useSearchData } from "@/api/query/searchQuery";
import { useDebounce } from "@/hooks/useDebounce";
import styles from "@/styles/components/search/searchForm.module.scss";
import Image from "next/image";
import { useForm } from "react-hook-form";

const SearchBar = () => {
  const { register, watch, handleSubmit } = useForm();

  const searchKeyword = watch("searchKeyword");

  const debouncedKeyword = useDebounce(searchKeyword, 300);

  const { data, isLoading, isError } = useSearchData(debouncedKeyword);

  // useEffect(() => {
  //   console.log("Debounced keyword:", debouncedKeyword); // 디바운싱이 적용된 키워드 확인
  // }, [debouncedKeyword]);

  // useEffect(() => {
  //   if (data) {
  //     console.log("Fetched data:", data); // 서버 요청이 발생할 때마다 확인
  //   }
  // }, [data]);

  const searchSubmitHandler = (data: any) => {
    console.log("검색!!!!!!!", data);
  };

  return (
    <form
      onSubmit={handleSubmit(searchSubmitHandler)}
      className={styles["search-form"]}
    >
      {/* <select {...register("searchType")} className={styles["search-select"]}> */}
      <select className={styles["search-select"]}>
        <option className={styles["search-select-options"]} value="통합검색">
          통합검색
        </option>
        <option className={styles["search-select-options"]} value="국내도서">
          국내도서
        </option>
        <option className={styles["search-select-options"]} value="외국도서">
          외국도서
        </option>
        <option className={styles["search-select-options"]} value="eBook">
          eBook
        </option>
      </select>

      <Image src={searchBarLine} alt="구분 선" width={0} height={14} />

      <input
        {...register("searchKeyword")}
        className={styles["search-input"]}
        type="text"
        placeholder="⌜벌거벗은 세계사⌟ 한정판 출간"
      />
      <div className={styles["search-box"]}>
        {debouncedKeyword &&
          data?.map(item => [
            <div key={item.id}>
              <Image
                src={item.cover}
                alt="검색 도서 이미지"
                width={24}
                height={24}
              />
              <div>{item.title}</div>
              <div>{item.author}</div>
            </div>,
          ])}
      </div>
      <button className={styles["search-btn"]}>
        <Image src={magnifier} alt="검색버튼" width={24} height={24} />
      </button>
    </form>
  );
};

export default SearchBar;
