import axi from "@/lib/axiosInterceptors";
//로그인 중복 체크
import type { ResMessage, GetSignType } from "@/types/resType";
import type { SignUserType } from "@/types/signTypes";

const getCheckLoginId: GetSignType = async (loginId: string) => {
  try {
    const { data } = await axi.get(`/auth/check-login-id/${loginId}`);
    return data;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

const postSignUp = async (userInfo: SignUserType): Promise<void> => {
  await axi.post(`/auth/sign-up`, userInfo);
};
//핸드폰 번호 검증
const postVerifyPhone = async (phoneNumber: string) => {
  await axi.post(`/auth/verify-code`, phoneNumber);
};

//핸드폰 번호 검증후 코드 받기
const postVerifyCode = async (verifyCode: {
  code: number;
  phoneNumber: string;
}) => {
  await axi.post(`/auth/verify-phone`, verifyCode);
};

export { getCheckLoginId, postSignUp, postVerifyPhone, postVerifyCode };
