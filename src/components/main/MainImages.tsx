import React from "react";
import Image from "next/image";
import BookPang from "@/../public/assets/video/BookPang.gif";

const MainImages = () => {
  return (
    <div>
      <Image
        src={BookPang}
        alt="임시 이미지"
        width={1260}
        height={510}
        // className={styles["main-img"]}
      />
    </div>
  );
};

export default MainImages;
