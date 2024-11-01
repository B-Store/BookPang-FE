import axi from "@/lib/axiosInterceptors";

export const getCategories = async (param: string) => {
  try {
    const response = await axi.get(`/books-main/categories?category=${param}`);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getNewSpecialBooks = async () => {
  try {
    const response = await axi.get("/books-main/ItemNewSpecial?limit=3");

    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
