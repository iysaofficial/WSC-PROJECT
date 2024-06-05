import React from "react";

const compabout = () => {
  return (
    <section id="About" className="about-section">
      <div className="wrapper">
        <div className="title text-center">
          <h3>Background</h3>
        </div>
        <div className="content row">
          <div className="left">
            <img src="./assets/logo/WSC.png" className="img-fluid" alt="" />
          </div>
          <div className="right">
            <p>
              At this present moment, Industry 4.0 has enveloped the developed
              and developing economies of the world and it is forcing us to
              change the way we work, study, and live. We live in an age of
              disruption and we need to adapt if we were to achieve a developed
              nation status.
            </p>
            <p>
              This is where an event like World Science Competition (WSC),
              organized by Indonesia Young Scientist Association (IYSA) in
              collaboration with MAHSA University (Malaysian Allied Health
              Sciences Academy) comes into play by providing a global stage for
              young talented minds to harness their discovery in science,
              innovation, invention, technology, and commercialization.
            </p>
            <p>
              This event will encourage the participants to develop resilience,
              confidence, adaptability, and collaborative intelligence – all the
              necessary skills needed in this disruptive age. These skills are
              essential to help them transform according to market shifts and
              trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default compabout;
