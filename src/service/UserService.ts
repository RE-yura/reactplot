import { get } from "./FetchWrapper";
import { IRes } from "../types";

const getMe = async () => {
  try {
    const res = await get<IRes>(`/user`);
    return res.data;
  } catch (error) {
    // return clientErrorHandler(error, { show: true });
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const userService = {
  getMe,
};
