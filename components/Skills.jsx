const Skills = () => {
  return (
    <div className="bg-slate-900 text-white py-[5rem]">
      <div className="max-w-4xl m-auto ">
        <h2 className="text-center font-bold text-xl mb-2 sm:text-4xl">
          Our Services
        </h2>

        <p className="text-center uppercase text-sm text-purple-400 mb-12">
          What we do for you
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-slate-100 rounded-lg p-5 min-w-[210px] lg:min-w-[240px] flex flex-col items-center gap-3 cursor-pointer hover:scale-105 duration-75">
            <div className="border border-slate-700 rounded-full p-2">
              <img
                src="/design.png"
                className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
                alt=""
              />
            </div>
            <p className="text-center font-semibold text-slate-900 lg:text-xl">
              Design
            </p>
          </div>

          <div className="bg-purple-600 rounded-lg p-5 min-w-[210px] lg:min-w-[240px] flex flex-col items-center gap-3 cursor-pointer hover:scale-105 duration-75">
            <div className="border border-slate-50 bg-purple-100 rounded-full p-2 ">
              <img
                src="/frontend.png"
                className=" w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
                alt=""
              />
            </div>
            <p className="text-center font-semibold lg:text-xl">Front-end</p>
          </div>

          <div className="bg-slate-100 rounded-lg p-5 min-w-[210px] lg:min-w-[240px] flex flex-col items-center gap-3 cursor-pointer hover:scale-105 duration-75">
            <div className="border border-slate-700 rounded-full p-2">
              <img
                src="/backend.png"
                className="w-[38px] h-[38px] lg:w-[60px] lg:h-[60px]"
                alt=""
              />
            </div>
            <p className="text-center font-semibold text-slate-900 lg:text-xl">
              Back-end
            </p>
          </div>
        </div>
      </div>

      {/* <Ticker
        duration={10}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        isPlaying={isPlaying}
      >
        {skills.map((item, index) => (
          <div key={index} className="card">
            <Image src={item} width={200} height={300} />
          </div>
        ))}
      </Ticker> */}
    </div>
  );
};

export default Skills;
