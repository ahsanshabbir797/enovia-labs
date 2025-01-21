import React from "react";
import styles from "./OurInsights.module.css";
import data from "../../data.json";

const OurInsights: React.FC = () => {
  const cardData = data.OurInsights;
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <h4 className={styles.featuredTitle}>Featured Insights</h4>
        <h2 className={styles.mainTitle}>
          Stories of Innovation, Transformation, and Industry Excellence
        </h2>
        <p className={styles.description}>
          Discover impactful case studies and blogs showcasing solutions and
          strategies that drive success.
        </p>
      </div>

      <div className={styles.rightContent}>
        {cardData.map((card, index) => (
          <a href={card.link} target="_blank" key={card.id}>
            <div key={index} className={styles.card}>
              <img src={card.image} alt={card.title} />
              <div className={styles.cardContent}>
                <p className={styles.cardSubtitle}>{card.type}</p>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurInsights;
