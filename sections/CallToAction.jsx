"use client";

const CallToAction = () => {
  return (
    <section id="contact-me" className="my-section bg-primary-focus">
      <h2 className="text-center mb-5 font-bold text-primary-content text-2xl">
        Contact Me
      </h2>

      <div className="max-w-4xl m-auto grid grid-cols-2 gap-5">
        {/* IMAGE */}
        <div>
          <img src="/background/contact-me.png" className="rounded-lg" />
        </div>

        {/* FORM */}
        <form
          action=""
          className="flex flex-col gap-5 justify-center items-center"
        >
          {/* === NAME === */}
          <div className="form-control w-full max-w-xs">
            <label className="label label-text text-primary-content">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* === EMAIL === */}
          <div className="form-control w-full max-w-xs">
            <label className="label label-text text-primary-content">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* === TEXT AREA -> MESSAGE === */}
          <div className="form-control w-full max-w-xs">
            <label className="label label-text text-primary-content">
              Message
            </label>
            <textarea
              className="textarea textarea-bordered h-24 w-full max-w-xs"
              placeholder="Message"
            ></textarea>
          </div>

          {/* === SUBMIT BUTTON === */}
          <button
            type="submit"
            className="btn btn-primary-content w-full max-w-[15rem]"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
