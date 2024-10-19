export type CartBookList = {
  title: string;
  link: string;
  author: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  cover: string;
  categoryName: string;
};

export type MainCarouselItem = {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  mallType: string;
  stockStatus: string;
  mileage: number;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  salesPoint: number;
  adult: boolean;
  fixedPrice: boolean;
  customerReviewRank: number;
  subInfo: {};
};

export type BookList = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  cover: string;
};
