import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SellerDashboard from "../pages/SellerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Toaster } from "react-hot-toast";

const GsapTransition = () => {
  const nodeRef = useRef(null);
  const location = useLocation();
  {
    /*    console.log("The Location is: " , location);
    console.log("The reference is: " , nodeRef); */
  }

  // jab bhi loaction change hoga tab ye use effect run hoga, beacuse ye useEffect hook ko hum dependent banane wallw hai location ke upar

  //when a page renders, useEffects runs first
  useEffect(() => {
    //agar nodeRef ki value define nahi hogy to gsap appy nahi hoga.
    if (nodeRef.current) {
      gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
      //toast.success("Page Changed");
    }
  }, [location]);
  // when we keep dependency array empty it means that: bhai ye page call hoga jab bhi tum refresh karoge.

  //for GSAP :
  // 1) target
  // 2) logic

  return (
    <div ref={nodeRef}>
      <Toaster />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seller/profile" element={<SellerDashboard />} />
        <Route path="/buyer/profile" element={<BuyerDashboard />} />
      </Routes>
    </div>
  );
};

export default GsapTransition;
