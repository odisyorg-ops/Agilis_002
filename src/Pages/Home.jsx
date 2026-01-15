import Banner from "../Components/Banner";
import Features from "../Components/Home/Features";
import Footer from "../Components/Home/Footer";
import SolutionsSection from "../Components/Home/SolutionsSection";
import VideoSection from "../Components/Home/VideoSection";

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <VideoSection></VideoSection>
      <Features></Features>
      <SolutionsSection></SolutionsSection>
      <Footer></Footer>
      {/* You can add the Video/Image section below this later */}
    </main>
  );
};

export default Home;