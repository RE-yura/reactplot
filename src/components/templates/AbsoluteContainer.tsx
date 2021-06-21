import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

const AbsoluteContainer: FC<Props> = (props) => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};

const StyledDiv = styled.div`
  position: absolute;
  top: ${(props) => props.top || "unset"};
  bottom: ${(props) => props.bottom || "unset"};
  left: ${(props) => props.left || "unset"};
  right: ${(props) => props.right || "unset"};
`;

export default AbsoluteContainer;
