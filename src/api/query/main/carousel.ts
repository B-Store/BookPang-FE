import axi from "@/lib/axiosInterceptors";

export const getRecommended = async () => {
  try {
    const response = await axi.get(
      "/books-main/recommended-books?page=1&limit=5&category=ItemEditorChoice"
    );
    return response.data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getNewBooks = async () => {
  try {
    const response = await axi.get("/books-main/new-books?page=1&limit=15");
    return response.data.data;
  } catch (error) {
    console.log("error", error);
  }
};
