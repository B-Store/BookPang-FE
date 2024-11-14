import { useQuery } from "@tanstack/react-query";
import { getBookSearch } from "../dataApi/searchApi";
import { SearchTypes } from "@/types/searchTypes";

const BOOK_SEARCH_QUERY_KEYS = {
  bookSearch: "header/searchForm",
};

export const useSearchData = (keyword: string | null) => {
  const { data, isLoading, isError } = useQuery<SearchTypes[]>({
    queryKey: [BOOK_SEARCH_QUERY_KEYS.bookSearch, keyword],
    queryFn: () => getBookSearch(keyword),
    enabled: !!keyword && keyword.trim().length > 0,
  });

  return {
    data,
    isLoading,
    isError,
  };
};
