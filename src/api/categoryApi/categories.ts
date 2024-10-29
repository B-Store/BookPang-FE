import axi from "@/lib/axiosInterceptors";

export const getCategories = async (param: string) => {
  try {
    const response = await axi.get(`/books-main/categories?category=${param}`);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
