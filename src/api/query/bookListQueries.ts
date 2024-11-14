import { useQuery } from "@tanstack/react-query";
import { getBookList } from "../dataApi/bookListPageApi";
import { BookApiKey } from "@/types/carouselTypes";

const BOOK_LIST_QUERY_KEYS = {
  bookList: "bookList",
};

export const useBookListData = (key: BookApiKey) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [BOOK_LIST_QUERY_KEYS.bookList],
    queryFn: () => getBookList(key),
  });

  return {
    data,
    isLoading,
    isError,
  };
};
