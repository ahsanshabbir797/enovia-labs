import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

type MenuItem = {
  option: string;
  isOpen: boolean;
  routeLink: string;
  hasDropDown?: boolean;
  dropDownOptions?: string[];
};

const Navbar = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { option: "Home", routeLink: "/", isOpen: false, hasDropDown: false },
    { option: "About Us", routeLink: "/about-us", isOpen: false },
    {
      option: "Services",
      routeLink: "/services",
      isOpen: false,
      hasDropDown: true,
      dropDownOptions: [
        "Web Development",
        "Staff Augmentation",
        "Mobile Development",
        "UI/ UX Design",
        "IT Consulting",
        "DevOps",
        "Data Analytics and Insights",
        "Digital Marketing",
        "Graphic Design",
      ],
    },
    { option: "Projects", routeLink: "/projects", isOpen: false },
    { option: "Contact Us", routeLink: "/contact-us", isOpen: false },
  ]);

  const [rightMenu, setRightMenu] = useState({
    option: "Our Locations",
    isOpen: false,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = (index: number) => {
    const updatedItems = [...menuItems];
    updatedItems[index].isOpen = !updatedItems[index].isOpen;
    setMenuItems([...updatedItems]);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="logo-text">
        <span className="logo-text-enovia">Enovia</span>
        <span className="logo-text-labs">Labs</span>
      </div>

      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </div>

      <div className={`nav-content ${isMobileMenuOpen ? "show" : ""}`}>
        <ul className="navbar-items">
          {menuItems.map((item, index) => (
            <li key={index}>
              <div className="menu-item" onClick={() => handleToggle(index)}>
                <Link className="link-text" to={item.routeLink}>
                  {item.option}
                </Link>
                {item.hasDropDown && (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={`caret-icon ${item.isOpen ? "rotate" : ""}`}
                  />
                )}
              </div>
              {item.hasDropDown && item.isOpen && (
                <ul className="dropdown">
                  {item.dropDownOptions?.map((dropDownOption, i) => (
                    <li key={i} className="dropdown-item">
                      <Link
                        to={`${item.routeLink}/${dropDownOption
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {dropDownOption}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="buttons-container">
          <button className="nav-button">
            <Link className="link-text" to="/contact-us">
              Lets Talk Business
            </Link>
          </button>
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
      </div>
    </nav>
  );
};

export default Navbar;
