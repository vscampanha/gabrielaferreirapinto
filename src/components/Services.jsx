import React from "react";
import Service from "./Service";

import { services } from "../constants";

const Services = () => {
  return services.map((service) => (
    <Service key={service.id} service={service} />
  ));
};

export default Services;
