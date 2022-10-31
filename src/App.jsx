import React from "react";
import styles from "./style";

import { Main, Navbar, Hero, Services, Contact } from "./components";

const App = () => (
  <div className="w-full bg-primary overflow-hidden font-roboto">
    <Main />

    {/* Services */}
    <div className={`mx-[5%] drop-shadow-md ${styles.flexCenter}`}>
      <div
        className={`grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${styles.boxWidth} mt-[8rem] mb-[5rem] xl:mx-[20%]`}
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