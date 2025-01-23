import React from "react";
import styles from "./mobile-development.module.css";
import ImageBanner from "../../../../components/ImageCover/ImageCover";
import mobiledevmain from "../../../../assets/mobiledevmain.jpg";
import ServiceOverview from "../../../../components/ServiceOverview/ServiceOverview";
import cardsData from "../../../../data.json";
import overviewImage from "../../../../assets/mobiledevoverview.jpg";
import ServiceCard from "../../../../components/Service-Card/ServiceCards";

const MobileDevelopment: React.FC = () => {
  const { servicesCards, servicesCardsHeading, servicesCardsContent } =
    cardsData.ServicesPage.mobileDevelopment;
  const { overviewText, subHeading, subHeadingContent } = servicesCardsContent;
  return (
    <div className={styles.container}>
      <div className={styles.coverImage}>
        <ImageBanner
          imagePath={mobiledevmain}
          bannerTitle="MOBILE APP DEVELOPMENT"
          bannerSubHeading="Innovative Apps, Seamless Experiences, Limitless Possibilities"
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

export default MobileDevelopment;
