// eslint-disable-next-line no-unused-vars
import React from "react";
import mainLogo from "../../assets/images/Project_d_logo.png";

const Home = () => {
  return (
    <div className="px-[250px]">
      <div className="flex justify-center pt-20">
        <img
          src={mainLogo}
          height={100}
          width={1000}
          alt="Main Logo"
          className="items-center float-start"
        />
      </div>
      <div className="pt-[100px]">
        <ul className="space-y-10">
          <li>
            <a className="hover:underline text-white text-2xl" href="#bottom">
              治ス府英
            </a>
          </li>
          <li>
            <a className="hover:underline text-white text-2xl" href="#bottom">
              事省ッ島懸ぞどずさ旬行
            </a>
          </li>
          <li>
            <a className="hover:underline text-white text-2xl" href="#bottom">
              ふぽ的選医わ
            </a>
          </li>
          <li>
            <a className="hover:underline text-white text-2xl" href="#bottom">
              ぼそ妃球気
            </a>
          </li>
          <li>
            <a className="hover:underline text-white text-2xl" href="#bottom">
              おひ声座ネ
            </a>
          </li>
        </ul>
        <ul className="pt-[100px]">
          <li>
            <a className="hover:underline text-white text-2xl" href="#bottom">
              現購権ゆッ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
