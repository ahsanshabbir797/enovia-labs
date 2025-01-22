import React from "react";
import styles from "./ImageCover.module.css";

interface BannerProps {
  imagePath: string;
  bannerTitle: string;
  bannerSubHeading: string;
  height?: string;
}

const ImageBanner: React.FC<BannerProps> = ({
  imagePath,
  bannerTitle,
  bannerSubHeading,
  height,
}) => {
  return (
    <div
      className={styles["banner-container"]}
      style={{ backgroundImage: `url(${imagePath})`, height: height,maxHeight: "49rem" }}
    >
      <div className={styles["banner-overlay"]}>
        <div className={styles["banner-wrapper"]}>
          <h3 className={styles["banner-title"]}>{bannerTitle}</h3>
          <h1 className={styles["banner-subheading"]}>{bannerSubHeading}</h1>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
