import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nx3j5ir",
        "template_hgb76hq",
        form.current,
        "V5K9QOCar5NY_grb0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section name="contact" className="bg-red-400 dark:bg-indigo-400">
      <div className="container max-w-5xl m-auto p-2 py-[4rem] xl:py-[7rem]">
        <form
          className="flex flex-col max-w-lg m-auto bg-red-100 px-5 py-9 gap-5 rounded-lg
          dark:bg-slate-700"
          ref={form}
          onSubmit={sendEmail}
        >
          <h2 className="md:text-2xl text-xl mb-6 text-slate-900 dark:text-amber-50 text-center">
            Contact Me
          </h2>

          <div className="flex flex-col gap-1">
            <label
              className="block text-slate-700 text-sm sm:text-base font-bold dark:text-red-50"
              htmlFor="input-name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 
              leading-tight focus:outline-none focus:shadow-outline
              dark:bg-slate-900 dark:border-blue-900 dark:text-slate-50 "
              id="input-name"
              placeholder="Name"
              type="text"
              name="name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="block text-slate-700 text-sm sm:text-base font-bold dark:text-red-50"
              htmlFor="input-email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 
              leading-tight focus:outline-none focus:shadow-outline
              dark:bg-slate-900 dark:border-blue-900 dark:text-slate-50"
              id="input-email"
              placeholder="Email"
              type="email"
              name="email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="block text-slate-700 text-sm sm:text-base font-bold dark:text-red-50"
              htmlFor="input-msg"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 
              leading-tight focus:outline-none focus:shadow-outline
              dark:bg-slate-900 dark:border-blue-900 dark:text-slate-50"
              id="input-msg"
              placeholder="Message"
              name="message"
            />
          </div>

          <div
            className="max-w-min m-auto justify-self-center flex items-center gap-2 px-5 py-2 rounded-lg 
            bg-red-400 hover:bg-red-500 dark:bg-indigo-400 dark:hover:bg-indigo-500 text-red-50 dark:text-blue-50 mt-6"
            type="submit"
          >
            <FaPaperPlane />
            <input
              className="cursor-pointer flex-1"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
