import { create } from "zustand";

type SearchKeywordType = {
  keyword: string;
  searched: (keyword: string) => void;
};

export const useSearchKeywordStore = create<SearchKeywordType>(set => ({
  keyword: "",
  isSearch: false,
  searched: (keyword: string) => set({ keyword }),
}));
