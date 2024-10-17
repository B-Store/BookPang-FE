import Image from "next/image";
import React from "react";
import Header from "@/components/layout/Header";
import MainCarousel from "@/components/main/MainCarousel";
import BookPang from "@/../public/assets/video/BookPang.gif";
import styles from "@/styles/main/main.module.scss";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles["main-img-wrap"]}>
        <Image
          src={BookPang}
          alt="임시 이미지"
          width={1260}
          height={510}
          className={styles["main-img"]}
        />
      </div>

      <MainCarousel />
    </div>
  );
};

export default HomePage;
