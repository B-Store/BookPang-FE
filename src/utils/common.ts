// 할인율 계산
export const discountRateHandler = (
  priceSales: number,
  priceStandard: number
) => {
  return ((priceStandard - priceSales) / priceStandard) * 100;
};

// 카테고리 이름 자르기 > 을 기준으로 앞부분만 자름
export const categoryNameChangeHandler = (category: string) => {
  return category.split(">", 1);
};
