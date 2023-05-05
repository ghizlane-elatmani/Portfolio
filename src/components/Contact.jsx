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
    <section
      name="contact"
      // style={{
      //   backgroundImage: `url(${backgroundImg})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="container m-auto max-w-4xl p-2 py-[4rem] xl:py-[7rem]">
        <form
          className="m-auto flex max-w-md flex-col gap-5 rounded-lg bg-neutral-100 px-5 py-9 dark:bg-neutral-700"
          ref={form}
          onSubmit={sendEmail}
        >
          <h2 className="mb-6 text-center text-xl text-slate-900 dark:text-amber-50 md:text-2xl">
            Contact Me
          </h2>

          <div className="flex flex-col gap-1">
            <label
              className="block text-sm font-bold text-slate-700 dark:text-blue-50 sm:text-base"
              htmlFor="input-name"
            >
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border border-neutral-400/50 py-2 px-3 leading-tight text-slate-700 shadow focus:outline-none dark:border-blue-900 dark:bg-slate-900 dark:text-slate-50 "
              id="input-name"
              placeholder="Name"
              type="text"
              name="name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="block text-sm font-bold text-slate-700 dark:text-blue-50 sm:text-base "
              htmlFor="input-email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border border-neutral-400/50 py-2 px-3  leading-tight text-slate-700 shadow focus:outline-none dark:border-blue-900 dark:bg-slate-900 dark:text-slate-50"
              id="input-email"
              placeholder="Email"
              type="email"
              name="email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="block text-sm font-bold text-slate-700 dark:text-blue-50 sm:text-base"
              htmlFor="input-msg"
            >
              Message
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border border-neutral-400/50 py-2 px-3  leading-tight text-slate-700 shadow focus:outline-none dark:border-blue-900 dark:bg-slate-900 dark:text-slate-50"
              id="input-msg"
              placeholder="Message"
              name="message"
            />
          </div>

          <div
            className="m-auto mt-6 flex max-w-min items-center gap-2 justify-self-center rounded-lg bg-blue-400 px-5 py-2 text-blue-50 hover:bg-blue-500 dark:bg-indigo-400 dark:text-blue-50 dark:hover:bg-indigo-500"
            type="submit"
          >
            <FaPaperPlane />
            <input
              className="flex-1 cursor-pointer"
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
