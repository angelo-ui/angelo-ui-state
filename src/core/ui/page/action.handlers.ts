import * as Immutable from "immutable";
import { XActionHandlers } from "reduxes";
import { Payload } from "./payload";
import { ActionTypes } from "./action.types";

export const ActionHandlers: XActionHandlers<Immutable.Map<string, any>, Payload> = {
  [ActionTypes.SET_TITLE]: (state, action, z) => {
    return z.set(state, "title", action.payload.title);
  },
};
