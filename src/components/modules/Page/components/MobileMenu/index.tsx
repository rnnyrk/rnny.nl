import React, { useState, useContext } from 'react';

import { Social } from '../';
import { MobileNavigation, Hamburger } from './styled';
import { ColorContext } from 'services/context/ColorContext';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const currentColor = useContext(ColorContext);

  return (
    <>
      <Hamburger onClick={() => setOpen(!open)} open={open} />
      <MobileNavigation open={open}>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>

        <Social />
      </MobileNavigation>
    </>
  );
}

export default MobileMenu;
