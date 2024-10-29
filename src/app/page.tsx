import MainCarousel from "@/components/main/MainCarousel";
import styles from "@/styles/main/main.module.scss";

const HomePage = () => {
  return (
    <div>
      <div className={styles["main-img-wrap"]}></div>
      <MainCarousel />
    </div>
  );
};

export default HomePage;
