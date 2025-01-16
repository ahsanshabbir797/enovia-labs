import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Our-Achievements.module.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import data from '../../data.json';

function OurAchievements() {
    const achievements = data.OurAchievements;

  return (
    <div className={styles['main-container']}>
        <div className={styles["left-container"]}>
        <p className={styles["category"]}>PIONEERING INNOVATION AND TRUST</p>
        <h1 className={styles["main-heading"]}>EnoviaLabs Achievements</h1>
        <p className={styles["paragraph-text"]}>
            At EnoviaLabs, we take pride in empowering businesses worldwide with
            innovative solutions. We bring an unwavering commitment to excellence,
            backed by a global presence.
        </p>
        {/* <div className={styles['link-wrapper']}> */}
        <a onClick={() => null}>
            <div className={styles['link-container']}>
            <p className={styles['link-text']}>
                Get in Touch
                <div className={styles["line"]}></div>
            </p>
            <FontAwesomeIcon
                icon={faAngleRight}
                className={styles['angle-right-icon']}
            />
            </div>
        </a>
        {/* </div> */}
        </div>
        <div className={styles["right-container"]}>
           <div className={styles["grid-container"]}>
            {achievements.map((achievement) => {
                return (
                    <div className={styles["grid-item"]}>
                        <h1>{achievement.amount}</h1>
                        <p>{achievement.label}</p>
                    </div>
                )
            })}
           </div>
        </div>
    </div>
  );
}

export default OurAchievements;
