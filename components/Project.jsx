import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Ticker from "framer-motion-ticker";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";

const Project = ({
  linkStyle,
  title,
  desc,
  url,
  style,
  iconStyle,
  image,
  imageContainerStyle,
  imageStyle,
  tickerOn,
  index,
  direction,
}) => {
  const flags = [
    "🇯🇵",
    "🇰🇷",
    "🇩🇪",
    "🇨🇳",
    "🇺🇸",
    "🇫🇷",
    "🇪🇸",
    "🇮🇹",
    "🇷🇺",
    "🇬🇧",
    "🇲🇦",
  ];

  return (
    <motion.div
      className={`${linkStyle}`}
      variants={fadeIn(direction, "spring", index * 0.5, 0.75)}
    >
      <Link href={url}>
        <div
          className={`${style} group rounded-lg shadow-lg border-2 border-white h-[100%] overflow-hidden`}
        >
          <div className="flex justify-between items-center font-bold text-xl mb-2 px-7 pt-7">
            <p>{title}</p>
            <BsFillArrowRightCircleFill
              className={`${iconStyle} group-hover:translate-x-1 duration-100`}
            />
          </div>
          <p className="text-sm mb-7 font-semibold px-7">{desc}</p>

          <div className={`${imageContainerStyle}`}>
            {tickerOn && (
              <Ticker duration={10} isPlaying={true}>
                {flags.map((item, index) => (
                  <div
                    key={index}
                    className="text-xl sm:text-5xl w-[24px] h-[24px] sm:w-[60px] sm:h-[60px] m-2"
                  >
                    {item}
                  </div>
                ))}
              </Ticker>
            )}
            <img src={image} className={imageStyle} alt="" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Project;
