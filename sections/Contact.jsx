"use client";

import FormContact from "@components/FormContact";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);

  return (
    <section id="contact-me" className="my-section bg-primary-focus">
      <h2 className="text-center text-primary-content heading-2">Contact Me</h2>

      <div className="max-w-4xl m-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <img src="/background/contact-me.png" className="rounded-lg" />
        </div>

        <FormContact setMessage={setMessage} />

        {message && (
          <div className="alert alert-success col-span-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your message has been send!</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
