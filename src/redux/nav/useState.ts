/**
 * Navigation Store
 */

import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import navSlice, { NavState } from "./slice";
import { BDType, FrontViewType } from "../../types";

export const useNavState = () => {
  const [loading] = useState(false);
  const [error] = useState("");
  const navState = useSelector((state: { nav: NavState }) => state.nav);
  const dispatch = useDispatch();

  // === actions ===============================
  const setBackDrop = useCallback(
    (bd: BDType) => {
      dispatch(navSlice.actions.setBackDrop(bd));
    },
    [dispatch],
  );
  const setShowSideMenu = useCallback(
    (show: boolean) => {
      dispatch(navSlice.actions.setShowSideMenu(show));
    },
    [dispatch],
  );
  const setFrontViewType = useCallback(
    (frontViewType: FrontViewType) => {
      dispatch(navSlice.actions.setFrontViewType(frontViewType));
    },
    [dispatch],
  );

  const actions = {
    setBackDrop,
    setShowSideMenu,
    setFrontViewType,
  };

  return { navState, ...actions, loading, error };
};
