import { combineReducers } from "redux";
import petCounter from "./petCounter";
import petFavorite from "./petFavorite";

const reducers = combineReducers({ petCounter, petFavorite });

export default reducers;
