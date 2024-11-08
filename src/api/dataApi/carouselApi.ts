import axi from "@/lib/axiosInterceptors";

export const getRecommendedBooks = async () => {
  try {
    const response = await axi.get(
      "/book-list/recommended-books?page=1&limit=5&category=ItemEditorChoice"
    );
    return response.data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getNewBooks = async () => {
  try {
    const response = await axi.get("/book-list/new-books?page=1&limit=15");
    return response.data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getBestsellers = async () => {
  try {
    const response = await axi.get("/book-list/bestsellers?page=1&limit=24");
    return response.data.data;
  } catch (error) {
    console.log("error", error);
  }
};
