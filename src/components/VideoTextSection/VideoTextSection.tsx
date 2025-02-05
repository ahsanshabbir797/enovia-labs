import React from "react";
import styles from "./VideoTextSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

type VideoTextSectionProps = {
  videoUrl: string;
  paragraphContent: string;
};

const VideoTextSection: React.FC<VideoTextSectionProps> = ({
  videoUrl,
  paragraphContent,
}) => {
  return (
    <div className={styles["container"]}>
      <iframe
        className={styles["iframeStyles"]}
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className={styles["textWrapper"]}>
        <h2 className={styles["main-heading"]}>OVERVIEW</h2>
        <p className={styles["paragraph"]}>{paragraphContent}</p>
        <div className={styles["link-container"]}>
          <p className={styles["link-text"]}>
            <a href="/contact-us" style={{ color: "white" }}>
              Get in touch
            </a>
            <div className={styles["line"]}></div>
          </p>
          <a href="/contact-us">
            <FontAwesomeIcon
              icon={faAngleRight}
              className={styles["angle-right-icon"]}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoTextSection;
