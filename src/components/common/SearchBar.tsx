import React from "react";
import magnifier from "@/../public/assets/icons/magnifier.svg";
import searchBarLine from "@/../public/assets/icons/searchBarLine.svg";
import Image from "next/image";
import "@/styles/main/searchBar.scss";

const SearchBar = () => {
  return (
    <div>
      <form className="search-form">
        <select name="" id="">
          <option value="">통합검색</option>
        </select>
        <Image src={searchBarLine} alt="검색버튼" width={0} height={14} />
        <input type="text" placeholder="⌜벌거벗은 세계사⌟ 한정판 출간" />
        <button className="search-btn">
          <Image src={magnifier} alt="검색버튼" width={24} height={24} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
