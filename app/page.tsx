import "./globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SimpleSlider from "./components/SimpleSlider";
import Myprojects from "./components/Myprojects";
import Services from "./components/Services";
import Work from "./components/Work";
import Certificate from "./components/Certificate";
import FAQ from "./components/FAQ";
import Form from "./components/Form";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <div
        className="edk:px-20 px-12 absolute z-10 w-full -mt-[112px]"
        tabIndex={-1}
      >
        <Header />
      </div>
      <div className="edk:px-20 px-12 mt-[112px]" tabIndex={-1}>
        <div
          className="absolute w-72 h-72 bg-Primary-400 rounded-full blur-[250px] animate-move-circle opacity-40 -z-20"
          tabIndex={-1}
        ></div>
        <Hero />
        <SimpleSlider />
      </div>
      <div className="edk:px-20 px-12 mt-[112px]" tabIndex={-1}>
        <Myprojects />
        <Services />
        <Work />
        <Certificate />
        <FAQ />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default Home;