import styles from "./Our-Industries.module.css";
import data from "../../data.json";

function OurIndustries() {
  const industriesList = data.OurIndustries;

  return (
    <div className={styles["container"]}>
      <h1 className={styles["main-heading"]}>
        Discover our Impact Across Industries
      </h1>
      <div className={styles["cards-container"]}>
      {industriesList.map((industry) => {
        return (
            <div className={styles["card-cell"]}>
          <div className={styles['card']}>
            <div className={styles['img-card']}>
              <img src={industry.imagePath} alt={industry.name} className={styles['industry-image']}/>
            </div>
            <div>
              <h3>{industry.name}</h3>
            </div>
          </div>
          <div className={styles["line"]}></div>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default OurIndustries;
