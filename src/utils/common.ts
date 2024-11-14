import { ChangeEvent, SetStateAction } from "react";

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

// 개별 선택
export const onCheckedHandler = (
  e: ChangeEvent<HTMLInputElement>,
  item: any,
  setCheckItems: React.Dispatch<React.SetStateAction<any[]>>
) => {
  if (e.target.checked) {
    setCheckItems(prev => [...prev, item]);
  } else {
    setCheckItems(prev => prev.filter(check => check.id !== item.id));
  }
};

// 전체 선택
export const allCheckedHandler = (
  e: ChangeEvent<HTMLInputElement>,
  data: any[],
  setCheckItems: React.Dispatch<React.SetStateAction<any[]>>
) => {
  if (e.target.checked) {
    setCheckItems(data);
  } else {
    setCheckItems([]);
  }
};
