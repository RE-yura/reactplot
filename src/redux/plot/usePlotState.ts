/**
 * Plot Store
 */

import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import plotSlice, { PlotState } from "./plotSlice";
import { XAxisType, YAxisType } from "../../types";

export const usePlotState = () => {
  const [loading] = useState(false);
  const [error] = useState("");
  const plotState = useSelector((state: { plot: PlotState }) => state.plot);
  const dispatch = useDispatch();

  // === actions ===============================
  const setXAxis = useCallback(
    (axis: XAxisType) => {
      dispatch(plotSlice.actions.setXAxis(axis));
    },
    [dispatch],
  );
  const setYAxis = useCallback(
    (axis: YAxisType) => {
      dispatch(plotSlice.actions.setYAxis(axis));
    },
    [dispatch],
  );
  const setLabels = useCallback(
    (labels: string[]) => {
      dispatch(plotSlice.actions.setLabels(labels));
    },
    [dispatch],
  );

  const actions = {
    setXAxis,
    setYAxis,
    setLabels,
  };

  return { plotState, ...actions, loading, error };
};
