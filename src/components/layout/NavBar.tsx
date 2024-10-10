import React from "react";
import mainMenuButton from "@/../public/assets/icons/mainMenuButton.svg";
import Image from "next/image";
import "@/styles/main/navBar.scss";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="menu-btn">
        <Image src={mainMenuButton} alt="검색버튼" width={28} height={28} />
        <span>카테고리</span>
      </div>
      <ul className="navButtons">
        <li>메인</li>
        <li>베스트셀러</li>
        <li>새로나온 책</li>
        <li>나의 서재</li>
        <li>북팡톡</li>
      </ul>
    </div>
  );
};

export default NavBar;
