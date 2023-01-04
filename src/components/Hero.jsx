import React from "react";

import { logo_xl, video, arrow } from "../assets";
import { texts } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full lg:mt-7 z-0">
      <div className="absolute w-full xs:h-[20rem] sm:h-[30rem] md:h-[25rem] fill">
        <div className="bg-secondary h-[100%] progress"></div>
      </div>

      <div className="relative grid xs:grid-cols-[10%_5%_90%] lg:grid-cols-[10%_5%_20%_] xl:grid-cols-[15%_5%_20%_]">
        <div></div>
        <div className="bg-primary"></div>

        {/* Logo */}
        <a className="w-full" href="/">
          <img
            src={logo_xl}
            alt="Gabriela Ferreira Pinto Solicitadora"
            className="bg-primary xs:h-[20rem] sm:h-[30rem] md:h-[25rem]"
          />
        </a>

        {/* Video*/}
        <div className="xs:invisible lg:visible">
          <div className="absolute md:top-[-5%] lg:top-[-7%] xl2:top-[-20%] lg:right-[4rem] xl:right-[19rem] xl2:right-[30rem] xs:w-[40%] xl:w-[29%] container come-in">
            <video muted autoPlay loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>

        <div></div>
        <div></div>

        {/* Description and contact button */}
        <div className="col-span-2 col-start-3 my-6 xs:text-sm sm:text-xl md:text-lg">
          <div className="xs:w-[80%] sm:w-[60%] md:w-[30%] xs:my-4 w-[25%]">
            <p>{texts.header_main1}</p>
            <p className="italic">{texts.header_p1}
             - {texts.header_p2}</p>
          </div>
          <div className="arrow-left grid xs:grid-cols-1 sm:grid-cols-[35%_70%] md:grid-cols-[15%_85%] mt-8 cursor-pointer fill">
            <h2 className="xs:text-lg sm:text-3xl md:text-2xl font-bold">
              Entre em contacto
            </h2>
            <div className="xs:h-[2rem] bg-secondary flex justify-start items-center progress shadow-md">
              <a href="#contacts" className="ml-5">
                <img src={arrow} alt="Contactar" className="arrow w-[5rem]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
