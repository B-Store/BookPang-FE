import { FieldError, UseFormRegister } from "react-hook-form";
import type { SignUser } from "@/types/signTypes";
import { AxiosResponse } from "axios";
import { ResMessage } from "@/types/resType";

export interface SignFormType {
  signFn: (data: any) => any;
  confirmPassword?: string;
  selectLabel: string;
}

export interface SignFormPropsType {
  confirmPassword?: string;
}

export interface SignInputType {
  register: UseFormRegister<SignUser>;
  changePasswordType?: () => void;
  getFunc: (data: string) => Promise<ResMessage>;
  func?: () => void;
  id?: string;
  password?: string;
  passwordType?: string;
  confirmPasswordType?: string;
  nickName?: string;
  confirmPassword?: string;
  phoneNumber?: string;
  type: string;
  errors?: FieldError;
  placeholder?: string;
}
