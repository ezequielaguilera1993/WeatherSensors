import { combineReducers } from "redux";
import { defaultReducer } from "./defaultReducer";


export const rootReducer = combineReducers({
    defaultReducer
});

export type RootState = ReturnType<typeof rootReducer>;//Para el useSelector

export const ReducerIndexSignal = "ReducerIndexSignal"