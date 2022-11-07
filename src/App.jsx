import React from "react";
import styles from "./style";

import { Main, Services, Contact } from "./components";

console.log(process.env.REACT_APP_GOOGLE_KEY);

const App = () => (
  <div className="w-full bg-primary overflow-hidden font-roboto">
    <Main className="snap-start" />

    {/* Services */}
    <div
      className={`shadow-[inset_0_0_10px_grey] bg-secondary ${styles.flexCenter}`}
    >
      <div
        className={`m-[5%] grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${styles.boxWidth} xl:mx-[20%]`}
      >
        <Services />
      </div>
    </div>

    {/* Contact */}
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Contact />
      </div>
    </div>
  </div>
);

export default App;
