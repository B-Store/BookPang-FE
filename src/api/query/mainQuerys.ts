import {
  getBestsellers,
  getNewBooks,
  getRecommended,
} from "@/api/dataApi/mainPageApi";
import {
  BestSellerCarouselType,
  NewBooksCarouselType,
  RecommendedCarouselType,
} from "@/types/bookTypes";
import { useQuery } from "@tanstack/react-query";

export const MAIN_QUERY_KEYS = {
  headerCategories: "header/categories",
  mainRecommendedBooks: "main/carousel/recommended",
  mainNewBooks: "main/carousel/newBooks",
  mainBestBooks: "main/carousel/bestBooks",
};

export const useCarouselsData = () => {
  const {
    data: recommendedData,
    isLoading: isRecommendedLoading,
    isError: isRecommendedError,
  } = useQuery<RecommendedCarouselType[]>({
    queryKey: [MAIN_QUERY_KEYS.mainRecommendedBooks],
    queryFn: () => getRecommended(),
  });

  const {
    data: newBooksData,
    isLoading: isNewBooksLoading,
    isError: isNewBooksError,
  } = useQuery<NewBooksCarouselType[]>({
    queryKey: [MAIN_QUERY_KEYS.mainNewBooks],
    queryFn: () => getNewBooks(),
  });

  const {
    data: bestsellerData,
    isLoading: isBestsellerLoading,
    isError: isBestsellerError,
  } = useQuery<BestSellerCarouselType[]>({
    queryKey: [MAIN_QUERY_KEYS.mainBestBooks],
    queryFn: () => getBestsellers(),
  });

  return {
    recommendedData,
    newBooksData,
    bestsellerData,
    isRecommendedLoading,
    isNewBooksLoading,
    isBestsellerLoading,
    isRecommendedError,
    isNewBooksError,
    isBestsellerError,
  };
};
