import React, { useState, useEffect } from "react";
import logo from "./../Movieinfinity.gif"
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
  
             <nav className={`navbar ${show && "navbar--black"}`}>
                 <img src={logo} alt="" className="navbar__logo"/>
              </nav>
   
   );

};

export default Navbar;
