import React from "react";
import webDevelopmentCover from "../../../../assets/web-development.jpg";
import styles from "./web-development.module.css";
import ImageBanner from "../../../../components/ImageCover/ImageCover";

const WebDevelopment: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.coverImage}>
        <ImageBanner
          imagePath={webDevelopmentCover}
          bannerTitle="WEB DEVELOPMENT"
          bannerSubHeading="Building Seamless Experiences"
          height="48rem"
        />
      </div>
    </div>
  );
};

export default WebDevelopment;
