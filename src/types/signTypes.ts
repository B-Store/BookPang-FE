export interface SignUserType {
  id: string;
  password: string;
  confirmPassword?: string;
  nickName?: string;
  phoneNumber?: string;
}

export interface SignUserInintialType {
  id: string;
  password: string;
  nickName?: string;
  phoneNumber?: string;
  setSignUserData: ({
    id,
    password,
    nickName,
    phoneNumber,
  }: SignUserType) => void;
}

export type RegisterContentType =
  | "id"
  | "password"
  | "confirmPassword"
  | "nickName"
  | "phoneNumber";
