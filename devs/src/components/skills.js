import React, { useEffect, useRef } from "react";
import "../css/skills.css";

function Skills() {
  const Fskils = [
    "React JS",
    "React Native Expo",
    "HTML",
    "CSS",
    "TypeScript",
    "JavaScript",
    "Angular",
    "Python",
    "Flask",
    "MySQL",
    "C",
    "C++",
    "C#",
    "Java",
    "Kotlin",
  ];

  const Bskils = [
    "Figma",
    "GitHub",
    "Rest API",
    "Linux",
    "AWS",
    "FireBase",
    "VSCode",
    "Unity",
    "Android Studio",
    "Power Automate",
    "Power App",
    "JSON",
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
          <p className="head_skills">Programming Languages</p>
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
          <p className="head_skills">Software Tools</p>
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
