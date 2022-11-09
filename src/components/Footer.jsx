import React from "react";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="flex justify-center items-center sm:pt-16 sm:pb-8 py-2">
      <div className="w-full grid grid-cols-1 justify-between items-center">
        <p className="font-normal text-center text-[15px] leading-[27px] text-black">
          Copyright Ⓒ 2022 Gabriela Ferreira Pinto.
        </p>
        <p className="font-normal text-center text-[15px] leading-[27px] text-black">
          All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-2 mt-6 justify-center items-center">
          <BsLinkedin
            className={`w-[21px] h-[21px] object-contain cursor-pointer`}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/gabriela-ferreira-pinto-204328229/"
              )
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
