"use client";

import mainImg_1 from "@/../public/assets/images/main/main-img-1.svg";
import mainImg_2 from "@/../public/assets/images/main/main-img-2.svg";
import mainImg_3 from "@/../public/assets/images/main/main-img-3.svg";
import mainImg_4 from "@/../public/assets/images/main/main-img-4.svg";
import mainImg_5 from "@/../public/assets/images/main/main-img-5.svg";
import slideArrow_R from "@/../public/assets/icons/slideArrow_R.svg";
import slideArrow_L from "@/../public/assets/icons/slideArrow_L.svg";
import MainCarousel from "@/components/main/MainCarousel";
import styles from "@/styles/pages/main.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = [mainImg_1, mainImg_2, mainImg_3, mainImg_4, mainImg_5];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      prev => (prev - 1 + slideImages.length) % slideImages.length
    );
  };

  // 자동 슬라이드
  // useEffect(() => {
  //   const timer = setInterval(nextSlide, 2000); // 5초마다 다음 슬라이드
  //   return () => clearInterval(timer);
  // }, []);

  const getSlideClass = (index: number) => {
    const totalSlides = slideImages.length;
    if (index === currentSlide) return "active";
    if (index === (currentSlide - 1 + totalSlides) % totalSlides) return "prev";
    if (index === (currentSlide - 2 + totalSlides) % totalSlides)
      return "prev2";
    if (index === (currentSlide + 1) % totalSlides) return "next";
    if (index === (currentSlide + 2) % totalSlides) return "next2";
    return "hidden";
  };
  return (
    <div className={styles["main-wrap"]}>
      <div className={styles["main-wrap-img"]}>
        {slideImages.map((item, index) => (
          <div
            key={index}
            className={`${styles.slide} ${styles[getSlideClass(index)]}`}
          >
            <div className={styles["slide-content"]}>
              <Image
                src={item}
                alt={`슬라이드 ${index + 1}`}
                width={610}
                height={312}
                priority={index === currentSlide}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles["main-wrap-nav"]}>
        <button onClick={prevSlide}>
          <Image
            src={slideArrow_L}
            alt="슬라이드 이전 버튼"
            width={21}
            height={10}
          />
        </button>
        <button onClick={nextSlide}>
          <Image
            src={slideArrow_R}
            alt="슬라이드 다음 버튼"
            width={21}
            height={10}
          />
        </button>
      </div>

      <div className={styles["main-wrap-indicators"]}>
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={currentSlide === index ? styles.active : ""}
            aria-label={`${index + 1}번 슬라이드로 이동`}
          />
        ))}
      </div>
      {/* <MainCarousel /> */}
    </div>
  );
};

export default HomePage;
