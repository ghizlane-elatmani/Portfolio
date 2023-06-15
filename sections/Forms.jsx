"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  BsPersonCircle,
  BsEnvelopeAtFill,
  BsChatSquareTextFill,
} from "react-icons/bs";

const Forms = () => {
  const form = useRef();
  const [response, setResponse] = useState(false);

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
          setResponse(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center">
      <div className="flex gap-10">
        <div>
          <p className="text-2xl font-bold mb-2">Contact</p>
          <p className="text-lg font-semibold text-neutral-600">
            Send me a message and I will respond to you as soon as I can.
          </p>
        </div>

        <form
          action=""
          className="min-w-[50%] flex flex-col gap-4"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="bg-white rounded-lg px-4 py-2 border border-neutral-400 flex items-center gap-2">
            <BsPersonCircle className="text-neutral-600" />
            <input
              id="input-name"
              type="text"
              placeholder="Name"
              className="bg-transparent placeholder:text-neutral-600 outline-none"
            />
          </div>

          <div className="bg-white rounded-lg px-4 py-2 border border-neutral-400 flex items-center gap-2">
            <BsEnvelopeAtFill className="text-neutral-600" />
            <input
              id="input-email"
              type="email"
              placeholder="Email"
              className="bg-transparent placeholder:text-neutral-600 outline-none"
            />
          </div>

          <div className="bg-white rounded-lg px-4 py-2 border border-neutral-400 flex gap-2">
            <BsChatSquareTextFill className="text-neutral-600" />
            <textarea
              id="input-message"
              type="text"
              placeholder="Message"
              className="bg-transparent placeholder:text-neutral-600 outline-none w-full"
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
      </div>
    </section>
  );
};

export default Forms;
