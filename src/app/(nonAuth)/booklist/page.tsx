import { koreaBookList } from "@/utils/temp/bookList";
import Image from "next/image";
import React from "react";

const BookListPage = () => {
  return (
    <div>
      {koreaBookList.map(item => {
        return (
          <div key={item.id}>
            <Image src={item.cover} alt="도서 커버" width={124} height={181} />
            <div>{item.title}</div>
            <div>{item.author}</div>
            <div>{item.publisher}</div>
          </div>
        );
      })}
      ss
    </div>
  );
};

export default BookListPage;
