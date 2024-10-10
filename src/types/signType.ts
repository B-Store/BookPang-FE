export interface SignUser {
  id: string;
  password: string;
  confirmPassword?: string;
  nickName?: string;
  phoneNumber?: string;
}

export type RegisterContentType =
  | "id"
  | "password"
  | "confirmPassword"
  | "nickName"
  | "phoneNumber";
