import React from "react";
import webDevelopmentCover from "../../../../assets/web-development.jpg";
import styles from "./web-development.module.css";
import ImageBanner from "../../../../components/ImageCover/ImageCover";
import ServiceOverview from "../../../../components/ServiceOverview/ServiceOverview";
import ServiceCard from "../../../../components/Service-Card/ServiceCards";

import overviewImage from "../../../../assets/service-overview-image.jpeg";

import cardsData from "../../../../data.json";

const WebDevelopment: React.FC = () => {
  const { servicesCards, servicesCardsHeading, servicesCardsContent } =
    cardsData.ServicesPage.webDevelopment;

  const { overviewText, subHeading, subHeadingContent } = servicesCardsContent;

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

export default WebDevelopment;
