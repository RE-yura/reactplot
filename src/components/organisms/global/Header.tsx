import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: FC = () => {
  const router = useRouter();
  const [path, setPath] = useState("");

  useEffect(() => {
    const path = router.route;
    setPath(path);
    //   const category = props.params.category;
    //   console.log(category);
  });

  return (
    <StyledHeader>
      <Link href="/">
        <a className="text-white text-3xl ml-10 font-title">reactplot</a>
      </Link>
      <div className="header-btns text-xl mr-8">
        <Link href="/">
          <a className={`${path === "/" && "active"}`}>Top</a>
        </Link>
        <Link href="/2d">
          <a className={`${path.startsWith("/2d") && "active"}`}>2D</a>
        </Link>
        <Link href="/3d">
          <a className={`${path === "/3d" && "active"}`}>3D</a>
        </Link>
      </div>
    </StyledHeader>
  );
};

const headerHeight = 50;

const StyledHeader = styled.header`
  position: fixed;
  backdrop-filter: blur(2px);
  color: white;
  top: 0;
  z-index: 10000;
  width: 100%;
  height: ${headerHeight}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;

  img {
    margin-left: 0.5rem;
  }
  a {
    color: white;
  }

  & > .header-btns {
    display: flex;
    margin-left: 20px;

    & > a {
      line-height: ${headerHeight}px;
      display: block;
      padding: 0 20px;
      transition: background-color 0.5s;
      box-sizing: border-box;
      height: 50px;

      :hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
    & > .active {
      border-bottom: 4px solid #00adff;
    }
  }
`;

export default Header;
