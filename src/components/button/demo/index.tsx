"use client";

import { Button } from "fc/components";
import { LivePlayground } from "@/app/shared/LivePlaygournd";

const scope = { Button };
import normalStr from "./normal-string.txt";

export function Demo() {
  return <LivePlayground codeString={normalStr} scope={scope} />;
}
