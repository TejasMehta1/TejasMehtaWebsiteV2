import Burger from "./burger"
import Menu from "./menu"
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks';


const MobileNav = () => {

  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));


  return(
    <div id="mobileNav" ref={node}>
      <Burger open={open} isOpen={setOpen} onClick={() => setOpen(!open)}/>
      <Menu open={open}/>
    </div>
  )
}
export default MobileNav
