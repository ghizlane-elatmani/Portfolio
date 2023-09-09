"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";

const FormContact = ({ setMessage }) => {
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
      className="flex flex-col gap-5 justify-center items-center"
      ref={form}
      onSubmit={sendEmail}
    >
      {/* === NAME === */}
      <div className="form-control w-full max-w-xs">
        <label className="label label-text text-primary-content">Name</label>
        <input
          id="input-name"
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      {/* === EMAIL === */}
      <div className="form-control w-full max-w-xs">
        <label className="label label-text text-primary-content">Email</label>
        <input
          id="input-email"
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      {/* === TEXT AREA -> MESSAGE === */}
      <div className="form-control w-full max-w-xs">
        <label className="label label-text text-primary-content">Message</label>
        <textarea
          id="input-message"
          className="textarea textarea-bordered h-24 w-full max-w-xs"
          placeholder="Message"
        ></textarea>
      </div>

      {/* === SUBMIT BUTTON === */}
      <button type="submit" className="btn btn-secondary w-full max-w-[15rem]">
        Send
      </button>
    </form>
  );
};

export default FormContact;
