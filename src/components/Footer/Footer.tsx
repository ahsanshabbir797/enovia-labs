import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className={styles.address}>
            <h4>Inquiries</h4>
            <p>
              (000) 000-000
              <br /> info@enovialabs.co.uk
            </p>
          </div>

          <div className={styles.footerDivRight}>
            <div className={styles.social}>
              <h4>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
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
