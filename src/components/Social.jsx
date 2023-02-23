import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex-center home-social">
      <a
        href="https://www.linkedin.com/in/ghizlane-el-atmani-a91732214/"
        className="social-icon"
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "#222",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/ghizlane-elatmani"
        className="social-icon"
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "#222",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
      >
        <FaGithubSquare />
      </a>
    </div>
  );
};

export default Social;
