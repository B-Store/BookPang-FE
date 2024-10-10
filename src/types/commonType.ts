import { FieldError, UseFormRegister } from "react-hook-form";
import type { SignUser } from "@/types/signType";

export interface InputType {
  signFn: (data: any) => any;
  confirmPassword?: string;
  nickName?: string;
  phoneNumber?: string;
  selectLabel: string;
  confirmPasswordRequired?: string;
  nickNameRequired?: string;
  phoneNumberRequired?: string;
  confirmPasswordType?: string;
  nickNameType?: string;
  phoneNumberType?: string;
  confirmPasswordPlaceholder?: string;
  nickNamePlaceholder?: string;
  phoneNumberPlaceholder?: string;
  confirmPasswordMessage?: string;
  nickNameMessage?: string;
  phoneNumberMessage?: string;
  confirmPasswordErrorMessage?: string;
  nickNameErrorMessage?: string;
  phoneNumberErrorMessage?: string;
}

export interface SignInputType {
  register: UseFormRegister<SignUser>;
  id?: string;
  password?: string;
  nickName?: string;
  confirmPassword?: string;
  phoneNumber?: string;
  type?: string;
  errors?: FieldError;
  placeholder?: string;
}
