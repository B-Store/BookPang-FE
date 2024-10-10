import Image from "next/image";
import React from "react";
import logo from "@/../public/assets/images/logo.svg";
import SearchBar from "../common/SearchBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div>
      <div>
        <Image src={logo} alt="로고이미지" width={178} height={48} />
        <div>
          <span>회원가입/로그인</span>
          <span>ㅣ</span>
          <span>고객센터</span>
        </div>
        <SearchBar />
      </div>

      <NavBar />
    </div>
  );
};

export default Header;
