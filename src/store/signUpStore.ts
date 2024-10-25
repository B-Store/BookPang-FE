import { create } from "zustand";
import { SignUserType, SignUserInintialType } from "@/types/signTypes";

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
