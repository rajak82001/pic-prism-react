import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GsapTransition from "./components/GsapTransition";
import gsap from "gsap";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <GsapTransition />

        {/* We add Footer here */}
        <Footer />
      </BrowserRouter>
    </>
  );
}
