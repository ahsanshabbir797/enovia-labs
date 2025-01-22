import React from "react";
import styles from "./ServiceCards.module.css";

import cardsData from "../../data.json";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

const ServiceCards: React.FC<ServiceCardProps> = () => {
  const { servicesCards, servicesCardsHeading } =
    cardsData.ServicesPage.webDevelopment;

  return (
    <div className={styles["main-container"]}>
      <div className={styles["heading-container"]}>
        <h1 className={styles["main-heading"]}>{servicesCardsHeading}</h1>
      </div>
      <div className={styles["cards-container"]}>
        {servicesCards.map((serviceCard) => {
          return (
            <div
              className={styles["card"]}
              style={{ backgroundImage: `url(${serviceCard.imagePath})` }}
              key={serviceCard.id}
            >
              <div className={styles["card-content"]}>
                <h2>{serviceCard.heading}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCards;
