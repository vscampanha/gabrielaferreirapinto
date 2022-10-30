import { useEffect, useState } from "react";

import styles from "../style";

const Service = ({ service }) => {
  const [grid, setGrid] = useState("");

  const onMouseEnter = (event) => {
    if (event.target.id === "justice") {
      document.getElementById("court").style = "col-span-1 row-span-1";
      setGrid("col-span-1 row-span-2");
    }
  };
  const onMouseLeave = () => setGrid("");

  // useEffect(() => {
  //   console.log("new");
  // }, [grid]);

  return (
    <div
      key={service.id}
      id={service.id}
      className={` ${styles.flexCenter} ${
        service.id === "court"
          ? "col-span-1 row-span-2 border-2 bg-secondary border-main h-[100%]"
          : "bg-boxGrey"
        // } box-border p-[50%] flip-card flip-card-inner`}
      } box-border p-[50%] ${grid}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flip-card-front">
        <div className="h-[10rem] w-[10rem]">
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
