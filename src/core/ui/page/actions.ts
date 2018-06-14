import { ActionUtil } from "reduxes";
import { ActionTypes } from "./action.types";
import { Payload } from "./payload";

export const Actions = {
  setTitle: (title: string) => ActionUtil.createAction<Payload>(ActionTypes.SET_TITLE, { title }),
};
