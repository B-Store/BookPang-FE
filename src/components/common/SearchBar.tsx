import React from "react";
import magnifier from "@/../public/assets/icons/magnifier.svg";
import searchBarLine from "@/../public/assets/icons/searchBarLine.svg";
import Image from "next/image";
import styles from "@/styles/components/layout/searchBar.module.scss";
import { useForm } from "react-hook-form";

const SearchBar = () => {
  const { register, handleSubmit } = useForm();

  const searchSubmitHandler = (data: any) => {
    console.log("검색!!!!!!!", data);
  };

  return (
    <div className={styles["search-bar-wrap"]}>
      <form
        onSubmit={handleSubmit(searchSubmitHandler)}
        className={styles["search-form"]}
      >
        <select {...register("searchType")} className={styles["search-select"]}>
          <option value="통합검색">통합검색</option>
        </select>

        <Image src={searchBarLine} alt="검색버튼" width={0} height={14} />

        <input
          {...register("searchKeyword")}
          className={styles["search-input"]}
          type="text"
          placeholder="⌜벌거벗은 세계사⌟ 한정판 출간"
        />

        <button className={styles["search-btn"]}>
          <Image src={magnifier} alt="검색버튼" width={24} height={24} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
