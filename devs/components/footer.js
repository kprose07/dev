import React, { useEffect, useState } from "react";
import "../css/footer.css"; // Ensure the CSS file is correctly linked
import flogo from "../imgs/kd.png";

function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const halfwayPoint = document.body.scrollHeight / 2;

      // Set a minimum scroll distance (e.g., 200px) to trigger the footer visibility
      const minimumScroll = 200;

      if (scrollY > halfwayPoint || scrollY > minimumScroll) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case the user loads the page already scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isFooterVisible ? "visible" : ""}`}>
      <img src={flogo} alt="KhaysDev Logo" />
    </footer>
  );
}

export default Footer;
