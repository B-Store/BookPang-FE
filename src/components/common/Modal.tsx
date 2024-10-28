import React from "react";
import styles from "@/styles/components/modal/modal.module.scss";

const Modal = () => {
  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-title"]}>배송 주소 추가</div>
      <button>+ 주소 추가</button>
    </div>
  );
};

export default Modal;
