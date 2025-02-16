"use client";
import Navbar from "./components/navbar/navbar";
import Slider from "./components/slider/slider";
import ShowByCategory from "./components/showByCategory/showByCategory";
import LivingRoom from "./components/livingRoom/livingRoom";
import Description from "./components/description/description";
import TopSeller from "./components/topSeller/topSeller";
import SpecialDiv from "./components/specialDiv/specialDiv";
import OptionsSite from "./components/optionsSite/optionsSite";
import Blog from "./components/blog/blog";
import Footer from "./components/footer/footer";
function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <ShowByCategory />
      <LivingRoom />
      <Description />
      <TopSeller />
      <SpecialDiv />
      <OptionsSite />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
