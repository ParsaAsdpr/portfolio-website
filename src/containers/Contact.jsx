import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import { Parallax } from "react-parallax";

const Contact = () => {
  return (
    <div id="contact">
      <SectionTitle title="Contact"></SectionTitle>
      <div className="flex flex-col sm:flex-row justify-between max-w-7xl mx-auto mt-16 sm:mt-20 md::mt-24">

        <ContactForm />

        <div className="w-full sm:w-1/2 flex flex-col items-center">
      <Parallax
      style={{overflow: 'visible'}}
        strength={100}
        renderLayer={(precentage) => (
          <div>
        <h2 className={`font-bold italic text-3xl text-stone-800 pb-14 pt-20 duration-700 ${precentage > 0.30 ? 'translate-y-0 opacity-1' : 'translate-y-20 opacity-0'}`}>
            Get In Touch
          </h2>
          <ContactInfo title="Email" text="parsaasadpour1199@gmail.com" perc={precentage} expected={0.40} />
          <ContactInfo title="Contact Number" text="(+98) 9939604178" perc={precentage} expected={0.50} />
          </div>
          )}
          ></Parallax>
        </div>
      </div>
    </div>
  );
};

export default Contact;
