import image from "../../assets/web-development.webp";
import ImageBanner from "../../components/ImageCover/ImageCover";
import VideoTextSection from "../../components/VideoTextSection/VideoTextSection";

function AboutUsPage() {
  const videoLink =
    "https://www.youtube.com/embed/Zh05jOaANjg?modestbranding=1&rel=0&showinfo=0&autohide=1";

  return (
    <div>
      <ImageBanner
        bannerSubHeading="Empowering Businesses, Inspiring Innovation"
        bannerTitle="ABOUT US"
        height="40rem"
        imagePath={image}
      />
      <VideoTextSection
        paragraphContent="At Enovia Labs, our philosophy is simple—empowering people and businesses through innovation. We believe in fostering a collaborative environment, investing in talent, and delivering meaningful solutions that drive progress for our clients and communities worldwide."
        videoUrl={videoLink}
      />
    </div>
  );
}

export default AboutUsPage;
