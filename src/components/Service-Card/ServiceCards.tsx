import React from "react";
import styles from "./ServiceCards.module.css";

interface ServiceCardProps {
  servicesCardsHeading?: string;
  servicesCards?: Array<{ id: number; imagePath: string; heading: string }>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  servicesCardsHeading,
  servicesCards,
}) => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["heading-container"]}>
        <h1 className={styles["main-heading"]}>{servicesCardsHeading}</h1>
      </div>
      <div className={styles["cards-container"]}>
        {servicesCards?.map(
          (serviceCard: { id: number; imagePath: string; heading: string }) => {
            console.log(serviceCard.imagePath);
            return (
              <div
                className={styles["card"]}
                style={{ backgroundImage: `url("${serviceCard.imagePath}")` }}
                key={serviceCard.id}
              >
                <div className={styles["card-content"]}>
                  <h2>{serviceCard.heading}</h2>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
