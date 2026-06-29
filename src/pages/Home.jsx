import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import FeatureBar from "../components/FeatureBar";
import Trending from "../components/Trending";
import Curatedcln from "../components/Curatedcln";
// import About from "../components/About";
// import Selections from "../components/Selections";
// import Reviews from "../components/Reviews";


function Home() {
  return (
    <>
      <Navbar />
       <Hero />
       <FeatureBar/>
       <Trending/>
       <Curatedcln/>
        <Categories />
         <Footer/>
       {/* <Selections/> */}
        {/* <About/> */}
       {/* <Reviews /> */}
    </>
  );
}

export default Home;