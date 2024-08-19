import React, { useEffect, useRef } from "react";
import "../css/skills.css";

function Skills() {
  const Fskils = [
    "React",
    "HTML",
    "CSS",
    "TypeScript",
    "JavaScript",
    "Angular",
    "Flask",
    "Figma",
    "UI/UX",
    "WebDesign",
  ];

  const Bskils = [
    "C++",
    "Kotlin",
    "Python",
    "NodeJS",
    "GitHub",
    "C",
    "Linux",
    "AWS",
    "FireBase",
    "SQL",
    "Unity",
    "Android Studio",
  ];

  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const refs = skillRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <div className="skills_cont">
        <div className="skills_sect">
          <p className="head_skills">Front End</p>
          <div className="skills_tags_cont">
            {Fskils.map((skill, index) => (
              <p
                key={index}
                className="skill_tag"
                ref={(el) => (skillRefs.current[index] = el)}
              >
                {skill}
              </p>
            ))}
          </div>
        </div>

        <div className="skills_sect">
          <p className="head_skills">Back End</p>
          <div className="skills_tags_cont">
            {Bskils.map((skill, index) => (
              <p
                key={index + Fskils.length}
                className="skill_tag"
                ref={(el) => (skillRefs.current[index + Fskils.length] = el)}
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
