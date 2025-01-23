import React from "react";
import styles from "./Data-Analytics.module.css";
import dataAnaylticsMain from "../../../../assets/dataanalyticsmain.jpg";
import ImageBanner from "../../../../components/ImageCover/ImageCover";
import cardsData from "../../../../data.json";
import ServiceOverview from "../../../../components/ServiceOverview/ServiceOverview";
import ServiceCard from "../../../../components/Service-Card/ServiceCards";
import overviewImage from "../../../../assets/data-analytics.jpg";

const DataAnalyticsAndInsights: React.FC = () => {
  const { servicesCards, servicesCardsHeading, servicesCardsContent } =
    cardsData.ServicesPage.dataAnalytics;

  const { overviewText, subHeading, subHeadingContent } = servicesCardsContent;
  return (
    <div className={styles.container}>
      <div className={styles.coverImage}>
        <ImageBanner
          imagePath={dataAnaylticsMain}
          bannerTitle="DATA ANALYTICS"
          bannerSubHeading="Actionable Insights, Smarter Decisions, Better Outcomes"
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

export default DataAnalyticsAndInsights;
