import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  // faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMailBulk,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.company}>
            <div className="logo-text">
              <span className="logo-text-enovia">Enovia</span>
              <span className="logo-text-labs">Labs</span>
            </div>
            <ul className="footer-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/our-policies">Our Projects</a>
              </li>
              <li>
                <a href="/our-services">Our Services</a>
              </li>
              <li>
                <a href="/terms-and-conditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className={styles.address}>
            <h4>Inquiries</h4>
            <div className={styles.addressContainer}>
              <div className={styles.contactContainer}>
                <FontAwesomeIcon icon={faPhone} />
                <span>+44 7490 406550</span>
              </div>
              <br />
              <div className={styles.contactContainer}>
                <FontAwesomeIcon icon={faMailBulk} />
                <span> info@enovialabs.co.uk</span>
              </div>
              <br />
              <div className={styles.contactContainer}>
                <FontAwesomeIcon icon={faMapMarker} />
                <span> Paul Street, London, England, United Kingdom</span>
              </div>
            </div>
          </div>

          <div className={styles.footerDivRight}>
            <div className={styles.social}>
              <h4>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.youtube.com/channel/UCjo81WpdJjdnIUuWHopJECg"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  href="https://www.linkedin.com/company/enovialabs/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                {/* 
                Will be active once we have an insta page
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.copyRight}>
        <p>© 2025 Enovia Labs. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
