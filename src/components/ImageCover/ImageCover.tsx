import React from "react";
import styles from "./ImageCover.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface BannerProps {
  imagePath: string;
  bannerTitle: string;
  bannerSubHeading: string;
  height?: string;
  paragraphText?: string;
  buttonText?: string;
}

const ImageBanner: React.FC<BannerProps> = ({
  imagePath,
  bannerTitle,
  bannerSubHeading,
  height,
  buttonText,
  paragraphText,
}) => {
  return (
    <div
      className={styles["banner-container"]}
      style={{
        backgroundImage: `url(${imagePath})`,
        height: height,
      }}
    >
      <div className={styles["banner-overlay"]}>
        <div className={styles["banner-wrapper"]}>
          <h3 className={styles["banner-title"]}>{bannerTitle}</h3>
          <h1 className={styles["banner-subheading"]}>{bannerSubHeading}</h1>
          {paragraphText?.length ?? (
            <p className={styles["banner-paragraph"]}>
              At Enovia Labs, we specialize in transforming businesses with
              enterprise-grade software solutions tailored to their needs. With
              a legacy of technical excellence, a global team of over 2,000
              experts, and a passion for innovation, we help organizations
              thrive in an ever-evolving digital landscape.
            </p>
          )}
          {buttonText?.length ?? (
            <a onClick={() => null} className={styles["link-flex"]}>
              <div className={styles["link-container"]}>
                <p className={styles["link-text"]}>
                  Get in Touch
                  <p className={styles["line"]}></p>
                </p>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={styles["angle-right-icon"]}
                />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
