"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "@/styles/components/signUpComponent/SignUpConsent.module.scss";
import { allCheckedHandler } from "@/utils/common";
const SignUpConsent = ({
  setIsConsent,
}: {
  setIsConsent: Dispatch<SetStateAction<boolean>>;
}) => {
  const [checkItems, setCheckItems] = useState<string[]>([]);

  const consentTxt = [
    "[필수] 서비스 이용약관",
    "[필수] 개인정보 수집/이용 동의",
    "[필수] 통신사 이용약관 동의",
    "[필수] 개인정보 제공 및 고유식별정보 처리 동의",
    "[필수] 본인확인서비스 이용약관 동의",
  ];

  const allCheck = () => {
    if (!checkItems) {
      setCheckItems(checkItems);
    }
  };
  return (
    <div className={styles["consent-wrap"]}>
      <p>이용약관</p>
      <label>
        <input
          type="checkbox"
          onChange={e => allCheckedHandler(e, consentTxt, setCheckItems)}
          checked={checkItems.length === consentTxt.length}
        />
        전체 동의
      </label>
      <div></div>
      <div className={styles["consent-txt-wrap"]}>
        {consentTxt.map((txt, index) => {
          return (
            <label key={index}>
              <input
                type="checkbox"
                onChange={allCheck}
                checked={checkItems.includes(txt)}
              />
              {txt}
            </label>
          );
        })}
        <button
          onClick={() => setIsConsent(true)}
          disabled={checkItems.length !== consentTxt.length}
        >
          북팡에서 가입하기
        </button>
      </div>
      <p>간편한 가입</p>
      <button>구글</button>
      <button>깃헙</button>
    </div>
  );
};

export default SignUpConsent;
