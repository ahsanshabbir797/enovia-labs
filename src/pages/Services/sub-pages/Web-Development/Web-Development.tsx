import React from "react";
import webDevelopmentCover from "../../../../assets/web-development.jpg";
import styles from "./web-development.module.css";
import ImageBanner from "../../../../components/ImageCover/ImageCover";
import ServiceOverview from "../../../../components/ServiceOverview/ServiceOverview";
import ServiceCards from "../../../../components/Service-Cards/ServiceCards";

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
      <div className={styles["main-body-container"]}>
        <ServiceOverview />
        <ServiceCards />
      </div>
    </div>
  );
};

export default WebDevelopment;
