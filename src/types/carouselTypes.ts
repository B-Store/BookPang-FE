export type RecommendedBookCarouselTypes = {
  author: string;
  cover: string;
  description: string;
  discountRate: number;
  id: number;
  publisher: string;
  regularPrice: number;
  salePrice: number;
  title: string;
};

export type NewBookCarouselTypes = {
  author: string;
  cover: string;
  createdAt: string;
  id: number;
  publisher: string;
  title: string;
};

export type BestSellerCarouselTypes = {
  author: string;
  averageRating: null;
  cover: string;
  createdAt: string;
  deletedAt: null;
  description: string;
  id: number;
  isbn13: string;
  itemId: string;
  link: string;
  mileage: number;
  publisher: string;
  regularPrice: number;
  salePrice: number;
  searchTarget: string;
  sourceType: string;
  stockQuantity: number;
  title: string;
  totalQuantity: number;
  updatedAt: string;
};

export type RecommendedCarouselPropsTypes = {
  recommendedData: RecommendedBookCarouselTypes[];
  currentIndex: number;
  nextRecommendedHandler: () => void;
  prevRecommendedHandler: () => void;
};

export type NewBookCarouselPropsTypes = {
  newBooksData: NewBookCarouselTypes[];
  isNewBookSecondPage: boolean;
  newBooksCarouselHandler: () => void;
};

export type BestSellerCarouselPropsTypes = {
  bestsellerData: BestSellerCarouselTypes[];
  isBestSellerSecondPage: boolean;
  bestSellerCarouselHandler: () => void;
};
