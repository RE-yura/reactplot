import React, { FC } from "react";
import styled from "styled-components";
import Hamburger from "../../atoms/global/Hamburger";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavState } from "../../../redux/nav/useState";
import { useRouter } from "next/router";

type Props = {
  notTop?: boolean;
  hideHamburger?: boolean;
  bg?: string;
};

const Header: FC<Props> = (props) => {
  const router = useRouter();
  const { navState, setShowSideMenu, setBackDrop } = useNavState();

  return (
    <StyledHeader bg={props.bg}>
      <div className="header-icon">
        {!props.notTop ? (
          <Link href="/">
            {/* <img className="w-28 header-icon-logo" src="/img/vercel.svg" /> */}
            <a className="text-white text-3xl ml-10 font-title">reactplot</a>
          </Link>
        ) : (
          <FontAwesomeIcon
            onClick={() => router.back()}
            className="header-icon-back"
            icon={faAngleLeft}
          />
        )}
      </div>

      {!props.hideHamburger && (
        <Hamburger
          isMenuOpen={navState.showSideMenu}
          onClick={() => {
            setShowSideMenu(!navState.showSideMenu);
            setBackDrop({ show: !navState.showSideMenu });
          }}
        />
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  position: fixed;
  top: 0;
  align-items: center;
  background-color: ${(props) => props.bg || "black"};
  color: white;
  z-index: 10;
  img {
    margin-left: 1rem;
  }

  .header-icon {
    cursor: pointer;

    &-back {
      margin-left: 20px;
      font-size: 30px;
    }
  }
`;

export default Header;
