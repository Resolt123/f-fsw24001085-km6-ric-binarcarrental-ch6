import axios from "axios";
import { toast } from "react-toastify";
import { setCars, setCar } from "../reducers/cars";

export const getCars = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}api/car`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setCars(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};

export const getCar = (navigate, id) => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}api/car/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setCar(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
    navigate("/");
  }
};

export const addCar =
  (
    navigate,
    plate,
    manufacture,
    model,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    photo,
    option,
    spec,
    setIsLoading
  ) =>
  async (dispatch, getState) => {
    const { token } = getState().auth;
    // make loading
    setIsLoading(true);

    let data = new FormData();
    data.append("plate", plate);
    data.append("manufacture", manufacture);
    data.append("model", model);
    if (photo) {
      data.append("photo", photo);
    }
    data.append("rentPerDay", rentPerDay);
    data.append("capacity", capacity);
    data.append("description", description);
    data.append("alevailabAt", availableAt);
    data.append("transmission", transmission);
    data.append("available", available);
    data.append("type", type);
    data.append("year", year);
    if (option) {
      option.map((op) => data.append("option", op));
    }
    if (spec) {
      spec.map((sp) => data.append("spec", sp));
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}api/car`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);

      // get and save the token to local storage
      const { data } = response.data;
      console.log(data);
      // redirect to home
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }

    setIsLoading(false);
  };

export const editCar =
  (
    navigate,
    id,
    plate,
    manufacture,
    model,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    photo,
    option,
    spec,
    setIsLoading
  ) =>
  async (dispatch, getState) => {
    const { token } = getState().auth;
    // make loading
    setIsLoading(true);

    let data = new FormData();
    data.append("plate", plate);
    data.append("manufacture", manufacture);
    data.append("model", model);
    data.append("photo", photo);
    data.append("rentPerDay", rentPerDay);
    data.append("capacity", capacity);
    data.append("description", description);
    data.append("alevailabAt", availableAt);
    data.append("transmission", transmission);
    data.append("available", available);
    data.append("type", type);
    data.append("year", year);
    if (option) {
      for (const [key, value] of Object.entries(option)) {
        data.append("option", value);
        data.append("id_option", key);
      }
    }
    if (spec) {
      for (const [key, value] of Object.entries(spec)) {
        data.append("spec", value);
        data.append("id_spec", key);
      }
    }

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}api/car/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);

      // get and save the token to local storage
      const { data } = response.data;
      console.log(data);
      // redirect to detail car
      navigate(`/cars/${id}`);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }

    setIsLoading(false);
  };

export const deleteCar = (navigate, id) => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}api/car/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    toast.success("berhasil mendelete data");
    dispatch(setCar(null));
    navigate("/");
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
