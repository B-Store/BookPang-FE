import { FieldError, UseFormRegister } from "react-hook-form";
import type { SignUserType } from "@/types/signTypes";
import { AxiosResponse } from "axios";
import { ResMessage } from "@/types/resType";

interface SignFormType {
  signFn: (data: any) => any;
  confirmPassword?: string;
  selectLabel: string;
}

interface SignFormPropsType {
  confirmPassword?: string;
}

interface SignInputType {
  register: UseFormRegister<SignUserType>;
  changePasswordType?: () => void;
  getFunc?: (data: string) => Promise<ResMessage | void>;
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

export type { SignFormType, SignFormPropsType, SignInputType };
