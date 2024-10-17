import React from "react";
import mainMenuButton from "@/../public/assets/icons/mainMenuButton.svg";
import Image from "next/image";
import styles from "@/styles/components/layout/navBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles["nav-wrap"]}>
      <div className={styles["nav-menu-btn"]}>
        <Image
          src={mainMenuButton}
          alt="햄버거 메뉴 이미지"
          width={28}
          height={28}
        />
        <span>카테고리</span>
      </div>
      <ul className={styles["nav-buttons"]}>
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
