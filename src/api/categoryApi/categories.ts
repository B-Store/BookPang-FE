import axios from "axios";

export const getCategories = async (param: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/books-main/categories?category=${param}`,
    {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
    }
  );

  return response.data;
};
