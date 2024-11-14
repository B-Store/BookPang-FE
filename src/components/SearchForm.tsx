import magnifier from "@/../public/assets/icons/magnifier.svg";
import searchBarLine from "@/../public/assets/icons/searchBarLine.svg";
import { useSearchData } from "@/api/query/searchQuery";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchKeywordStore } from "@/store/searchStore";
import styles from "@/styles/components/search/searchForm.module.scss";
import { searchData } from "@/utils/temp/searchData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const SearchBar = () => {
  const searched = useSearchKeywordStore(state => state.searched);

  const { register, watch, reset, handleSubmit } = useForm();
  const searchKeyword = watch("searchKeyword");
  const debouncedKeyword = useDebounce(searchKeyword, 300);

  const router = useRouter();

  // const { data, isLoading, isError } = useSearchData(debouncedKeyword);

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
    searched(data);
    router.push("/searchList");
  };

  const highlightKeyword = (title: string, keyword: string) => {
    const parts = title.split(new RegExp(`(${keyword})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span key={index} className={styles["highlight"]}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <form
      onSubmit={handleSubmit(searchSubmitHandler)}
      className={styles["search-form"]}
    >
      {/* <select {...register("searchType")} className={styles["search-select"]}> */}
      <select className={styles["search-form-select"]}>
        <option value="통합검색">통합검색</option>
        <option value="국내도서">국내도서</option>
        <option value="외국도서">외국도서</option>
        <option value="eBook">eBook</option>
      </select>

      <Image src={searchBarLine} alt="구분 선" width={0} height={14} />

      <input
        {...register("searchKeyword")}
        className={styles["search-form-input"]}
        type="text"
        placeholder="⌜벌거벗은 세계사⌟ 한정판 출간"
      />
      {debouncedKeyword && (
        <div className={styles["search-result-list"]}>
          {searchData?.map(item => {
            return (
              <ul key={item.id} className={styles["search-result-list-ul"]}>
                {/* <li>
                  <Image
                    src={item.cover}
                    alt="검색 도서 이미지"
                    width={62}
                    height={96}
                  />
                </li> */}
                <div className={styles["search-data"]}>
                  <li className={styles["search-data-title"]}>
                    {highlightKeyword(item.title, debouncedKeyword)}
                  </li>
                  <li className={styles["search-data-author"]}>
                    {item.author}
                  </li>
                </div>
              </ul>
            );
          })}
          <div className={styles["result-line"]}>
            <p onClick={() => reset()} className={styles["result-line-txt"]}>
              닫기
            </p>
          </div>
        </div>
      )}

      <button className={styles["search-form-btn"]}>
        <Image src={magnifier} alt="검색버튼" width={24} height={24} />
      </button>
    </form>
  );
};

export default SearchBar;
