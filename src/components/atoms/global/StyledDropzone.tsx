import React, { FC } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

type Props = {
  accept: string;
  onDropAccepted: (files) => void;
  onDropRejected: () => void;
};

const StyledDropzone: FC<Props> = (props) => {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: "text/csv",
    onDropAccepted: props.onDropAccepted,
    onDropRejected: props.onDropRejected,
  });

  return (
    <div className="container">
      <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        {props.children}
      </Container>
    </div>
  );
};

export default StyledDropzone;
