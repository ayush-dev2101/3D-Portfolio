import React from "react";
import Project1 from "../assets/images/project1.png";
import Project2 from "../assets/images/project2.png";

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={Project1} alt="Hungrium" />
            </div>
            <div className="text-content">
              <h2>
                Setting the conviction for the genuine food to customer with
                Hungrium.
              </h2>
              <p className="text-white-50 md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum quam sapiente tempore aperiam excepturi,
                autem assumenda vel, eos porro hic? Omnis, porro perferendis
                tempore, nisi, ad dolorem officia in minima culpa voluptas ipsam
                natus quo. Distinctio unde error officia?
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src={Project2} alt="SchoolFinder" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
