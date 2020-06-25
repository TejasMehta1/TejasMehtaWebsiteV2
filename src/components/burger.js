import React from 'react';
import { StyledBurger } from './Burger.styled';
import { bool, func } from "prop-types"
import Menu from "./menu"

const Burger = ({ open, isOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => isOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  isOpen: func.isRequired
}

export default Burger;
