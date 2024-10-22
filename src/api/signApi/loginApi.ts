import axi from "@/lib/axiosInterceptors";

const postLogin = async (user: { loginId: string; password: string }) => {
  axi.post("/auth/login", user);
};

export { postLogin };
