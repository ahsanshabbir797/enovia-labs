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
  dropDownOptions?: { option: string; routeLink: string }[];
};

const Navbar = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { option: "Home", routeLink: "/", isOpen: false, hasDropDown: false },
    { option: "About Us", routeLink: "/about-us", isOpen: false },
    {
      option: "Services",
      routeLink: "",
      isOpen: false,
      hasDropDown: true,
      dropDownOptions: [
        { option: "Web Development", routeLink: "web-development" },
        { option: "Staff Augmentation", routeLink: "staff-augmentation" },
        { option: "Mobile Development", routeLink: "mobile-development" },
        { option: "UI UX Design", routeLink: "ui-ux-design" },
        { option: "IT Consulting", routeLink: "it-consulting" },
        { option: "DevOps", routeLink: "devops" },
        {
          option: "Data Analytics and Insights",
          routeLink: "data-analytics-and-insights",
        },
        { option: "Digital Marketing", routeLink: "digital-marketing" },
        { option: "Graphic Design", routeLink: "graphic-design" },
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
  const handleDropDownClick = (index: number) => {
    const updatedItems = [...menuItems];
    updatedItems[index].isOpen = false;
    setMenuItems(updatedItems);
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
            <li key={item.option}>
              <div className="menu-item" onClick={() => handleToggle(index)}>
                {index !== 2 ? (
                  <Link className="link-text" to={item.routeLink}>
                    {item.option}
                  </Link>
                ) : (
                  <a className="link-text">{item.option}</a>
                )}
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
                        to={`/services/${dropDownOption.routeLink}`}
                        onClick={() => handleDropDownClick(index)}
                        className="drop-down-link"
                      >
                        {dropDownOption.option}
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
