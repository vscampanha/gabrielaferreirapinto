import React from "react";
import { Maps } from ".";
import { contacts } from "../constants";

import { SiGooglemaps } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { BsClock, BsTelephone } from "react-icons/bs";

const Contact = () => (
  <div className={`w-[100%] px-[5%] my-[5%]`}>
    <div className="grid grid-cols-2 gap-4" id="contact-btn">
      <h1 className="text-3xl font-bold">Contactos</h1>
      <button
        type="submit"
        className="w-[40%] justify-center border border-transparent bg-main py-4 text-white hover:bg-[#B72F31] place-self-end"
      >
        <a className="" href={`mailto: ${contacts.emails[0]}`}>
          Enviar mensagem
        </a>
      </button>
    </div>

    <div className="grid grid-cols-3 gap-4 mt-[5rem]">
      <div id="address">
        <SiGooglemaps className="w-10 h-10 mb-[1rem]" />
        <h1 className="text-xl font-bold mb-[1rem]">Endereço</h1>
        <p className="mb-2">{contacts.address}</p>
        <p className="mb-2">{contacts.postalCode}</p>
        <p className="mb-2">{contacts.country}</p>
      </div>

      <div id="schedule">
        <BsClock className="w-10 h-10 mb-[1rem]" />
        <h1 className="text-xl font-bold mb-[1rem]">Horário</h1>
        <p>{contacts.schedule}</p>
      </div>

      <div id="maps" className="row-span-2">
        <Maps />
      </div>

      <div id="email">
        <AiOutlineMail className="w-10 h-10 mb-[1rem]" />
        <h1 className="text-xl font-bold mb-[1rem]">Email</h1>
        <div className="grid grid-col-1 gap-2">
          {contacts.emails.map((email) => {
            return (
              <a
                key={email}
                className="hover:text-main"
                href={`mailto: ${email}`}
              >
                {email}
              </a>
            );
          })}
        </div>
      </div>

      <div id="contact">
        <BsTelephone className="w-10 h-10 mb-[1rem]" />
        <h1 className="text-xl font-bold mb-[1rem]">Outros Contactos</h1>
        <div className="grid grid-col-1 gap-2">
          {contacts.phones.map((phone) => {
            return (
              <a
                key={phone}
                className="hover:text-main"
                href={`tel:+351${phone}`}
              >
                +351 {phone}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
