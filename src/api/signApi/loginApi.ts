import axi from "@/lib/axiosInterceptors";

const postLogin = async (user: { id: string; password: string }) => {
  axi.post("/auth/login", user);
};

export { postLogin };
