import { ActionUtil, XActionHandlers, Reducer } from "reduxes";
import { Core as Core_ActionCreators } from "./action.creators";
import { Core as Core_ActionHandlers } from "./action.handlers";
import { Core as Core_ActionTypes } from "./action.types";
import { Core as Core_Reducer } from "./reducer";
import { Core as Core_Inital } from "./initial";
import { Core } from "./state";

export const ActionCreators: ActionUtil.ActionCreators = {
  Core: Core_ActionCreators,
};

export const ActionHandlers: XActionHandlers<any, any> = {
  Core: Core_ActionHandlers,
};

export const ActionTypes: { [key: string]: any; } = {
  Core: Core_ActionTypes,
};

export const Reducers: { [key: string]: Reducer<any, any>; } = {
  Core: Core_Reducer,
};

export const Initial: { [key: string]: any; } = {
  Core: Core_Inital,
};

export {
  Core,
};
