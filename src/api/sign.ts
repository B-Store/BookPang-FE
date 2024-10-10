import axi from "@/lib/axiosInterceptors";

//로그인 중복 체크
export const checkLoginId = async ({ loginId }: { loginId: string }) => {
  try {
    const data = axi.get(`auth/check-login-id/${loginId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
