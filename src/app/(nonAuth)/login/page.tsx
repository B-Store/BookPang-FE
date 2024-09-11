"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import sign from "../../../../public/assets/images/sign/sign.svg";

interface LoginUser {
  id: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<LoginUser>({ mode: "onChange" });

  const loginBtn: SubmitHandler<LoginUser> = () => {};

  return (
    <div>
      <Image src={sign} alt="signLogo" />
      <form onSubmit={handleSubmit(loginBtn)}>
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
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;
