import React from "react";
import "../css/about.css";

function About() {
  const one =
    "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.betplus.us:4c2430de-cd19-4e3e-9f81-01a05db80616?quality=0.7&gen=ntrn";
  const two =
    "https://images.unsplash.com/photo-1487219116710-23ffcb172b2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG92ZXIlMjB0ZWNofGVufDB8fDB8fHww";
  const three =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRldnxlbnwwfHwwfHx8MA%3D%3D";
  const four =
    "https://plus.unsplash.com/premium_photo-1675799641570-4e8ac4733d11?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="contain">
      <section className="hero-section">
        <div className="card-grid">
          <div className="card">
            <div
              className="card__background"
              style={{
                backgroundImage: `url(${one})`,
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading ho">Past</h3>
              <p className="card__category">
                As a kid, watching a show on Nickelodeon called "Game Shakers"
                had a profound impact on me. The episode where the kids
                programmed a game called "Sky Whale" sparked my curiosity about
                game creation and ignited my passion for computers. This pivotal
                moment set me on the path to pursuing a career in Computer
                Engineering, inspired to create innovative solutions that could
                change the world.
              </p>
            </div>
          </div>
          <div className="card">
            <div
              className="card__background"
              style={{ backgroundImage: `url(${two})` }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">Current</h3>
              <p className="card__category">
                Currently, as an aspiring computer engineer, one of my many
                career goals is to expand and advance Markerless Augmented
                Reality so that technology can evolve toward a more futuristic
                approach. I am also passionate about innovating hover
                technology.
              </p>
            </div>
          </div>
          <div className="card">
            <div
              className="card__background"
              style={{ backgroundImage: `url(${three})` }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">Future</h3>
              <p className="card__category">
                To achieve my goals, I have been developing my skills in various
                areas of technology, such as HTML5, CSS, JavaScript, and
                AutoCAD. At Jackson State University, I have honed my software
                skills, competed in hackathons, and studied Electronics and
                Embedded Systems. This year, I aim to delve deeper into hardware
                engineering by designing small embedded systems and expanding my
                expertise.
              </p>
            </div>
          </div>
          <div className="card">
            <div
              className="card__background"
              style={{ backgroundImage: `url(${four})` }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">Hobbies</h3>
              <p className="card__category">
                My hobbies align closely with my career goals and passions. I
                enjoy exploring new programming languages, participating in
                hackathons, and working on personal projects that challenge me
                creatively and technically. Outside of technology, I have a
                passion for crocheting, knitting, and playing the saxophone,
                which provide a balanced mix of creative expression and
                relaxation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
