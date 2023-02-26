import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggle = () => {
    setMenuOpened((prev) => !prev);
  };

  const handleClick = () => {
    setMenuOpened(false);
  };

  return (
    <header>
      <nav>
        <div className="tab-hover">
          <FontAwesomeIcon icon={faBars} onClick={toggle} />
        </div>
        <div className="tab logo">
          <Link to="/">Makeup Online</Link>
        </div>
        <div className="tab">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </nav>
      {menuOpened && (
        <motion.div
          animate={{ height: ["0vh", "100vh"], opacity: [0, 0, 0, 1] }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className={`menu`}
        >
          <h2 className="menu-item">
            <Link to="/" onClick={handleClick}>
              HOME
            </Link>
          </h2>
          <br />
          <h2 className="menu-item">
            <Link to="/categories" onClick={handleClick}>
              CATEGORIES
            </Link>
          </h2>
          <br />
          <h4 className="menu-toggle" onClick={toggle}>
            <h2>× </h2>
            close
          </h4>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
