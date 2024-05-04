import axios from "axios";
import { toast } from "react-toastify";
import { setSpec } from "../reducers/spec";

export const getSpec = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}api/spec`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setSpec(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
