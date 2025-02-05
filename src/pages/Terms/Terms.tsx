import styles from "./Terms.module.css";
import ImageBanner from "../../components/ImageCover/ImageCover";
import policy from "../../assets/Policy.jpg";

const TermsAndConditions = () => {
  return (
    <div className={styles.mainContainer}>
      <ImageBanner
        bannerTitle=""
        bannerSubHeading="Terms and Conditions"
        height="40rem"
        imagePath={policy}
        paragraphText="Our terms and conditions outline the rules and regulations for the use of our software development services."
      />
      <div className={styles.container}>
        <h1 className={styles.heading}>Terms and Conditions</h1>

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Enovia Labs. These terms and conditions outline the rules
            and regulations for the use of our software development services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Services</h2>
          <p>
            We provide software development, UI/UX design, DevOps, and related
            services. The details of each service will be agreed upon in a
            separate contract.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Intellectual Property</h2>
          <p>
            All intellectual property rights related to software developed by
            our company remain with us until full payment is received and
            contractual obligations are met.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Payments and Refunds</h2>
          <p>
            Payments must be made as per the agreed schedule. Refunds are only
            provided in specific cases, subject to approval.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Liability</h2>
          <p>
            We are not responsible for indirect damages, loss of data, or
            third-party claims arising from the use of our software solutions.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Termination</h2>
          <p>
            We reserve the right to terminate our services if any violations of
            these terms are found or in cases of non-payment.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Changes to Terms</h2>
          <p>
            We may update these terms at any time. It is your responsibility to
            review them periodically.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Contact Information</h2>
          <p>
            If you have any questions about these terms, please contact us at
            info@enovialabs.co.uk
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
