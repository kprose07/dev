import React, { useEffect, useRef } from "react";
import "../css/home.css";
import "../css/variables.css";
// import soBG from "../imgs/sectionbg.png";
import Me from "../imgs/me.png";
import Cards from "../components/AboutCards";
import Skills from "../components/skills";

function Home() {
  const sectionTwoRef = useRef(null);
  const introducingTextRef = useRef(null);

  useEffect(() => {
    const handleAnimationEnd = () => {
      if (sectionTwoRef.current) {
        sectionTwoRef.current.classList.add("visible");
        sectionTwoRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    const introducingText = introducingTextRef.current;
    if (introducingText) {
      introducingText.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (introducingText) {
        introducingText.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

  return (
    <>
      <div className="home_contain">
        <div className="section_one">
          <p id="so_text" ref={introducingTextRef}>
            Introducing...
          </p>
        </div>
        <div className="section_two fade-in" ref={sectionTwoRef}>
          <div className="stco">
            <p className="so_HeadText">Khaylah Rose</p>
            <p className="so_SubText">Fullstack Developer</p>
            <p className="so_Detail">
              Greetings! I'm Khaylah Rose, an aspiring computer engineer
              currently in my junior year, Class of 2025. With a passion for
              both front-end and back-end development, I strive to create
              seamless and impactful user experiences. My goal is to leverage my
              skills in computer engineering to drive positive change within our
              community. Let's build the future together!
            </p>
            <a id="resume" href="/resume.pdf" download>
              Resume
            </a>
          </div>
          <div className="stct">
            <div className="profImage">
              <img src={Me} alt="Me" />
            </div>
          </div>
        </div>
        <div className="section_three">
          <p className="Head">About</p>
          <div className="cards">
            <Cards />
          </div>
        </div>
        <div className="section_four">
          <p className="Head">Skills</p>
          <Skills />
        </div>
        <div className="section_five">
          <p id="proj" className="Head">
            Top Projects
          </p>
          <div className="p_cards">
            <div className="cardp">
              <div className="pcardo"></div>
              <a href="https://turnerscleaningservice.com/">
                Turner's Cleaning
              </a>
            </div>
            <div className="cardp">
              <div className="pcardt"></div>
              <a href="https://github.com/AATechCulture/TiCode">
                BE SMART Hackathon
              </a>
            </div>
            <div className="cardp">
              <div className="pcardth"></div>

              <a href="https://devpost.com/software/mediscan-b6ln1m">
                Lily hackathon
              </a>
            </div>
            <div className="cardp">
              <div className="pcardf"></div>

              <a href="https://www.linkedin.com/pulse/meet-youth-tackling-challenges-south-african-education-usaid/">
                USAID Case study
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
