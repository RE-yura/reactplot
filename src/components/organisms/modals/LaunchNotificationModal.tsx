import React, { FC, useState, useEffect } from "react";
import ModalCard from "../../templates/ModalCard";
type Props = {
  onClose?: () => void;
};

const LaunchNotificationModal: FC<Props> = (props) => {
  return (
    <ModalCard onClose={props.onClose}>
      <div className="font-bold text-lg mb-4">Welcome to reactplot</div>
      <div className="text-xs tracking-tight">
        ESLint,Prettier,TailwindCSS,Reduxの設定だけでなく，
      </div>
      <div className="text-xs tracking-tight">
        RESTの叩き方，モーダルの出し分け，フォームの作り方など参考になればと思います．
      </div>
    </ModalCard>
  );
};

export default LaunchNotificationModal;
