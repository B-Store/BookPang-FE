import Image from "next/image";
import React from "react";
import "@/styles/main/main.scss";
import Header from "@/components/layout/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="main-img"></div>
    </div>
  );
};

export default HomePage;
