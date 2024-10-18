import mainMenuButton from "@/../public/assets/icons/mainMenuButton.svg";
import styles from "@/styles/components/layout/navBar.module.scss";
import Image from "next/image";
import { useState } from "react";
import ToggleMenu from "../common/ToggleMenu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  const navMenu = ["메인", "베스트셀러", "새로나온 책", "나의 서재", "북팡톡"];

  return (
    <div className={styles["nav-wrap"]}>
      {isMenuOpen && <ToggleMenu />}
      <div
        onClick={() => setIsMenuOpen(prev => !prev)}
        className={styles["nav-menu-btn"]}
      >
        <Image
          src={mainMenuButton}
          alt="햄버거 메뉴 이미지"
          width={28}
          height={28}
        />
        <span>카테고리</span>
      </div>
      <ul className={styles["nav-buttons"]}>
        {navMenu.map((item, idx) => {
          return (
            <li
              key={idx}
              onClick={() => setSelectedMenuIndex(idx)}
              className={selectedMenuIndex === idx ? styles["active"] : ""}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
