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
      style={{ backgroundImage: `url(${imagePath})`, height: height }}
    >
      <div className={styles["banner-overlay"]}>
        <div
          style={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "1rem 3rem",
          }}
        >
          <h3 className={styles["banner-title"]}>{bannerTitle}</h3>
          <p className={styles["banner-subheading"]}>{bannerSubHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
