/**
 * User Store
 */

import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import userSlice, { UserState } from "./userSlice";
import { userService } from "../../service/UserService";

export const useUserState = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const userState = useSelector((state: { user: UserState }) => state.user);
  const dispatch = useDispatch();

  const getMe = useCallback(async () => {
    setLoading(true);
    try {
      const result = await userService.getMe();
      dispatch(userSlice.actions.setMe(result));
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, [dispatch]);

  const actions = {
    getMe,
  };

  return { userState, ...actions, loading, setLoading, error };
};
