import React from "react";
import { Maps } from ".";
import { contacts } from "../constants";

import { SiGooglemaps } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { BsClock, BsTelephone } from "react-icons/bs";

const Contact = () => (
  <section id="contacts" className="w-[100%] px-[5%] xs:mt-[10%] md:mt-[10%]">
    <div
      className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center"
      id="contact-btn"
    >
      <h1 className="text-3xl font-bold">Contactos</h1>
      <button
        type="submit"
        className="xs:hidden sm:visible sm:w-[40%] text-lg justify-center border border-transparent bg-main py-4 text-white 
        hover:bg-[#B72F31] xs:place-self-center xs:mt-4 sm:place-self-end"
      >
        <a href={`mailto: ${contacts.emails[0]}`}>Enviar mensagem</a>
      </button>
    </div>

    <div className="grid xs:grid-rows-[auto_auto_auto_auto_300px] sm:grid-rows-1 sm:grid-cols-3 gap-4 mt-[5rem]">
      <div id="address" className="xs:mb-[1rem]">
        <SiGooglemaps className="w-10 h-10 mb-[1rem]" />
        <h1 className="text-xl font-bold mb-[1rem]">Endereço</h1>
        <p className="mb-2">{contacts.address}</p>
        <p className="mb-2">{contacts.postalCode}</p>
        <p className="mb-2">{contacts.country}</p>
      </div>

      <div id="schedule" className="xs:mb-[1rem]">
        <BsClock className="w-10 h-10 mb-[1rem]" />
        <h1 className="text-xl font-bold mb-[1rem]">Horário</h1>
        <p>{contacts.schedule}</p>
      </div>

      <div id="maps" className="xs:row-start-5 xs:mb-[1rem] sm:row-span-2">
        <Maps />
      </div>

      <div id="email" className="xs:mb-[1rem]">
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

      <div id="contact" className="xs:mb-[1rem]">
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
  </section>
);

export default Contact;
