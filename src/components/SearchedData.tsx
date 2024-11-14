"use client";
import { SearchTypes } from "@/types/searchTypes";
import { allCheckedHandler, onCheckedHandler } from "@/utils/common";
import { searchData } from "@/utils/temp/searchData";
import React, { useState } from "react";
import styles from "@/styles/components/search/searchedData.module.scss";

const SearchedData = () => {
  const [checkItems, setCheckItems] = useState<SearchTypes[]>([]);

  return (
    <div className={styles["searched-data-wrap"]}>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={e => allCheckedHandler(e, searchData, setCheckItems)}
            checked={checkItems.length === searchData.length}
            className={styles["all-check-input"]}
          />
          전체선택
        </label>

        <select name="" id="">
          <option value="">정확도순</option>
          <option value="">평점순</option>
          <option value="">후기순</option>
          <option value="">가격순</option>
          <option value="">판매량순</option>
          <option value="">출시일순</option>
          <option value="">상품명순</option>
        </select>
        {searchData?.map(item => {
          return (
            <div key={item.id} className={styles["searched-data"]}>
              <input
                type="checkbox"
                onChange={e => onCheckedHandler(e, item, setCheckItems)}
                checked={checkItems.some(check => check.id === item.id)}
              />
              <div>{item.title}</div>
              <div>{item.publisher}</div>
              <div>{item.author}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchedData;
