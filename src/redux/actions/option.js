import axios from "axios";
import { toast } from "react-toastify";
import { setOption } from "../reducers/option";

export const getOption = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}api/option`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setOption(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
