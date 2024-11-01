export type RecommendedCarouselType = {
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

export type NewBooksCarouselType = {
  author: string;
  cover: string;
  createdAt: string;
  id: number;
  publisher: string;
  title: string;
};

export type BestSellerCarouselType = {
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

export type RecommendedCarouselPropsType = {
  recommendedData: RecommendedCarouselType[];
  currentIndex: number;
  nextRecommendedHandler: () => void;
  prevRecommendedHandler: () => void;
};

export type NewBooksCarouselPropsType = {
  newBooksData: NewBooksCarouselType[];
  isNewBookSecondPage: boolean;
  newBooksCarouselHandler: () => void;
};

export type BestSellerCarouselPropsType = {
  bestsellerData: BestSellerCarouselType[];
  isBestSellerSecondPage: boolean;
  bestSellerCarouselHandler: () => void;
};

export type CartBookListType = {
  title: string;
  link: string;
  author: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  cover: string;
  categoryName: string;
};

export type BookApiKey = "recommendedBook" | "newBook" | "bestseller";
