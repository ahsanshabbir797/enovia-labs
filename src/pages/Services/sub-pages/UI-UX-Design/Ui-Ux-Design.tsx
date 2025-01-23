import React from "react";
import styles from "./ui-ux-design.module.css";
import uiuxmain from "../../../../assets/uiuxmain.jpg";
import ImageBanner from "../../../../components/ImageCover/ImageCover";
import cardsData from "../../../../data.json";
import ServiceOverview from "../../../../components/ServiceOverview/ServiceOverview";
import ServiceCard from "../../../../components/Service-Card/ServiceCards";
import overviewImage from "../../../../assets/UI-UX.jpg";

const UIUXDesign: React.FC = () => {
  const { servicesCards, servicesCardsHeading, servicesCardsContent } =
    cardsData.ServicesPage.uiUxDesign;

  const { overviewText, subHeading, subHeadingContent } = servicesCardsContent;

  return (
    <div className={styles.container}>
      <div className={styles.coverImage}>
        <ImageBanner
          imagePath={uiuxmain}
          bannerTitle="UI/ UX DESIGN"
          bannerSubHeading="Fluid Interactions, Stunning Visuals, Memorable Experiences"
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

export default UIUXDesign;
