import React from 'react';
import styles from './ImageCover.module.css'; // Assuming the CSS file is named ImageBanner.css

interface BannerProps {
  imagePath: string;
  bannerTitle: string;
  bannerSubHeading: string;
  height?: string;
}

const ImageBanner: React.FC<BannerProps> = ({ imagePath, bannerTitle, bannerSubHeading, height }) => {
  return (
    <div
      className={styles["banner-container"]}
      style={{ backgroundImage: `url(${imagePath})`, height: height }}
    >
      <div className={styles["banner-overlay"]}>
        <h3 className={styles["banner-title"]}>{bannerTitle}</h3>
        <p className={styles["banner-subheading"]}>{bannerSubHeading}</p>
      </div>
    </div>
  );
};

export default ImageBanner;
