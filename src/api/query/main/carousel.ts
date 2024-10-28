import axi from "@/lib/axiosInterceptors";

export const getRecommended = async () => {
  try {
    const response = await axi.get(
      `/books-main/recommended-books?page=1&limit=5&category=ItemEditorChoice`
    );
    return response;
  } catch (error) {
    console.log("error", error);
  }
};
