import "./Navbar.css";
import { useState } from "react";
import { Menu } from "./Menu";
import { BiGridAlt, BiX } from "react-icons/bi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <p className="logo">Ghizlane</p>

      <div className="menu-icons">
        {showMenu ? (
          <BiX
            onClick={handleClick}
            style={{ color: "white", fontSize: "1.2em", cursor: "pointer" }}
          />
        ) : (
          <BiGridAlt
            onClick={handleClick}
            style={{ color: "white", fontSize: "1.2em", cursor: "pointer" }}
          />
        )}
      </div>

      <ul className={`nav-list ${showMenu ? "active" : ""}`}>
        {Menu.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.className}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

// Home - About - Projects - Contact

export default Navbar;
