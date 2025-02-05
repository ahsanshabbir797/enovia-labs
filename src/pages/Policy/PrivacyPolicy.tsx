import ImageBanner from "../../components/ImageCover/ImageCover";
import styles from "./PrivacyPolicy.module.css";
import policy from "../../assets/Policy.jpg";

const PrivacyPolicy = () => {
  return (
    <div className={styles.mainContainer}>
      <ImageBanner
        bannerTitle="Privacy Policy"
        height="40rem"
        imagePath={policy}
        paragraphText="Last Updated: Feb 01, 2025"
      />
      <div className={styles.container}>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <p className={styles.paragraph}>
          This Privacy Policy explains how we collect, use, and safeguard your
          personal information when you visit our website.
        </p>

        <section className={styles.section}>
          <h2 className={styles.subHeading}>Information We Collect</h2>
          <p className={styles.paragraph}>
            We collect information that you provide to us directly, such as when
            you create an account, fill out a form, or contact us. We may also
            collect certain information automatically as you interact with our
            site.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subHeading}>How We Use Your Information</h2>
          <p className={styles.paragraph}>
            Your information is used to improve our services, respond to
            inquiries, and personalize your experience. We will not share or
            sell your personal information to third parties.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subHeading}>Data Security</h2>
          <p className={styles.paragraph}>
            We take data security seriously and implement reasonable measures to
            protect your personal information. However, no method of data
            transmission over the internet is completely secure.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subHeading}>Your Rights</h2>
          <p className={styles.paragraph}>
            You have the right to access, update, or delete your personal
            information. You can also opt-out of marketing communications by
            contacting us.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subHeading}>Changes to This Policy</h2>
          <p className={styles.paragraph}>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
