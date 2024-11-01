import {
  getBestsellers,
  getNewBooks,
  getRecommended,
} from "@/api/dataApi/mainPageApi";
import {
  BestSellerCarouselTypes,
  NewBookCarouselTypes,
  RecommendedBookCarouselTypes,
} from "@/types/bookTypes";
import { useQuery } from "@tanstack/react-query";

const MAIN_QUERY_KEYS = {
  recommendedBookCarousel: "main/mainCarousel/recommendedCarouselItem",
  newBooksCarousel: "main/mainCarousel/newCarouselItem",
  bestBooksCarousel: "main/mainCarousel/bestCarouselItem",
};

export const useCarouselsData = () => {
  const {
    data: recommendedData,
    isLoading: isRecommendedLoading,
    isError: isRecommendedError,
  } = useQuery<RecommendedBookCarouselTypes[]>({
    queryKey: [MAIN_QUERY_KEYS.recommendedBookCarousel],
    queryFn: () => getRecommended(),
  });

  const {
    data: newBooksData,
    isLoading: isNewBooksLoading,
    isError: isNewBooksError,
  } = useQuery<NewBookCarouselTypes[]>({
    queryKey: [MAIN_QUERY_KEYS.newBooksCarousel],
    queryFn: () => getNewBooks(),
  });

  const {
    data: bestsellerData,
    isLoading: isBestsellerLoading,
    isError: isBestsellerError,
  } = useQuery<BestSellerCarouselTypes[]>({
    queryKey: [MAIN_QUERY_KEYS.bestBooksCarousel],
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
