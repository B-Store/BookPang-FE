import { create } from "zustand";
import { SignUserType, SignUserInintialType } from "@/types/signTypes";

//로그인 회원가입에 필요한 사용자의 입력값 저장
const sinUserinitialData: SignUserInintialType = {
  id: "",
  password: "",
  nickName: "",
  phoneNumber: "",
  setSignUserData: () => {},
};

export const useSignUser = create<SignUserInintialType>(set => ({
  ...sinUserinitialData,
  setSignUserData: (userData: SignUserType) => set({ ...userData }),
}));
