"use client";

import sign from "../../../../public/assets/images/sign/sign.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface SignUpUser {
  id: string;
  password: string;
  confirmPassowrd: string;
  nickName: string;
  phoneNumber: string;
}

const SignUpPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<SignUpUser>({ mode: "onChange" });

  const signUpBtn: SubmitHandler<SignUpUser> = () => {};

  return (
    <div>
      <Image src={sign} alt="signLogo" />
      <form onSubmit={handleSubmit(signUpBtn)}>
        <input
          type="text"
          placeholder="id"
          {...register("id", {
            required: "아이디 입력",
          })}
        />
        <input
          type="password"
          placeholder="password"
          {...register("id", {
            required: "비밀번호 입력",
          })}
        />
        <input
          type="text"
          placeholder="confirm password"
          {...register("confirmPassowrd", {
            required: "비밀번호 재입력",
          })}
        />
        <input
          type="text"
          placeholder="nickName"
          {...register("nickName", {
            required: "아이디를 입력해 주세요.",
          })}
        />
        <input
          type="number"
          placeholder="-를 빼고 입력해주세요."
          {...register("phoneNumber", {
            required: "핸드폰 번호를 입력해 주세요.",
          })}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUpPage;
