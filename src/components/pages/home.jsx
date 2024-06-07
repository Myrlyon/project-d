// eslint-disable-next-line no-unused-vars
import React from "react";
import mainLogo from "../../assets/images/Project_d_logo.png";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-center pt-12">
        <img
          src={mainLogo}
          height={100}
          width={1000}
          alt="Main Logo"
          className="items-center"
        />
      </div>
      <div className="pt-[100px] pl-[250px]">
        <ul className="space-y-10">
          <li>
            <a className=" text-white text-2xl" href="#bottom">
              治ス府英
            </a>
          </li>
          <li>
            <a className=" text-white text-2xl" href="#bottom">
              治ス府英レづ問載や
            </a>
          </li>
          <li>
            <a className=" text-white text-2xl" href="#bottom">
              治ス府英
            </a>
          </li>
          <li>
            <a className=" text-white text-2xl" href="#bottom">
              治ス府英
            </a>
          </li>
          <li>
            <a className=" text-white text-2xl" href="#bottom">
              治ス府英
            </a>
          </li>
        </ul>
        <ul className="pt-[100px]">
          <li>
            <a className=" text-white text-2xl" href="#bottom">
              治ス府英
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
