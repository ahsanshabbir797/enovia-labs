import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

type MenuItem = {
  option: string;
  isOpen: boolean;
  routeLink:string;
};

const Navbar = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { option: "Home",routeLink:"/", isOpen: false },
    { option: "About Us",routeLink:"/about-us", isOpen: false },
    { option: "Services",routeLink:"/services", isOpen: false },
    { option: "Projects",routeLink:"/projects", isOpen: false },
    { option: "Contact Us",routeLink:"/contact-us", isOpen: false },
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
              <Link className="link-text" to={item.routeLink}>{item.option}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="buttons-container">
        <button className="nav-button"><Link className="link-text" to="/contact-us">Lets Talk Business</Link></button>
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
