import React from "react";
import styled from "styled-components";
interface IProps {
  color?: string;
  isMenuOpen: boolean;
  onClick: () => void;
}

const Hamburger = (props: IProps) => {
  const classes = props.isMenuOpen ? ["is_active"] : [];

  return (
    <HanburgerMenu
      color={props.color}
      className={classes.join(" ")}
      onClick={(e) => {
        e.preventDefault();
        props.onClick();
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </HanburgerMenu>
  );
};

export default Hamburger;

const HanburgerMenu = styled.a`
  display: block;
  transition: all 0.4s;
  box-sizing: border-box;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 26px;
  height: 20px;
  margin: auto 0;

  :hover {
    cursor: pointer;
  }

  & span {
    display: inline-block;
    transition: all 0.4s;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${(props) => props.color || "white"};
    border-radius: 4px;
    margin: 0 auto;

    &:nth-of-type(1) {
      top: 0;
    }

    &:nth-of-type(2) {
      top: 50%;
      transform: translate(0%, -50%);
    }

    &:nth-of-type(3) {
      bottom: 0;
    }
  }

  &.is_active {
    & span {
      &:nth-of-type(1) {
        width: 45%;
        -webkit-transform: translate3d(2px, 10px, 0) rotate(405deg);
        transform: translate3d(2.5px, 3.5px, 0) rotate(405deg);
      }

      &:nth-of-type(2) {
        -webkit-transform: translate3d(-1px, 0, 0) rotate(-45deg);
        transform: translate3d(0px, -2px, 0) rotate(-45deg);
      }

      &:nth-of-type(3) {
        width: 45%;
        -webkit-transform: translate3d(23px, -9px, 0) rotate(405deg);
        transform: translate3d(12px, -3px, 0) rotate(405deg);
      }
    }
  }
`;
