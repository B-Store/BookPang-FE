import axios from "axios";

// export const testAxios = async () => {
//   const response = await axios.get(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/books/category-books?category=국내도서`,
//     {
//       headers: {
//         "Content-Type": "application/json",
//         "ngrok-skip-browser-warning": "69420",
//       },
//     }
//   );

//   return response.data;
// };

export const getCategories = async (param: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/books/categories?category=${param}`,
    {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
    }
  );

  return response.data;
};
