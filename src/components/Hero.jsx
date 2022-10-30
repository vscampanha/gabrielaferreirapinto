import React from "react";

import { logo, video, arrow } from "/assets";
import { texts } from "../constants";
import styles from "../style";

const Hero = () => {
  return (
    <div className="relative w-full lg:mt-7">
      <div className="absolute w-full h-[30rem] fill">
        <div className="bg-secondary h-[100%] progress"></div>
      </div>

      <div className="relative grid lg:grid-cols-[5%_5%_20%_] xl:grid-cols-[15%_5%_20%_]">
        <div></div>
        <div className="bg-primary"></div>
        {/* Logo */}
        <div className="bg-primary w-[270px] h-[30rem]">
          <img src={logo} alt="Gabriela Logo" className="h-[100%]" />
        </div>

        <div className="ss:invisible lg:visible">
          <div className="absolute top-[-5%] lg:right-[4rem] xl:right-[19rem] lg:w-[45%] xl:w-[30%] container come-in">
            <video muted autoPlay loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>

        <div></div>
        <div></div>

        {/* Description and contact button */}
        <div className="col-span-2 col-start-3 my-6 text-lg">
          <div className="w-[30%]">
            <p>{texts.header_main}</p>
          </div>
          <div className="arrow-left grid grid-cols-[15%_85%] mt-8 cursor-pointer fill">
            <h2 className="text-2xl font-bold">Entre em contacto</h2>
            <div className={`bg-secondary ${styles.flexJustStart} progress`}>
              <a href="#" className="ml-5">
                <img src={arrow} alt="arrow" className="arrow w-[5rem]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className={`relative grid grid-cols-[10%_5%_15%_70%]`}>
        <div className=""></div>
        <div className="bg-primary"></div>
        Logo
        <div className="bg-primary h-[30rem] w-[270px]">
          <img src={logo} alt="Gabriela Logo" className="h-[100%]" />
        </div>
        <div className=""></div>
        Description and contact button
        <div className=" col-span-2 col-start-3 my-10 text-lg">
          <div className="w-[30%]">
            <p>{texts.header_main}</p>
          </div>
          <div className="arrow-left grid grid-cols-[15%_85%] mt-8 cursor-pointer fill">
            <h2 className="text-2xl font-bold">Entre em contacto</h2>
            <div className={`bg-secondary ${styles.flexJustStart} progress`}>
              <a href="#" className="ml-5">
                <img src={arrow} alt="arrow" className="arrow w-[5rem]" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-[5%] right-[15%] w-[30%] container ">
          <video muted autoPlay loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div> */
}
