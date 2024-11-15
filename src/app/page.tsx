import ImageSlide from "@/components/main/ImageSlide";
import MainCarousel from "@/components/main/MainCarousel";
import styles from "@/styles/pages/main.module.scss";

const HomePage = () => {
  return (
    <div className={styles["main-wrap"]}>
      <ImageSlide />
      <MainCarousel />
    </div>
  );
};

export default HomePage;
