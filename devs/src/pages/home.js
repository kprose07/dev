import React, { useEffect, useRef } from "react";
import "../css/home.css";
import "../css/variables.css";
import Me from "../imgs/me.png";
import Cards from "../components/AboutCards";
import Skills from "../components/skills";

function Home() {
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null); // For About section
  const pCardsRef = useRef(null);
  const introducingTextRef = useRef(null);

  // Handle the introduction animation and scroll to the About section
  useEffect(() => {
    const handleAnimationEnd = () => {
      if (sectionThreeRef.current) {
        sectionTwoRef.current.classList.add("visible");
        sectionTwoRef.current.scrollIntoView({ behavior: "smooth" });
        // sectionThreeRef.current.scrollIntoView({ behavior: "smooth" });
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

  // Infinite scroll for section 5 (Top Projects) only when in view
  useEffect(() => {
    const pCards = pCardsRef.current;

    const cloneCards = () => {
      const clonedCards = pCards.innerHTML;
      pCards.innerHTML += clonedCards;
    };

    cloneCards();

    const scroll = () => {
      if (pCards) {
        pCards.scrollLeft += 1;
        if (pCards.scrollLeft >= pCards.scrollWidth / 2) {
          pCards.scrollLeft = 0;
        }
      }
    };

    let intervalId;

    // Use IntersectionObserver to trigger scroll only when section 5 is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intervalId = setInterval(scroll, 20); // Start scrolling when visible
          } else {
            clearInterval(intervalId); // Stop scrolling when out of view
          }
        });
      },
      { threshold: 0.8 } // Trigger when 50% of the section is in view
    );

    if (pCards) {
      observer.observe(pCards);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="home_contain">
        {/* Section One: Introducing Text */}
        <div className="section_one">
          <p id="so_text" ref={introducingTextRef}>
            Introducing...
          </p>
        </div>

        {/* Section Two: Introductory Content */}
        <div className="section_two fade-in" ref={sectionTwoRef}>
          <div className="stco">
            <p className="so_HeadText">Khaylah Rose</p>
            <p className="so_SubText">Fullstack Developer</p>
            <p className="so_Detail">
              Greetings! I'm Khaylah Rose, an aspiring computer engineer
              currently in my senior year, Class of 2025. With a passion for
              both front-end and back-end development, I strive to create
              seamless and impactful user experiences. My goal is to leverage my
              skills in computer engineering to drive positive change within our
              community. Let's build the future together!
            </p>
            <a id="resume" href="/Khaylah.Rose.Resume 2024.pdf" download>
              Resume
            </a>
          </div>
          <div className="stct">
            <div className="profImage">
              <img src={Me} alt="Me" />
            </div>
          </div>
        </div>

        {/* Section Three: About */}
        <div className="section_three" ref={sectionThreeRef}>
          <p className="Head">About</p>
          <div className="cards">
            <Cards />
          </div>
        </div>

        {/* Section Four: Skills */}
        <div className="section_four">
          <p className="Head">Skills</p>
          <Skills />
        </div>

        {/* Section Five: Top Projects */}
        <div className="section_five">
          <p id="proj" className="Head">
            Top Projects
          </p>
          <div className="p_cards" ref={pCardsRef}>
            <div className="cardp">
              <div className="pcardo"></div>
              <a href="https://turnerscleaningservice.com/">
                Turner's Cleaning
              </a>
            </div>
            <div className="cardp">
              <div className="pcardoo"></div>
              <a href="https://jsuinnovate.netlify.app/">Innovation Site</a>
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
