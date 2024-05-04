import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth";
import cars from "./cars";
import option from "./option";
import spec from "./spec";

export default combineReducers({
    auth,
    cars,
    option,
    spec
});