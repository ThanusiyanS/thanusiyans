import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GiCandleFlame } from "react-icons/gi";
import { HeaderContainer,Nav,Logo,NavItem } from "./HeaderStyles";

const Header = () => {
  const [bar, setBar] = useState(false);
  return (
      <HeaderContainer bar={bar} >
      <Logo>
        <span className="green">
          <GiCandleFlame />
        </span>
      </Logo>
      <Nav bar={bar}>
        <NavItem>
          <a href="#home" onClick={() => setBar(!bar)}>Home</a>
        </NavItem>
        <NavItem>
          <a href="#service" onClick={() => setBar(!bar)}>Services</a>
        </NavItem>
        <NavItem>
          <a href="#project" onClick={() => setBar(!bar)}>Projects</a>
        </NavItem>
        <NavItem>
          <a href="#client" onClick={() => setBar(!bar)}>Testimonials</a>
        </NavItem>
        <NavItem>
          <a href="#footer" onClick={() => setBar(!bar)}>Portfolio</a>
        </NavItem>
      </Nav>
      <div onClick={() => setBar(!bar)} className="bars">
        <div className="bar"></div>
      </div>
    </HeaderContainer>
    
  );
};

export default Header;

