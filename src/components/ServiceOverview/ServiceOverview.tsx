import React from "react";

import styles from "./ServiceOverview.module.css";
import overviewImage from "../../assets/service-overview-image.jpeg";

const ServiceOverview: React.FC = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["text-container"]}>
        <h2 className={styles["main-heading"]}>OVERVIEW</h2>
        <p className={styles["overview-text"]}>
          Our web development services provide enterprise-grade and customized
          web development services tailored to meet the evolving demands of
          modern businesses. Whether you need a simple landing page or a complex
          web application, we have the expertise to deliver results that exceed
          expectations.
        </p>
        <h3 className={styles["sub-heading"]}>What we are good at:</h3>
        <ul className={styles["list-container"]}>
          <li className={styles["list-item"]}>
            <span className={styles["list-item-bold"]}>
              Cutting-Edge Technologies:
            </span>
            <span className={styles["list-item-text"]}>
              Cutting-Edge Technologies: Our use of the latest frameworks and
              technologies such as React.js, Angular, Vue.js, Node.js, Laravel,
              Ruby on Rails, and Python ensures your web solutions are
              future-ready.
            </span>
          </li>
          <li className={styles["list-item"]}>
            <span className={styles["list-item-bold"]}>Responsive Design:</span>
            <span className={styles["list-item-text"]}>
              Our approach guarantees your website adapts to all screen sizes,
              providing a seamless user experience.
            </span>
          </li>
          <li className={styles["list-item"]}>
            <span className={styles["list-item-bold"]}>
              Performance Optimization:
            </span>
            <span className={styles["list-item-text"]}>
              We ensure your website is optimized for speed and performance,
              leveraging CDNs, lazy loading, and caching strategies to enhance
              load times.
            </span>
          </li>
          <li className={styles["list-item"]}>
            <span className={styles["list-item-bold"]}>Web Security:</span>
            <span className={styles["list-item-text"]}>
              We ensure that your website is protected with the latest security
              standards, including SSL encryption, firewalls, and regular
              security audits.
            </span>
          </li>
        </ul>
      </div>
      <div className={styles["image-container"]}>
        <img
          src={overviewImage}
          alt="a laptop with IDE opened"
          className={styles["image-size"]}
        />
      </div>
    </div>

    // <div className={styles["grid-container"]}>
    //   <div className={styles["grid-item"]}>
    //     <h2 className={styles["main-heading"]}>OVERVIEW</h2>
    //     <p className={styles["overview-text"]}>
    //       Our web development services provide enterprise-grade and customized
    //       web development services tailored to meet the evolving demands of
    //       modern businesses. Whether you need a simple landing page or a complex
    //       web application, we have the expertise to deliver results that exceed
    //       expectations.
    //     </p>
    //     <h3 className={styles["sub-heading"]}>What we are good at:</h3>
    //     <ul className={styles["list-container"]}>
    //       <li className={styles["list-item"]}>
    //         <span className={styles["list-item-bold"]}>
    //           Cutting-Edge Technologies:
    //         </span>
    //         <span className={styles["list-item-text"]}>
    //           Cutting-Edge Technologies: Our use of the latest frameworks and
    //           technologies such as React.js, Angular, Vue.js, Node.js, Laravel,
    //           Ruby on Rails, and Python ensures your web solutions are
    //           future-ready.
    //         </span>
    //       </li>
    //       <li className={styles["list-item"]}>
    //         <span className={styles["list-item-bold"]}>Responsive Design:</span>
    //         <span className={styles["list-item-text"]}>
    //           Our approach guarantees your website adapts to all screen sizes,
    //           providing a seamless user experience.
    //         </span>
    //       </li>
    //       <li className={styles["list-item"]}>
    //         <span className={styles["list-item-bold"]}>
    //           Performance Optimization:
    //         </span>
    //         <span className={styles["list-item-text"]}>
    //           We ensure your website is optimized for speed and performance,
    //           leveraging CDNs, lazy loading, and caching strategies to enhance
    //           load times.
    //         </span>
    //       </li>
    //       <li className={styles["list-item"]}>
    //         <span className={styles["list-item-bold"]}>Web Security:</span>
    //         <span className={styles["list-item-text"]}>
    //           We ensure that your website is protected with the latest security
    //           standards, including SSL encryption, firewalls, and regular
    //           security audits.
    //         </span>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className={styles["grid-item"]}>
    //     <div className={styles["image-flex"]}>
    //     <img
    //       src={overviewImage}
    //       alt="a laptop with IDE opened"
    //       className={styles["image-size"]}
    //     />
    //     </div>
    //   </div>
    // </div>
  );
};

export default ServiceOverview;
