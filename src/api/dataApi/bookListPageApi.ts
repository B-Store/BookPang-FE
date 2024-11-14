import axi from "@/lib/axiosInterceptors";

export type BookApiKey = "recommendedBook" | "newBook" | "bestseller";

const bookApiEndpoints = {
  recommendedBook:
    "/books-main/recommended-books?page=1&limit=5&category=ItemEditorChoice",
  newBook: "/books-main/new-books?page=1&limit=15",
  bestseller: "/books-main/bestsellers?page=1&limit=15",
};

export const getBookList = async (key: BookApiKey) => {
  const endpoint = bookApiEndpoints[key];

  try {
    const response = await axi.get(endpoint);
    return response.data.data;
  } catch (error) {
    console.log("error", error);
  }
};
