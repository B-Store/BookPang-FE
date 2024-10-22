import axi from "@/lib/axiosInterceptors";
//로그인 중복 체크
import { ResMessage, GetSignType } from "@/types/resType";

const getCheckLoginId: GetSignType = async (loginId: string) => {
  try {
    const { data } = await axi.get(`/auth/check-login-id/${loginId}`);

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

const postSignUp = (userInfo: {
  loginId: string;
  phoneNumber: string;
  password: string;
  nickname: string;
}) => {
  axi.post(`/auth/sign-up`, userInfo);
};

const postVerifyPhone = (phoneNumber: string) => {
  axi.post(`/auth/verify-code`, phoneNumber);
};

const postVerifyCode = (verifyCode: { code: number; phoneNumber: string }) => {
  axi.post(`/auth/verify-phone`, verifyCode);
};

export { getCheckLoginId, postSignUp, postVerifyPhone, postVerifyCode };
