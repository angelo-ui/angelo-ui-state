import { ReducerUtil, withImmutableSelector } from "reduxes";
import * as Immutable from "immutable";
import { ActionHandlers } from "./action.handlers";
import { Initial } from "./state";

const initial = Immutable.fromJS(Initial);

export const Reducer = ReducerUtil.createReducer(initial, ActionHandlers, withImmutableSelector);
