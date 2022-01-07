import React, { FC } from "react";
import styled from "styled-components";
import Hamburger from "../../atoms/global/Hamburger";
import LinkButton from "../../atoms/global/LinkButton";
import { useNavState } from "../../../redux/nav/useNavState";

type Props = {
  show: boolean;
};

const SideMenu: FC<Props> = (props) => {
  const { navState, setShowSideMenu, setBackDrop } = useNavState();

  return (
    <Wrapper show={props.show}>
      <Hamburger
        color={"black"}
        isMenuOpen={navState.showSideMenu}
        onClick={() => {
          setShowSideMenu(!navState.showSideMenu);
          setBackDrop({
            show: !navState.showSideMenu,
          });
        }}
      />

      <div className="flex flex-col justify-center items-center w-auto mt-12">
        <LinkButton href="/" text="Top" />
        <LinkButton href="/about" text="About" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ show: boolean }>`
  z-index: 30;
  position: fixed;
  top: 0;
  transition: 0.3s;
  right: ${(props) => (props.show ? "0" : "-200px")};
  opacity: ${(props) => (props.show ? "1" : "0")};

  height: 100%;
  width: 200px;

  background-color: white;

  padding: 0 20px;
`;

export default SideMenu;
