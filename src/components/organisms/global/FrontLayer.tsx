import React, { FC } from "react";
import LaunchNotificationModal from "../modals/LaunchNotificationModal";
import { FrontViewType } from "../../../types";
// import ErrorModal from "../modals/ErrorModal";

type Props = {
  frontViewType: FrontViewType;
  onClose?: () => void;
};

const FrontLayer: FC<Props> = (props) => {
  switch (props.frontViewType) {
    case FrontViewType.LaunchNotification:
      return <LaunchNotificationModal onClose={props.onClose} />;
    // case FrontViewType.Error:
    //   return <ErrorModal />;
    default:
      return null;
  }
};

export default FrontLayer;
