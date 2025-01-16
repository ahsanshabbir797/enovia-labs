import VideoCover from "../../components/VideoCover/VideoCover";
import softwareDevelopment from "../../assets/software-development.mp4";
import styles from "./Home.module.css";
import OurServices from "../../components/Our-Services/Our-Services";
import OurIndustries from "../../components/Our-Industries/Our-Industries";
import OurInsights from "../../components/Our-Insights/OurInsights";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.videoContainer}>
        <VideoCover
          source={softwareDevelopment}
          header="Empowering Your Vision with Cutting-Edge Software Solutions"
          description="We help companies redefine the future through technology. Our team of experts will help you build the right software solutions for your business."
        />
        <OurServices />
        <OurIndustries />
        <OurInsights />
      </div>
    </div>
  );
}
