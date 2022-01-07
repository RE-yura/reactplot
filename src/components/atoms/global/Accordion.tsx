import React, { FC, useState } from "react";
import styled from "styled-components";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

type Props = {
  label: string;
};

const Accordion: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col mb-2">
      <StyledLabel onClick={() => setIsOpen(!isOpen)}>
        {props.label}
        <div className="">{isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}</div>
      </StyledLabel>
      <StyledContent isOpen={isOpen}>
        <Collapse timeout={500} in={isOpen}>
          <div className="p-6">{props.children}</div>
        </Collapse>
      </StyledContent>
      {/* {isOpen && <div>{props.children}</div>} */}
    </div>
  );
};

const StyledLabel = styled.div`
  background-color: black;
  border: 1px solid black;
  cursor: pointer;
  padding: 4px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`;

const StyledContent = styled.div`
  background-color: white;
  border: 1px solid black;
`;

export default Accordion;
