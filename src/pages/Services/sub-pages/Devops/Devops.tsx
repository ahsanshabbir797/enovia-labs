import React from "react";

import devOpsCover from "../../../../assets/DevOps.webp";
import overviewImage from "../../../../assets/devops-overview-image.webp";
import styles from "./Devops.module.css";
import cardsData from "../../../../data.json";
import ImageBanner from "../../../../components/ImageCover/ImageCover";
import ServiceOverview from "../../../../components/ServiceOverview/ServiceOverview";
import ServiceCard from "../../../../components/Service-Card/ServiceCards";

const Devops: React.FC = () => {
  const { servicesCards, servicesCardsHeading, servicesCardsContent } =
    cardsData.ServicesPage.devOps;

  const { overviewText, subHeading, subHeadingContent } = servicesCardsContent;

  return (
    <div className={styles.container}>
      <div className={styles.coverImage}>
        <ImageBanner
          imagePath={devOpsCover}
          bannerTitle="DevOps"
          bannerSubHeading="End-to-End DevOps Services for Accelerated Innovation"
          height="48rem"
        />
      </div>
      <div className={styles["main-body-container"]}>
        <ServiceOverview
          overviewText={overviewText}
          subHeading={subHeading}
          subHeadingContent={subHeadingContent}
          overviewImage={overviewImage}
        />
        <ServiceCard
          servicesCards={servicesCards}
          servicesCardsHeading={servicesCardsHeading}
        />
      </div>
    </div>
  );
};

export default Devops;
