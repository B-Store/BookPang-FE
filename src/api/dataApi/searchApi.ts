import axi from "@/lib/axiosInterceptors";

export const getBookSearch = async (keyword: string | null) => {
  try {
    const response = await axi.get(`book-search?title=${keyword}`);

    console.log("response.data", response.data);

    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
