import React from 'react';
import styles from './Graphic-Design.module.css';
import ImageBanner from '../../../../components/ImageCover/ImageCover';
import ServiceOverview from '../../../../components/ServiceOverview/ServiceOverview';
import ServiceCard from '../../../../components/Service-Card/ServiceCards';

import graphicsDesignCover from '../../../../assets/graphics-design/graphics-design-cover.webp';
import cardsData from "../../../../data.json";
import overviewImage from "../../../../assets/graphics-design/graphics-design-overview.webp";

const GraphicDesign: React.FC = () => {
    const { servicesCards, servicesCardsHeading, servicesCardsContent } =
    cardsData.ServicesPage.graphicDesign;

  const { overviewText, subHeading, subHeadingContent } = servicesCardsContent;

    return (
        <div className={styles.container}>
          <div className={styles.coverImage}>
            <ImageBanner
              imagePath={graphicsDesignCover}
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

export default GraphicDesign;