import { useState } from "react";
import data from "../../data.json";
import styles from "./Our-Services.module.css";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function OurServices() {
  const [showMore, setShowMore] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };
  const cardsList = data["ourServices"];
  const displayedCards = showMore ? cardsList : cardsList.slice(0, 4);

  return (
    <div className={styles["container"]}>
      <p className={styles["main-heading"]}>OUR SERVICES</p>
      <h1>TRANSFORM YOUR BUSINESS</h1>
      <br />
      <br />
      <div className={styles["card-container"]}>
        {displayedCards.map((service) => {
          return (
            service.show && (
              <div
                className={styles["card"]}
                key={service.id}
                style={{ backgroundImage: `url("${service.imagePath}")` }}
                onClick={() => navigate(`${service.link}`)}
              >
                <h2>{service.name}</h2>
              </div>
            )
          );
        })}
      </div>
      <button className={styles["show-more-button"]} onClick={toggleShowMore}>
        {showMore ? "Show Less" : "Show More"}
        <FontAwesomeIcon
          icon={showMore ? faArrowUp : faArrowDown}
          style={{ marginLeft: "5px" }}
        />
      </button>
    </div>
  );
}

export default OurServices;
