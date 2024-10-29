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
  cover: string;
  createdAt: string;
  id: number;
  publisher: string;
  title: string;
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
  newBooksData: BestSellerCarouselType[];
  isBestSellerSecondPage: boolean;
  bestSellerCarouselHandler: () => void;
};

export type BookListType = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  cover: string;
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
