import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

type Props = {
  href: string;
  padding: string;
  margin: string;
  color: string;
  bg: string;
  position: string;
  top: string;
  bottom: string;
  right: string;
  left: string;
  radius: string;
} & JSX.IntrinsicElements["button"];

const Button: FC<Partial<Props>> = (props) => {
  const Container = <StyledButton {...props}>{props.children}</StyledButton>;

  return props.href ? <Link href={props.href}>{Container}</Link> : <>{Container}</>;
};

export const StyledButton = styled.button`
  background-color: ${(props) => props.bg || "#eaeaea"};
  color: ${(props) => props.color || "#2b2b2e"};
  padding: ${(props) => props.padding || "0 2px"};
  margin: ${(props) => props.margin || "0"};
  border-radius: ${(props) => props.radius || "4px"};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: ${(props) => props.position || "unset"};
  top: ${(props) => props.top || "unset"};
  bottom: ${(props) => props.bottom || "unset"};
  left: ${(props) => props.left || "unset"};

  :focus {
    outline: none;
  }
`;

export default Button;
