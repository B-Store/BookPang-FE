import React from "react";
import styles from "@/styles/components/layout/footer.module.scss";
import Image from "next/image";
import footer from "@/../public/assets/images/footer.svg";
import githubLogo from "@/../public/assets/images/githubLogo.svg";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <Image src={footer} alt="푸터 이미지" width={160} height={36} />

      <div>
        <span>이용약관</span>
        <span>개인정보처리방침</span>
      </div>
      <div></div>
      <div>
        <span>github.com/B-store/Bookpang</span>
        <div>
          <div>
            <span>Frontend Developer</span>
            <span>서가희</span>
          </div>
          <div>
            <span>Backend Developer</span>
            <span>김만규</span>
          </div>
          <div>
            <span>Designer</span>
            <span>김세미</span>
          </div>
        </div>
        <div>
          <span>© 2024 BOOK PANG Project. All rights reserved.</span>
          <Image src={githubLogo} alt="깃헙 로고" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
