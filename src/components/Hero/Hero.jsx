import React from "react";
import "./Hero.scss"
import { FiDownloadCloud } from "react-icons/fi";
const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ziyeddin_resume.pdf";
    link.download = "Ziyeddin_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fixedLocation = { 
    lat: 40.39522087832711, 
    lng: 49.94292212951702 
}; // Fixed Location

const handleViewLargerMap = () => {
  const { lat, lng } = fixedLocation;
  window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
};

  return (
    <>
      <div className="home" id="home">
        <div className="home_left">
          <p>Hello World ! My name is</p>
          <h1>Mustafazade Ziyeddin</h1>
          <p>"Front-end developer crafting sleek, responsive web interfaces."
          </p>
          <button onClick={handleDownload}>
            Download Resume
            <FiDownloadCloud style={{ marginLeft: "15px" }} />
          </button>

        </div>
        <div className="home_right">
          <img src="/assets/cv.jpg" alt="" />
        </div>
      </div>
      <button onClick={handleViewLargerMap}>
        salam
      </button>


    </>

  );
};

export default Hero;




