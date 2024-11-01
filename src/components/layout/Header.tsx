"use client";
import logo from "@/../public/assets/images/logo.svg";
import styles from "@/styles/components/layout/header.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchForm from "../common/SearchForm";
import NavBar from "./NavBar";

const Header = () => {
  const router = useRouter();

  return (
    <div className={styles["header-wrap"]}>
      <div className={styles["header-wrap-top"]}>
        <Image
          src={logo}
          alt="로고이미지"
          width={178}
          height={24}
          onClick={() => router.push("/")}
        />

        <SearchForm />

        <div className={styles["header-wrap-top-links"]}>
          <span onClick={() => router.push("/login")}>회원가입/로그인</span>
          <span>ㅣ</span>
          <span>고객센터</span>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
