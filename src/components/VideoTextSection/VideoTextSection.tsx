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
      {/* <div style={{flex: 1}}> */}
      <iframe
      className={styles["iframeStyles"]}
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      {/* </div> */}
      <div className={styles["textWrapper"]}>
        <h2 className={styles["main-heading"]}>OVERVIEW</h2>
        <p className={styles["paragraph"]}>{paragraphContent}</p>
        <div className={styles["link-container"]}>
            <p className={styles["link-text"]}>
              Join Us
              <div className={styles["line"]}></div>
            </p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={styles["angle-right-icon"]}
            />
          </div>
      </div>
    </div>
  );
};

export default VideoTextSection;
