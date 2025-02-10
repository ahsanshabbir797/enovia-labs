import React from "react";
import styles from "./FallbackLoader.module.css";

const FallbackLoader: React.FC = () => {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default FallbackLoader; 