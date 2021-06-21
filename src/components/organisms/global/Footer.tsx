import React, { FC } from "react";
import styled from "styled-components";

const Footer: FC = () => {
  return (
    <StyledFooter>
      {" "}
      <p>{`© ${process.env.developer} ${new Date().getFullYear()}`}</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  height: 50px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: #ffffff;

  img {
    margin-left: 0.5rem;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Footer;
