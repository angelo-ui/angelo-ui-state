import { XActionHandlers } from "reduxes";
import { ActionHandlers as UI } from "./ui/action.handlers";

export const ActionHandlers: XActionHandlers<any, any> = {
  UI,
};
