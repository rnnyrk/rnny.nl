import React, { useState, useContext } from 'react';

import { Social } from '../';
import { Hamburger, MobileNavigation, NavList, NavLink, NavItem } from './styled';
import { ColorContext } from 'services/context/ColorContext';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const currentColor = useContext(ColorContext);

  return (
    <>
      <Hamburger
        onClick={() => setOpen(!open)}
        open={open}
        variant={currentColor}
      />
      <MobileNavigation variant={currentColor} open={open}>
        <NavList variant={currentColor}>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
        </NavList>

        <Social />
      </MobileNavigation>
    </>
  );
}

export default MobileMenu;
