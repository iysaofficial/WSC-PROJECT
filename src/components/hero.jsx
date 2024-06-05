import React from "react";

const hero = () => {
  return (
    <section className="mainhero-section">
      <div className="wrapper row">
        <div className="left col-lg-6">
          <img src="./assets/img/WEBSITEFIX.png" alt="" className="img-fluid" />
        </div>
        <div className="right col-lg-6">
          <h2>
            Are you a university student tired of local competitions? Ready to
            compete on an international stage?
          </h2>
          <h6>
            Join the World Science Competition (WSC) in Malaysia! Don't miss
            this chance to showcase your research and skills globally. Click the
            button below to join now!
          </h6>
          <a
            href="https://registrasi-wice-2024.vercel.app/"
            target="_blank"
            className="btn btn-action"
          >
            Join Now
          </a>
          <a
            href="https://drive.google.com/file/d/1Hdh2_LSGpUt8rqywdclM3OAeoBP1aUGL/view?usp=sharing"
            target="_blank"
            className="btn btn-action ms-1 ms-lg-3"
          >
            Guidebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default hero;
