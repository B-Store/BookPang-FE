import { create } from "zustand";

type UserData = {};

const sinUpUserinitialData = {
  id: "",
  password: "",
  confirmPassoword: "",
  nickName: "",
  phoneNumber: "",
};

export const signUpUser = create<UserData>(set => ({
  ...sinUpUserinitialData,
  setSignUpUserData: () => {},
}));
