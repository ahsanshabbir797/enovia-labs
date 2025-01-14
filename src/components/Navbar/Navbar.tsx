import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import Button from "./Button/Button";

// Define the type for each menu item
type MenuItem = {
  option: string;
  isOpen: boolean;
};

const Navbar = () => {
  // Array of menu items, each with its `isOpen` state to track rotations independently
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

  // Toggle the rotation state for a specific menu item
  const handleToggle = (index: number) => {
    const updatedItems = [...menuItems];
    updatedItems[index].isOpen = !updatedItems[index].isOpen;
    setMenuItems(
      // Update the `isOpen` state for the clicked item
      [...updatedItems]
    );
  };

  return (
    <nav className="nav-container">
      <div className="logo-text">
        <span className="logo-text-enovia">Enovia</span>
        <span className="logo-text-labs">Labs</span>
      </div>
      <div>
        <ul>
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
        {/* <Button onClick={()=> {console.log("I am clicked")}}>Explore Careers</Button> */}
        <button className="nav-button">Explore Careers</button>
        <button className="nav-button">Lets Talk Business</button>
      </div>
      {/* <Button onClick={()=> {console.log("I am clicked")}}>Explore Careers</Button> */}
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
