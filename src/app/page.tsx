import BookPang from "@/../public/assets/video/BookPang.gif";
import MainCarousel from "@/components/main/MainCarousel";
import styles from "@/styles/pages/main.module.scss";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <div className={styles["main-img-wrap"]}>
        <Image src={BookPang} alt="임시 이미지" width={1300} height={510} />
      </div>
      <MainCarousel />
    </div>
  );
};

export default HomePage;
