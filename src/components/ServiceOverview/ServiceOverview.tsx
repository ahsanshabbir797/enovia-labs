import React from "react";

import styles from "./ServiceOverview.module.css";
import LazyLoad from "react-lazyload";

interface ServiceOverviewProps {
  overviewText: string;
  subHeading: string;
  subHeadingContent: Array<{
    id: number;
    boldText: string;
    content: string;
  }>;
  overviewImage: string;
}

const ServiceOverview: React.FC<ServiceOverviewProps> = ({
  overviewText,
  subHeading,
  subHeadingContent,
  overviewImage,
}) => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["text-container"]}>
        <h2 className={styles["main-heading"]}>OVERVIEW</h2>
        <p className={styles["overview-text"]}>{overviewText}</p>
        <h3 className={styles["sub-heading"]}>{subHeading}</h3>
        <ul className={styles["list-container"]}>
          {subHeadingContent?.map((content) => {
            return (
              <li className={styles["list-item"]} key={content.id}>
                <span className={styles["list-item-bold"]}>
                  {content.boldText}
                </span>
                <span className={styles["list-item-text"]}>
                  {content.content}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles["image-container"]}>
      <LazyLoad height={200} offset={100} once>
        <img src={overviewImage} alt="" className={styles["image-size"]} />
      </LazyLoad>
      </div>
    </div>
  );
};

export default ServiceOverview;
