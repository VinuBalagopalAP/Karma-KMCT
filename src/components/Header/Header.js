import { useState } from "react";
import classes from "./Header.module.css";

import { FiMenu } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import Dropdown from "./Dropdown";

const Header = () => {
  const [scrolled, isScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [drop, setDrop] = useState(false);

  window.onscroll = () => {
    isScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header
      className={`${!scrolled ? classes.header : classes.scrolledHeader}`}
    >
      <div className={classes.elements}>
        <div className={classes.logobox}>
          <img
            src="assets/Header/header_logo.png"
            alt="/"
            className={classes.logo}
          />
        </div>

        <div className={classes.navbox}>
          <ul className={classes.nav}>
            <li className={classes.navLink}>
              <Link activeClass={classes.active} to="home" spy={true} smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li className={classes.navLink}><Link activeClass={classes.active} to="about" spy={true} smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                About
              </Link></li>
            <li
              className={`${classes.dropLink}`}
              onClick={() => setDrop(!drop)}
            >
              {drop ? <Dropdown click={() => setDrop(!drop)} /> : ""}Events
              <FontAwesomeIcon
                size="sm"
                style={{ display: "inline-block", marginLeft: ".3rem" , color: "white"}}
                icon={faArrowDown}
                fade
              />
            </li>
            <li className={classes.navLink}><Link activeClass={classes.active} to="ambassador" spy={true} smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                Register
              </Link></li>
            <li className={classes.navLink}><Link activeClass={classes.active} to="contact" spy={true} smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                Contact
              </Link></li>
          </ul>

         {/* Mobile Page */}

          <Link to="/">
            <button className={classes.btn}>Buy Tickets</button>
          </Link>

          <div className={classes.hamburger} onClick={() => setMobile(!mobile)}>
            {mobile ? (
              <FontAwesomeIcon icon={faXmark} style={{ color: "white" }} size="3x" />
            ) : (
              <FiMenu size={20} />
            )}
          </div>
        </div>

        <div className={`${!mobile ? classes.none : classes.mobileBox}`}>
          <Link to="/">
            <button className={classes.btn}>Buy Tickets</button>
          </Link>

          <ul className={classes.mobileNav}>
            <li>
              <Link onClick={() => setMobile(!mobile)} activeClass={classes.active} to="home" spy={true} smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li><Link onClick={() => setMobile(!mobile)} activeClass={classes.active} to="about" spy={true} smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}>
                About
              </Link></li>
            <li className={`${classes.mobLink}`} onClick={() => setDrop(!drop)}>{drop ? <Dropdown click={() => setDrop(!drop)} /> : ""}Events<FontAwesomeIcon size="sm" style={{display: "inline-block", marginLeft: ".3rem", color: "white"}} icon={faArrowDown} fade /></li>
            <li><Link onClick={() => setMobile(!mobile)} activeClass={classes.active} to="ambassador" spy={true} smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}>
                Register
              </Link></li>
              <li><Link onClick={() => setMobile(!mobile)} activeClass={classes.active} to="contact" spy={true} smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}>
                Contact
              </Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
