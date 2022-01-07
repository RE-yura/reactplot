import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { XAxisType, YAxisType } from "../../types";

export type PlotState = {
  xaxis: XAxisType;
  yaxis: YAxisType;
  labels: string[];
};

export const initialState: PlotState = {
  xaxis: { label: "", id: 0, range: [0, 10] },
  yaxis: { label: "", ids: [1], range: [0, 20] },
  labels: [],
};

const plotSlice = createSlice({
  name: "plot",
  initialState,
  reducers: {
    setXAxis: (state, action: PayloadAction<XAxisType>) => ({
      ...state,
      xaxis: action.payload,
    }),
    setYAxis: (state, action: PayloadAction<YAxisType>) => ({
      ...state,
      yaxis: action.payload,
    }),
    setLabels: (state, action: PayloadAction<string[]>) => ({
      ...state,
      labels: action.payload,
    }),
  },
});

export default plotSlice;
