import { ActionWithPayload } from "reduxes";
import { Payload as UIPayload } from "./ui/payload";
import { Payload as UIPagePayload } from "./ui/page/payload";

export interface ActionCreators {
  UI: {
    activateAction: (action: string) => ActionWithPayload<UIPayload>,
    activateModule: (module: string, action: string, pageTitle: string) => ActionWithPayload<UIPayload>,
    Page: {
      setTitle: (title: string) => ActionWithPayload<UIPagePayload>,
    }
  };
}
