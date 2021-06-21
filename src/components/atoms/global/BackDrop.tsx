import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  isDark?: boolean; // 黒くするか
  onClick?: () => void; // クリックで閉じる時の処理書く
};

const BackDrop: FC<Props> = (props) => {
  return (
    <Wrapper
      isDark={props.isDark}
      onClick={() => {
        props.onClick?.();
      }}
    />
  );
};

const Wrapper = styled.div<{ isDark: boolean }>`
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: rgba(96, 96, 96, ${(props) => (props.isDark ? 0.33 : 0)});
`;

export default BackDrop;
