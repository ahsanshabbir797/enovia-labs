import React from "react";
import styles from "./Digital-Marketing.module.css";
import ImageBanner from "../../../../components/ImageCover/ImageCover";
import digitalmarketingmain from "../../../../assets/digital-marketing.jpg";
import ServiceOverview from "../../../../components/ServiceOverview/ServiceOverview";
import ServiceCard from "../../../../components/Service-Card/ServiceCards";
import cardsData from "../../../../data.json";
import overviewImage from "../../../../assets/graphic-designing.jpg";

const DigitalMarketing: React.FC = () => {
  const { servicesCards, servicesCardsHeading, servicesCardsContent } =
    cardsData.ServicesPage.digitalMarketing;

  const { overviewText, subHeading, subHeadingContent } = servicesCardsContent;

  return (
    <div className={styles.container}>
      <div className={styles.coverImage}>
        <ImageBanner
          imagePath={digitalmarketingmain}
          bannerTitle="DIGITAL MARKETING"
          bannerSubHeading="Engaging Strategies, Measurable Results, Maximum Impact"
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

export default DigitalMarketing;
