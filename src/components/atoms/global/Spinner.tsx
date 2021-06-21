import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  color?: string;
  bg?: string;
  size?: number;
  top?: number;
};

const Spinner: FC<Props> = (props) => {
  return <StyledDiv {...props} />;
};

const StyledDiv = styled.div`
  margin: 0 auto;
  margin-top: ${(props) => props.top || 0}px;
  text-indent: -9999em;
  width: ${(props) => props.size || 30}px;
  height: ${(props) => props.size || 30}px;
  border-radius: 50%;
  background: ${(props) => props.color || "#ffffff"};
  background: -moz-linear-gradient(
    left,
    ${(props) => props.color || "#ffffff"} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    ${(props) => props.color || "#ffffff"} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(
    left,
    ${(props) => props.color || "#ffffff"} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -ms-linear-gradient(
    left,
    ${(props) => props.color || "#ffffff"} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    ${(props) => props.color || "#ffffff"} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: ${(props) => props.color || "#ffffff"};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }
  &:after {
    background: ${(props) => props.bg || "#eaeaea"};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
