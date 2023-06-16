"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";
import {
  BsPersonCircle,
  BsEnvelopeAtFill,
  BsChatSquareTextFill,
} from "react-icons/bs";

const Forms = ({ setMessage }) => {
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
          setMessage(true);
          setTimeout(() => {
            setMessage(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className="flex flex-col gap-4 text-base sm:text-xl sm:gap-6 p-2 sm:min-w-[430px] text-slate-800 font-medium"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="bg-slate-100 rounded-lg px-4 py-2 border border-slate-500 flex items-center gap-2">
        <BsPersonCircle className="text-slate-500" />
        <input
          id="input-name"
          type="text"
          placeholder="Name"
          className="bg-transparent placeholder:text-slate-500 outline-none w-full"
        />
      </div>

      <div className="bg-white rounded-lg px-4 py-2 border border-neutral-400 flex items-center gap-2">
        <BsEnvelopeAtFill className="text-slate-500" />
        <input
          id="input-email"
          type="email"
          placeholder="Email"
          className="bg-transparent placeholder:text-slate-500 outline-none w-full"
        />
      </div>

      <div className="bg-white rounded-lg px-4 py-2 border border-neutral-400 flex gap-2">
        <BsChatSquareTextFill className="text-slate-500" />
        <textarea
          id="input-message"
          type="text"
          placeholder="Message"
          className="bg-transparent placeholder:text-slate-500 outline-none w-full"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-neon-blue text-white rounded-lg py-2 font-bold"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Forms;
