import React from "react";
import styles from "./staff-augmentation.module.css";
import cardsData from "../../../../data.json";
import staffaugmentationmain from "../../../../assets/staffaugmentationmain.jpg";
import ImageBanner from "../../../../components/ImageCover/ImageCover";
import ServiceOverview from "../../../../components/ServiceOverview/ServiceOverview";
import ServiceCard from "../../../../components/Service-Card/ServiceCards";
import overviewImage from "../../../../assets/Staff-augmentation.jpg";

const StaffAugmentation: React.FC = () => {
  const { servicesCards, servicesCardsHeading, servicesCardsContent } =
    cardsData.ServicesPage.staffAugmentation;

  const { overviewText, subHeading, subHeadingContent } = servicesCardsContent;

  return (
    <div className={styles.container}>
      <div className={styles.coverImage}>
        <ImageBanner
          imagePath={staffaugmentationmain}
          bannerTitle="STAFF AUGMENTATION"
          bannerSubHeading="Top Talent, On-Demand, Driving Your Projects to Success"
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

export default StaffAugmentation;
