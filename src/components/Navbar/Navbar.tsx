import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type MenuItem = {
  option: string;
  isOpen: boolean;
};

const Navbar = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { option: "Home", isOpen: false },
    { option: "About Us", isOpen: false },
    { option: "Services", isOpen: false },
    { option: "Projects", isOpen: false },
    { option: "Contact Us", isOpen: false },
  ]);

  const [rightMenu, setRightMenu] = useState({
    option: "Our Locations",
    isOpen: false,
  });

  const handleToggle = (index: number) => {
    const updatedItems = [...menuItems];
    updatedItems[index].isOpen = !updatedItems[index].isOpen;
    setMenuItems([...updatedItems]);
  };

  return (
    <nav className="nav-container">
      <div className="logo-text">
        <span className="logo-text-enovia">Enovia</span>
        <span className="logo-text-labs">Labs</span>
      </div>
      <div>
        <ul className="navbar-items">
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => handleToggle(index)}>
              {item.option}{" "}
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`caret-icon ${item.isOpen ? "rotate" : ""}`}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="buttons-container">
        <button className="nav-button">Explore Careers</button>
        <button className="nav-button">Lets Talk Business</button>
      </div>
      <div
        className="nav-right-option"
        onClick={() =>
          setRightMenu({ ...rightMenu, isOpen: !rightMenu.isOpen })
        }
      >
        <span>{rightMenu.option}</span>{" "}
        <span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`caret-icon ${rightMenu.isOpen ? "rotate" : ""}`}
          />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
