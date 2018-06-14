import * as Immutable from "immutable";
import { XActionHandlers } from "reduxes";
import { ActionHandlers as Page } from "./page/action.handlers";
import { ActionTypes } from "./action.types";
import { Payload } from "./payload";

export const ActionHandlers: XActionHandlers<Immutable.Map<string, any>, Payload> = {
  Page,
  [ActionTypes.ACTIVATE_ACTION]: (state, action, z) => {
    return z.set(state, "action", (action.payload.action as string).toUpperCase());
  },
  [ActionTypes.ACTIVATE_MODULE]: (state, action, z) => {
    return state.withMutations(map => map
      .setIn(z.keys("module"), (action.payload.module as string).toUpperCase())
      .setIn(z.keys("action"), (action.payload.action as string).toUpperCase())
      .setIn(z.keys("Page"), Immutable.fromJS({ title: action.payload.pageTitle }))
    );
  },
};
