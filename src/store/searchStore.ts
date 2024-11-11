import { create } from "zustand";

type SearchKeywordType = {
  keyword: string;
  searched: (keyword: string) => void;
};

export const useSearchKeywordStore = create<SearchKeywordType>(set => ({
  keyword: "",
  searched: (keyword: string) => set({ keyword }),
}));
