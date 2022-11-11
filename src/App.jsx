import React from "react";

import { Main, Services, Contact, Footer } from "./components";

const App = () => (
  <div className="w-full bg-primary overflow-hidden font-roboto">
    <Main />

    {/* Services */}
    <div id="services" className="flex justify-center items-center shadow-[inset_0_0_10px_grey] bg-secondary">
      <div className="my-[7%] mx-[5%] grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:max-w-[1280px] w-full xl:mx-[20%]">
        <Services />
      </div>
    </div>

    {/* Contact */}
    <div className="flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
