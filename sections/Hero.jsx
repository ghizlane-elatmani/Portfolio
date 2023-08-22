"use client";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen lg:min-h-[700px]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello, I'm Ghizlane</h1>
          <p className="mb-5">
            I'm a web developer, and I'm very passionate and dedicated to my
            work. I will love to create your website.
          </p>
          <button className="btn btn-primary">Contact me</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
