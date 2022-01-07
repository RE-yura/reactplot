import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  type: "text" | "password" | "email" | "number";
  width: string;
  height: string;
  error: string;
  label: string;
  fontSize: string;
  padding: string;
  readOnly: boolean;
  textAlign: string;
} & JSX.IntrinsicElements["input"];

const TextField: FC<Partial<Props>> = (props) => {
  return (
    <div className="flex flex-row">
      {props.label && <Label className="my-auto">{props.label}</Label>}
      <StyledDiv width={props.width} className="flex flex-col w-full">
        <TextFieldWrapper type={props.type} height={props.height} {...props} />
        <StyledError className="text-xs text-error">{props.error}</StyledError>
      </StyledDiv>
    </div>
  );
};

const StyledError = styled.div`
  min-height: 16px;
  white-space: nowrap;
`;

const StyledDiv = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
`;

const Label = styled.span`
  height: ${(props) => (props.width ? props.height : "40px")};
`;

const BaseTextField = styled.input<{
  error?: boolean;
  fontSize?: string;
  padding?: string;
}>`
  height: ${(props) => (props.height ? props.height : "40px")};
  line-height: ${(props) => (props.height ? props.height : "40px")};
  box-sizing: border-box;
  -webkit-appearance: none;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  padding: ${(props) => props.padding || "0px 15px"};
  border-width: 0 0 1px 0;
  border-style: solid;
  color: #424242;
  background-color: #eaeaea;
  border-color: ${(props) => (props.error ? "red" : "#bfbfbf")};
  text-align: ${(props) => props.textAlign || "left"};
  outline: none;
`;

const TextFieldWrapper = styled(BaseTextField)<{
  height?: string;
  error?: boolean;
}>`
  height: ${(props) => (props.height ? props.height : "40px")};
`;

export default TextField;
