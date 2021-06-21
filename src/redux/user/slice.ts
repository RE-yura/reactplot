import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

export type UserState = {
  me: User;
};

export const initialState: UserState = {
  me: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMe: (state, action: PayloadAction<User>) => ({
      ...state,
      me: action.payload,
    }),
  },
});

export default userSlice;
