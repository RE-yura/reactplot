import React, { FC } from "react";
import styled from "styled-components";
import Footer from "../organisms/global/Footer";
import Header from "../organisms/global/Header";

type Props = {
  bg?: string;
  notTop?: boolean;
};

const DefaultLayout: FC<Props> = (props) => {
  return (
    <Container className="font-body">
      <Header notTop={props.notTop} bg={props.bg} />
      <StyledMain>{props.children}</StyledMain>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  position: relative;
  background-color: #eaeaea;
`;

const StyledMain = styled.main`
  padding: 50px 20px;
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export default DefaultLayout;
