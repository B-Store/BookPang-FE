"use client";
import slideArrow_L from "@/../public/assets/icons/slideArrow_L.svg";
import slideArrow_R from "@/../public/assets/icons/slideArrow_R.svg";
import mainImg_1 from "@/../public/assets/images/main/main-img-1.svg";
import mainImg_2 from "@/../public/assets/images/main/main-img-2.svg";
import mainImg_3 from "@/../public/assets/images/main/main-img-3.svg";
import mainImg_4 from "@/../public/assets/images/main/main-img-4.svg";
import mainImg_5 from "@/../public/assets/images/main/main-img-5.svg";
import styles from "@/styles/components/carousel/ImageSlide.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageSlide = () => {
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
  useEffect(() => {
    const timer = setInterval(nextSlide, 2000); // 5초마다 다음 슬라이드
    return () => clearInterval(timer);
  }, []);

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
    <div className={styles["slide-wrap"]}>
      <div className={styles["slide-img-wrap"]}>
        {slideImages.map((item, index) => (
          <div
            key={index}
            className={`${styles["slide"]} ${styles[getSlideClass(index)]}`}
          >
            <Image
              src={item}
              alt={`슬라이드 ${index + 1}`}

              // priority={index === currentSlide}
            />
          </div>
        ))}
      </div>

      <div className={styles["slide-btn-wrap"]}>
        <button onClick={prevSlide} className={styles["slide-btn"]}>
          <Image
            src={slideArrow_L}
            alt="슬라이드 이전 버튼"
            width={32}
            height={32}
          />
        </button>
        <button onClick={nextSlide} className={styles["slide-btn"]}>
          <Image
            src={slideArrow_R}
            alt="슬라이드 다음 버튼"
            width={32}
            height={32}
          />
        </button>
      </div>

      <div className={styles["slide-indicators"]}>
        {slideImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`${
              styles[currentSlide === index ? "active" : "indicators"]
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;
