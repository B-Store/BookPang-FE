"use client";

import { useBookListData } from "@/api/query/bookListQueries";
import { BookApiKey } from "@/types/bookTypes";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const BookListPage = () => {
  const searchParams = useSearchParams();
  const key = searchParams.get("data");

  const { data, isLoading, isError } = useBookListData(key as BookApiKey);

  if (isLoading) {
    return <div>로딩중 입니다</div>;
  }

  if (isError) {
    console.error("에러 발생");
    return;
  }

  if (!data) {
    console.log("데이터가 존재하지 않음");
    return;
  }

  return (
    <div>
      {data?.map((item: any) => {
        return (
          <div key={item.id}>
            <Image src={item.cover} alt="도서 커버" width={124} height={181} />
            <div>{item.title}</div>
            <div>{item.author}</div>
            <div>{item.publisher}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BookListPage;
