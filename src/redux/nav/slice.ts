import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BDType, FrontViewType } from "../../types";

export type NavState = {
  backDrop: BDType; // バックドロップ
  showSideMenu: boolean; // ドロワー(サイド)メニュー
  frontViewType: FrontViewType; // モーダルのcontentを制御
};

export const initialState: NavState = {
  backDrop: {
    show: false,
    isDark: true,
  },
  showSideMenu: false,
  frontViewType: FrontViewType.None,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setBackDrop: (state, action: PayloadAction<BDType>) => ({
      ...state,
      backDrop: {
        show: action.payload.show,
        isDark: action.payload.isDark || true,
      },
    }),
    setShowSideMenu: (state, action: PayloadAction<boolean>) => ({
      ...state,
      showSideMenu: action.payload,
    }),
    setFrontViewType: (state, action: PayloadAction<FrontViewType>) => ({
      ...state,
      frontViewType: action.payload,
    }),
  },
});

export default navSlice;
