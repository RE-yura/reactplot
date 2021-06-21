import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type Props = {
  hideCloseBtn?: boolean;
  onClose?: () => void;
};

const ModalCard: FC<Props> = (props) => {
  return (
    <Wrapper>
      {!props.hideCloseBtn && (
        <CloseBtn onClick={props.onClose}>
          <FontAwesomeIcon className="x-icon" icon={faTimes} />
        </CloseBtn>
      )}
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 30;

  padding: 30px 50px;
  text-align: center;
  width: 64vw;
  display: inline-block;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  box-shadow: 0 3px 18px 0 rgba(54, 54, 54, 0.65);
`;

const XSIZE = 36;

const CloseBtn = styled.button`
  position: absolute;
  top: ${-XSIZE / 2}px;
  right: ${-XSIZE / 2}px;
  width: 36px;
  height: 36px;
  background-color: #8d8d8d;
  border-radius: 18px;
  outline: none;
  :focus {
    outline: none;
  }

  > .x-icon {
    color: white;
    font-size: 20px;
    transform: translateY(3%);
  }
`;

export default ModalCard;
