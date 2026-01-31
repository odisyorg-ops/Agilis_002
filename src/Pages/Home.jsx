import Banner from "../Components/Banner";
import Features from "../Components/Home/Features";
import Footer from "../Components/Home/Footer";
import SolutionsSection from "../Components/Home/SolutionsSection";
import Stats from "../Components/Home/Stats";
import TeamSection from "../Components/Home/TeamSection";
import Values from "../Components/Home/Values";
import VideoSection from "../Components/Home/VideoSection";
import FAQSection from "../GlobalComponent/FAQSection";

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <VideoSection />
      
      {/* SUBTLE GRADIENT SECTION 
         from-white: Starts clean
         via-slate-50: Transition through Apple off-white
         to-blue-50/30: Ends with a very faint blue tint on the right
      */}
      <div className="bg-gradient-to-r from-white via-slate-50 to-blue-50/30 overflow-hidden">
        <Features />
        <SolutionsSection />
        <FAQSection></FAQSection>
        {/* <Stats></Stats> */}
        <TeamSection />
        <Values />
      </div>

    </main>
  );
};

export default Home;