import { useEffect, useState } from "react";

import styles from "../style";

const Service = ({ service }) => {

  return (
    <div
      key={service.id}
      id={service.id}
      className={` ${styles.flexCenter} ${
        service.id === "court"
          ? "xs:p-[50%] xs:bg-boxGrey md:p-[50%] sm:py-[20%] sm:col-span-2 sm:row-span-1 sm:row-start-2 md:col-span-1 md:row-span-2 sm:border-2 sm:bg-secondary sm:border-main h-[100%]"
          : "bg-boxGrey p-[50%]"
        } box-border flip-card flip-card-inner`}
    >
      <div className="flip-card-front">
        <div className="xs:h-[7rem] xs:w-[7rem] sm:h-[10rem] sm:w-[10rem]">
          <img src={service.icon} alt={service.icon} />
        </div>
      </div>
      <div className="flip-card-back px-[10%] text-center">
        <h1 className="font-bold text-[2rem]">{service.title}</h1>
        <p className="p-4">{service.text}</p>
      </div>
    </div>
  );
};

export default Service;
