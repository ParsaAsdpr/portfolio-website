import React from "react";
import Input from "../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Parallax } from "react-parallax";

const ContactForm = () => {

  const Validate = yup.object().shape({
    yourName: yup
      .string("Your name should not contain any special character")
      .min(3, "Your name must contain between 3 and 20 letters")
      .max(25, "Your name must contain between 3 and 25 letters")
      .required("You forgot to enter your name"),
    yourEmail: yup
      .string("Email must be in english")
      .min(7, "Your email must contain at least 7 characters")
      .email("You have entered invalid Email")
      .required("You forgot to enter your Email"),
      subject: yup
      .string("Subject should not contain any special character")
      .min(7, "Subject must contain at least 7 characters")
      .max(50, "Subject shouldn't be longer than 50 characters")
      .required("You forgot to enter subject"),
  });

  const formik = useFormik({
    initialValues: {
      yourName: "",
      yourEmail: "",
      subject: "",
    },
    validationSchema: Validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });


  return (
    <Parallax
      style={{ overflow: "visible" }}
      strength={100}
      className="w-full sm:w-1/2 flex-col px-5 sm:pl-8 lg:px-10"
      renderLayer={(precentage) => (
        <form onSubmit={formik.handleSubmit}>
          <h2
            className={`mt-14 font-bold italic text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-stone-800 pb-8 sm:pb-14 parallax duration-700 ${
              precentage > 0.25 ? "show" : "hide"
            }`}
          >
            Let's Work Together
          </h2>

          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <Input
              name="yourName"
              onChange={formik.handleChange}
              value={formik.values.yourName}
              error={formik.errors.yourName}
              touched={formik.touched.yourName}
              type="text"
              placeholder="Your Name"
              perc={precentage}
              expected={0.4}
            />
            <Input
              name="yourEmail"
              onChange={formik.handleChange}
              value={formik.values.yourEmail}
              error={formik.errors.yourEmail}
              touched={formik.touched.yourEmail}
              type="email"
              placeholder="Your Email"
              perc={precentage}
              expected={0.4}
            />
          </div>
          <div className="mt-7">
            <Input
              name="subject"
              onChange={formik.handleChange}
              value={formik.values.subject}
              error={formik.errors.subject}
              touched={formik.touched.subject}
              type="text"
              placeholder="Subject"
              perc={precentage}
              expected={0.5}
            />
          </div>

          <textarea
            className={`border-b border-stone-500 mt-7 py-3 w-full max-w-full min-w-full max-h-[140px] min-h-[140px] duration-700 outline-none ${
              precentage > 0.65
                ? "translate-x-0 opacity-1"
                : "-translate-x-full opacity-0"
            }`}
            placeholder="Your Message"
          ></textarea>

          <button
          type="submit"
            className={`mt-10 py-4 border font-bold border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition w-full duration-700 ${
              precentage > 0.75
                ? "translate-y-0 opacity-1"
                : "translate-y-full opacity-0"
            }` 
          }
          >
            Send Message
          </button>
        </form>
      )}
    ></Parallax>
  );
};

export default ContactForm;
