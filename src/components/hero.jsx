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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              mollitia quos esse laboriosam fugit sapiente?
            </h2>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis mollitia eveniet quisquam similique, libero quam,
              exercitationem pariatur maiores ipsa velit dolore qui dicta eius
              expedita!
            </h6>
            <a href="/faq" className="btn btn-action">
              Open Registration
            </a>
          </div>
        </div>
    </section>
  );
};

export default hero;
