import "./globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SimpleSlider from "./components/SimpleSlider";
import Myprojects from "./components/Myprojects";
import Services from "./components/Services";
import Work from "./components/Work";
import AboutMe from "./components/AboutMe";
import Certificate from "./components/Certificate";
import FAQ from "./components/FAQ";
import Form from "./components/Form";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <div className="absolute w-72 h-72 bg-Primary-400 rounded-full blur-[250px] animate-move-circle opacity-70 -z-10"></div>
      <div
        className="edk:px-20 px-12 absolute z-10 w-full -mt-[112px]"
        tabIndex={-1}
      >
        <Header />
      </div>
      <div className="edk:px-20 px-12 mt-[112px]" tabIndex={-1}>
        <Hero />
        <SimpleSlider />
        <Myprojects />
        <Services />
        <Work />
        <AboutMe />
        <Certificate />
        <FAQ />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default Home;
