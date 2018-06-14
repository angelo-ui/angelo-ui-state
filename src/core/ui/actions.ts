import { ActionUtil } from "reduxes";
import { Actions as Page } from "./page/actions";
import { ActionTypes } from "./action.types";
import { Payload } from "./payload";

export const Actions = {
  Page,
  activateAction: (action: string) => ActionUtil.createAction<Payload>(ActionTypes.ACTIVATE_ACTION, { action }),
  activateModule: (module: string, action: string, pageTitle: string) => ActionUtil.createAction<Payload>(ActionTypes.ACTIVATE_MODULE, { module, action, pageTitle }),
};
