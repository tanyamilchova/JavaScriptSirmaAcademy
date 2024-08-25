import Header from "./components/Header";
import Slider from "./components/Slider";
import Service from "./components/Service"
import Contact from "./components/Contact";
import Client from "./components/Client";
import Price from "./components/Price";
import Footer from "./components/Footer";
import About from "./components/About";
import Info from "./components/Info";
import Server from "./components/Server";


function App() {
   return (
    <>
  <div className="hero_area">
    <Header/>

    <Slider/>

    <Service/>

    <About/>

    <Server/>

    <Price/>

    <Client/>

    <Contact/>

    <Info/>
    
    <Footer/>

  </div>

    </>
  );
}
export default App
