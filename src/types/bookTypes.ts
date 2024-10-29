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

export type MainCarouselItemType = {
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

export type MainCarouselPropsType = {
  recommendedData: MainCarouselItemType[];
  currentIndex: number;
  nextItemHandler: () => void;
  prevItemHandler: () => void;
};

export type NewBooksCarouselType = {
  author: string;
  cover: string;
  createdAt: string;
  id: number;
  publisher: string;
  title: string;
};

export type BookListType = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  cover: string;
};
