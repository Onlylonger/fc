import { startCase } from "lodash-es";
import { lazy } from "react";

export const componentsKeys = ["button", "app-bar"];
export const catMap = new Map();
export const catList = componentsKeys.map((v) => {
  const item = {
    label: startCase(v),
    id: v,
    MDContent: lazy(() =>
      import(`./[id]/${v}/README.mdx`).catch(() => "failed load")
    ),
  };
  catMap.set(v, item);
  return item;
});
